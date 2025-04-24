
import { useEffect, useState } from 'react';

type CursorVariant = 'default' | 'button' | 'link' | 'text' | 'image';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Only show cursor after first mouse movement
      if (!visible) setVisible(true);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      
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
    window.addEventListener('mouseover', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [position.x, position.y, visible]);
  
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
        return 'scale-150 border-primary bg-primary/10 mix-blend-difference';
      case 'link':
        return 'scale-150 border-secondary bg-secondary/10 mix-blend-difference';
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
        className={`custom-cursor transition-all duration-200 ${getCursorStyles()} ${clicking ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) ${clicking ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
