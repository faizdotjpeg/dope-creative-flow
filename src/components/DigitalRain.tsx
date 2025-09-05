import { useEffect, useRef, useState } from 'react';

interface DigitalRainProps {
  intensity?: 'light' | 'medium' | 'heavy';
  opacity?: number;
}

const DigitalRain = ({ intensity = 'light', opacity = 0.15 }: DigitalRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDarkMode(html.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Create observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

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

      // Create trailing effect with theme-aware background
      const trailColor = isDarkMode ? `rgba(0, 0, 0, ${fadeRate})` : `rgba(255, 255, 255, ${fadeRate})`;
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties with theme-aware colors
      const textColor = isDarkMode 
        ? `hsla(142, 100%, 55%, ${opacity})` 
        : `hsla(142, 80%, 35%, ${opacity * 1.5})`;
      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textBaseline = 'top';

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Add glow effect for primary characters with theme awareness
        if (Math.random() < 0.1) {
          const shadowColor = isDarkMode ? 'hsl(142, 100%, 55%)' : 'hsl(142, 80%, 35%)';
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = isDarkMode ? 8 : 6;
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
  }, [intensity, opacity, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: isDarkMode ? 'screen' : 'multiply',
        filter: isDarkMode ? 'contrast(1.2) brightness(0.8)' : 'contrast(1.1) brightness(1.2)',
        opacity: isDarkMode ? 1 : 0.7
      }}
    />
  );
};

export default DigitalRain;