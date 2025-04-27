
import { useEffect, useState } from 'react';

type CursorVariant = 'default' | 'button' | 'link' | 'text' | 'image';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      
      // Only show cursor after first mouse movement
      if (!visible) setVisible(true);
    };

    const updateCursorType = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      
      if (!hoveredElement) return;
      
      if (hoveredElement.tagName === 'BUTTON' || 
          hoveredElement.closest('button') || 
          hoveredElement.getAttribute('role') === 'button' ||
          hoveredElement.classList.contains('cursor-pointer')) {
        setVariant('button');
      } else if (hoveredElement.tagName === 'A' || hoveredElement.closest('a')) {
        setVariant('link');
      } else if (hoveredElement.tagName === 'IMG' || 
                hoveredElement.classList.contains('portfolio-item') ||
                hoveredElement.closest('.portfolio-item')) {
        setVariant('image');
      } else if (hoveredElement.tagName === 'INPUT' || 
                hoveredElement.tagName === 'TEXTAREA' ||
                hoveredElement.classList.contains('text-content')) {
        setVariant('text');
      } else {
        setVariant('default');
      }
    };
    
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updateCursorType); // Use the same event for both functions
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [visible]);
  
  // Hide default cursor via CSS
  useEffect(() => {
    document.body.classList.add('custom-cursor-enabled');
    
    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  // Get cursor styles based on variant
  const getCursorStyles = () => {
    switch (variant) {
      case 'button':
        return 'scale-150 border-primary bg-primary/20 mix-blend-difference';
      case 'link':
        return 'scale-150 border-secondary bg-secondary/20 mix-blend-difference';
      case 'image':
        return 'scale-[2] border-white backdrop-invert backdrop-grayscale';
      case 'text':
        return 'w-1 h-5 rounded-none border-none bg-foreground';
      default:
        return '';
    }
  };

  if (!visible) return null;

  return (
    <>
      <div
        className={`custom-cursor fixed pointer-events-none transition-transform duration-100 ${getCursorStyles()} ${clicking ? 'scale-75' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicking ? 'scale(0.8)' : 'scale(1)'}`
        }}
      />
      <div
        className="custom-cursor-dot fixed pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`
        }}
      />
    </>
  );
};

export default CustomCursor;
