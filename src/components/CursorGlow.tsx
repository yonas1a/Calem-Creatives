import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorGlow() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 w-96 h-96 bg-primary/25 dark:bg-primary/15 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-color-dodge z-0 hidden md:block transition-opacity duration-300"
      style={{
        translateX: "-50%",
        translateY: "-50%",
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
