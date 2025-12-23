import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
    name: string;
    path: string;
    isCurrent: boolean;
}

interface BreadcrumbsProps {
    items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    if (items.length === 0) return null;

    return (
        <div className="w-full bg-industrial-50/80 backdrop-blur-sm border-b border-industrial-100 sticky top-0 z-30">
            <nav className="max-w-7xl mx-auto px-6 py-3">
                <ol className="flex items-center space-x-2 text-[11px] text-industrial-400 font-medium uppercase tracking-widest">
                    {items.map((crumb, index) => (
                        <li key={`${crumb.path}-${crumb.name}`} className="flex items-center">
                            {index > 0 && <ChevronRight size={10} className="mx-2 opacity-50" />}
                            {crumb.isCurrent ? (
                                <span className="text-industrial-900">{crumb.name}</span>
                            ) : (
                                <Link to={crumb.path} className="hover:text-accent-blue transition-colors">
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
