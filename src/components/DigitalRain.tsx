import { useEffect, useRef } from 'react';

interface DigitalRainProps {
  intensity?: 'light' | 'medium' | 'heavy';
  opacity?: number;
}

const DigitalRain = ({ intensity = 'light', opacity = 0.15 }: DigitalRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital rain characters (matrix-style)
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charArray = chars.split('');

    // Configuration based on intensity
    const config = {
      light: { columns: Math.floor(canvas.width / 20), speed: 0.5, fadeRate: 0.05 },
      medium: { columns: Math.floor(canvas.width / 15), speed: 0.8, fadeRate: 0.03 },
      heavy: { columns: Math.floor(canvas.width / 12), speed: 1.2, fadeRate: 0.02 }
    };

    const { columns, speed, fadeRate } = config[intensity];
    const fontSize = canvas.width / columns;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime < 16 * (2 - speed)) {
        requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Create trailing effect
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeRate})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = `hsla(142, 100%, 55%, ${opacity})`;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = 'top';

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Add glow effect for primary characters
        if (Math.random() < 0.1) {
          ctx.shadowColor = 'hsl(142, 100%, 55%)';
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset drop when it goes off screen or randomly
        if (y > canvas.height || Math.random() > 0.98) {
          drops[i] = -fontSize;
        } else {
          drops[i] += fontSize;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'screen',
        filter: 'contrast(1.2) brightness(0.8)'
      }}
    />
  );
};

export default DigitalRain;