import { useEffect, useRef } from 'react';

interface FilmGrainProps {
  intensity?: 'light' | 'medium' | 'heavy';
  opacity?: number;
  animated?: boolean;
}

const FilmGrain = ({ intensity = 'light', opacity = 0.1, animated = true }: FilmGrainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Configuration based on intensity
    const config = {
      light: { grainSize: 1, density: 0.1 },
      medium: { grainSize: 1.5, density: 0.2 },
      heavy: { grainSize: 2, density: 0.3 }
    };

    const { grainSize, density } = config[intensity];

    const generateGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random();
        
        if (grain < density) {
          const value = Math.random() * 255;
          data[i] = value;     // Red
          data[i + 1] = value; // Green  
          data[i + 2] = value; // Blue
          data[i + 3] = opacity * 255; // Alpha
        } else {
          data[i + 3] = 0; // Transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let animationId: number;

    const animate = () => {
      generateGrain();
      if (animated) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start animation or generate static grain
    if (animated) {
      animate();
    } else {
      generateGrain();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, opacity, animated]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'overlay',
        filter: 'contrast(1.1)'
      }}
    />
  );
};

export default FilmGrain;