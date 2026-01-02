import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  density?: number;
  speed?: number;
  className?: string;
  maxDistance?: number;
  disableLines?: boolean;
  baseColor?: string;
  minSize?: number;
  maxSize?: number;
}

export const Particles: React.FC<ParticleProps> = ({ 
  density = 10, 
  speed = 0.2, 
  className = "absolute inset-0 pointer-events-none",
  maxDistance = 150,
  disableLines = false,
  baseColor = '#189A9E',
  minSize = 1,
  maxSize = 3
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{x: number, y: number, vx: number, vy: number, size: number, alpha: number}> = [];
    
    // Resize handler to maintain sharp rendering
    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const area = canvas.width * canvas.height;
      // Adjust density calculation based on screen area
      const count = Math.floor(area / (25000 / density)); 
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * (maxSize - minSize) + minSize,
          alpha: Math.random() * 0.3 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = baseColor;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      if (!disableLines) {
        // Draw connections between nearby particles
        ctx.strokeStyle = baseColor;
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              // Fade out line as distance increases
              ctx.globalAlpha = 0.15 * (1 - dist / maxDistance);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize(); // Initial setup
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, maxDistance, disableLines, baseColor, minSize, maxSize]);

  return <canvas ref={canvasRef} className={className} />;
};

export default Particles;