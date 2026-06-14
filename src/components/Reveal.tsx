import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
