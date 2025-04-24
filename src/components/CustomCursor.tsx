
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        hoveredElement?.tagName === 'BUTTON' ||
        hoveredElement?.tagName === 'A' ||
        (hoveredElement?.className || '').includes('cursor-pointer')
      );
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
