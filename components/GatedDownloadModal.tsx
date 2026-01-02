import React, { useState, useEffect, useRef } from 'react';
import { Download, X, Loader2, Building, User, Mail, CheckCircle } from 'lucide-react';

interface GatedDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileToDownload: { title: string; type: string } | null;
}

// Cookie Helpers (Inline to keep component self-contained)
const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

const GatedDownloadModal: React.FC<GatedDownloadModalProps> = ({ isOpen, onClose, fileToDownload }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '' });
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state when opening
      setIsSuccess(false);
      
      // Auto-fill from cookie if available
      const savedUser = getCookie('emphz_user_info');
      if (savedUser) {
        try {
           const parsed = JSON.parse(decodeURIComponent(savedUser));
           setFormData({ 
             name: parsed.name || '', 
             company: parsed.company || '', 
             email: parsed.email || '' 
           });
        } catch(e) {
           // Fallback to empty if cookie is corrupt
           setFormData({ name: '', company: '', email: '' });
        }
      } else {
         setFormData({ name: '', company: '', email: '' });
      }

      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Effect to trigger download on success
  useEffect(() => {
    if (isSuccess && fileToDownload) {
      // Persist user details to cookie on success (valid for 1 year)
      setCookie('emphz_user_info', encodeURIComponent(JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email
      })), 365);

      // Simulate file download
      const fileContent = `This is a placeholder for the document: ${fileToDownload.title}.\n\nForm Data Submitted:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}`;
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileToDownload.title.replace(/\s/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }, [isSuccess, fileToDownload, formData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('--- LEAD CAPTURED (Gated Download) ---');
    console.log('User:', formData);
    console.log('Downloaded:', fileToDownload?.title);
    console.log('------------------------------------');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-emphz-dark rounded-2xl border border-white/10 shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-20"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className={`p-8 transition-opacity duration-300 ${isSuccess ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-center mb-6">
            <div className="mx-auto bg-emphz-teal/10 w-16 h-16 rounded-full flex items-center justify-center border-4 border-emphz-teal/20">
               <Download className="w-8 h-8 text-emphz-teal" />
            </div>
            <h2 id="download-modal-title" className="text-2xl font-bold text-white mt-4">Unlock Your Download</h2>
            <p className="text-gray-400 text-sm mt-1">
              Provide your details to access: <br/>
              <span className="font-bold text-emphz-beige">{fileToDownload?.title}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -tranneutral-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              <input
                ref={firstInputRef}
                type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Full Name" required
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emphz-teal focus:border-emphz-teal outline-none"
              />
            </div>
            <div className="relative">
              <Building className="absolute left-3.5 top-1/2 -tranneutral-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              <input
                type="text" name="company" value={formData.company} onChange={handleChange}
                placeholder="Company Name" required
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emphz-teal focus:border-emphz-teal outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -tranneutral-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Business Email" required
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emphz-teal focus:border-emphz-teal outline-none"
              />
            </div>

            <button
              type="submit" disabled={isSubmitting}
              className="w-full bg-white text-emphz-navy font-black py-4 rounded-lg hover:bg-emphz-teal hover:text-white transition-all shadow-lg text-sm uppercase tracking-wide flex items-center justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin h-5 w-5 mr-2" /> Processing...</>
              ) : ( 'SUBMIT & DOWNLOAD' )}
            </button>
            <p className="text-[10px] text-gray-600 text-center pt-2">
              By submitting, you agree to receive occasional marketing updates.
            </p>
          </form>
        </div>
        
        {/* Success State */}
        <div className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border-4 border-green-500/20">
                <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-400 text-sm mb-6">
                Your download for "{fileToDownload?.title}" will begin shortly. If it doesn't, please check your browser settings.
            </p>
            <button
                onClick={onClose}
                className="w-full bg-emphz-teal text-emphz-navy font-black py-4 rounded-lg hover:bg-white transition-all shadow-lg text-sm uppercase tracking-wide"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default GatedDownloadModal;