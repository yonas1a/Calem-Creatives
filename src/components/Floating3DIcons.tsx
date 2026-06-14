import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface FloatingIconProps {
  className?: string;
  delay?: number;
  src?: string;
  alt?: string;
  bgClass?: string;
  hoverShadowClass?: string;
  glowNode?: React.ReactNode;
  floatDuration?: number;
  inversePhase?: boolean;
}

export function FloatingSocialIcon({ 
  className = "", 
  delay = 0,
  src,
  alt,
  bgClass = "bg-neutral-950/80 backdrop-blur-md",
  hoverShadowClass = "hover:shadow-cyan-500/20",
  glowNode,
  floatDuration = 4,
  inversePhase = false
}: FloatingIconProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for mechanical 3D tilt interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 120, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const sheenX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const sheenY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const floatY = inversePhase ? [12, -12] : [-12, 12];
  const shadowScale = inversePhase ? [1.15, 0.8] : [0.8, 1.15];
  const shadowOpacity = inversePhase ? [0.15, 0.35] : [0.35, 0.15];
  
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ y: floatY }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
        className="relative z-10 select-none group touch-none"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: "800px"
          }}
          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] ${bgClass} p-0.5 sm:p-[1.5px] border border-white/10 dark:border-white/5 shadow-2xl relative cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden transition-shadow duration-300 ${hoverShadowClass}`}
        >
          {glowNode}

          {/* Holographic reflections dynamic overlay */}
          <motion.div 
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)`,
              left: sheenX,
              top: sheenY,
            }}
            className="absolute inset-[-50%] pointer-events-none rounded-[24px]"
          />

          <div 
            style={{ 
              transform: "translateZ(32px)", 
              transformStyle: "preserve-3d" 
            }} 
            className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center select-none pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
          >
            {src && <img src={src} alt={alt} className="w-full h-full object-contain filter drop-shadow-lg" />}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          scale: shadowScale,
          opacity: shadowOpacity,
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
        className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-black/50 blur-[8px] rounded-full pointer-events-none z-0"
      />
    </div>
  );
}

export function FloatingTikTok(props: Omit<FloatingIconProps, 'src' | 'alt'>) {
  return (
    <FloatingSocialIcon
      src="/Asset/tiktok.png"
      alt="TikTok"
      bgClass="bg-neutral-950/80 backdrop-blur-md"
      hoverShadowClass="hover:shadow-cyan-500/20"
      glowNode={
        <>
          <div className="absolute inset-0 rounded-[24px] opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(0,242,254,0.4),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(254,9,121,0.4),transparent_60%)] pointer-events-none group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 border border-transparent rounded-[24px] bg-gradient-to-tr from-cyan-400/20 via-white/10 to-rose-400/20 bg-clip-border mix-blend-overlay pointer-events-none" />
        </>
      }
      {...props}
    />
  );
}

export function FloatingInstagram(props: Omit<FloatingIconProps, 'src' | 'alt'>) {
  return (
    <FloatingSocialIcon
      src="/Asset/instgram.png"
      alt="Instagram"
      bgClass="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] via-[#d62976] to-[#962fbf]"
      hoverShadowClass="hover:shadow-pink-500/20"
      glowNode={
        <>
          <div className="absolute inset-[1px] rounded-[22px] bg-zinc-950/20 pointer-events-none" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,130,58,0.35),transparent_70%)] transition-opacity duration-300 pointer-events-none" />
        </>
      }
      {...props}
    />
  );
}

export function FloatingFacebook(props: Omit<FloatingIconProps, 'src' | 'alt'>) {
  return (
    <FloatingSocialIcon
      src="/Asset/facebook.png"
      alt="Facebook"
      bgClass="bg-gradient-to-br from-[#1877F2] to-[#0A489F]"
      hoverShadowClass="hover:shadow-blue-500/30"
      glowNode={
        <>
          <div className="absolute inset-[1px] rounded-[22px] bg-zinc-950/10 pointer-events-none" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)] transition-opacity duration-300 pointer-events-none" />
        </>
      }
      {...props}
    />
  );
}

export function FloatingYouTube(props: Omit<FloatingIconProps, 'src' | 'alt'>) {
  return (
    <FloatingSocialIcon
      src="/Asset/youtube.png"
      alt="YouTube"
      bgClass="bg-gradient-to-br from-[#FF0000] to-[#990000]"
      hoverShadowClass="hover:shadow-red-500/30"
      glowNode={
        <>
          <div className="absolute inset-[1px] rounded-[22px] bg-zinc-950/10 pointer-events-none" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] transition-opacity duration-300 pointer-events-none" />
        </>
      }
      {...props}
    />
  );
}
