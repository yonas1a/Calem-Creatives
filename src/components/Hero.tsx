import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { motion, useInView } from 'motion/react';

/* ─── Animated Counter Hook ─── */
function useAnimatedCounter(target: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, startOnView]);

  return { count, ref };
}

function formatCount(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return num.toLocaleString();
}

/* ─── Social Stats Strip ─── */
function SocialStats() {
  // Placeholder counts — replace with real API data when backend is ready
  const tiktok = useAnimatedCounter(892400, 2500);
  const instagram = useAnimatedCounter(245800, 2500);

  return (
    <div ref={tiktok.ref} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-10">
      {/* TikTok Stat */}
      <motion.a
        href="https://www.tiktok.com/@caleb_mg_"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-surface-container/60 backdrop-blur-md border border-outline/20 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 cursor-pointer group hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
      >
        <div className="relative">
          <img src="/Asset/tiktok.png" alt="TikTok" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-surface-container animate-counter-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-on-surface-variant font-medium tracking-wide uppercase">TikTok</span>
          <span className="text-lg sm:text-xl font-bold text-on-background tracking-tight leading-none group-hover:text-primary transition-colors">
            {formatCount(tiktok.count)}
          </span>
        </div>
        <span className="text-[10px] text-on-surface-variant/60 font-medium ml-1 hidden sm:block">followers</span>
      </motion.a>

      {/* Instagram Stat */}
      <motion.a
        href="https://www.instagram.com/caleb_mg_"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-surface-container/60 backdrop-blur-md border border-outline/20 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 cursor-pointer group hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg"
      >
        <div className="relative">
          <img src="/Asset/instgram.png" alt="Instagram" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-surface-container animate-counter-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-on-surface-variant font-medium tracking-wide uppercase">Instagram</span>
          <span className="text-lg sm:text-xl font-bold text-on-background tracking-tight leading-none group-hover:text-pink-500 transition-colors">
            {formatCount(instagram.count)}
          </span>
        </div>
        <span className="text-[10px] text-on-surface-variant/60 font-medium ml-1 hidden sm:block">followers</span>
      </motion.a>

      {/* Live badge */}
      <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-on-surface-variant/70 font-medium ml-2">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        @caleb_mg_
      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-margin-mobile overflow-hidden flex flex-col justify-center min-h-[85vh] md:min-h-[90vh]">
      {/* Light Rays Background Effect */}
      <div className="absolute top-[0%] left-[20%] w-[60%] h-[120%] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[100px] origin-top pointer-events-none animate-ray-1 z-0"></div>
      
      <div className="absolute top-[10%] right-[20%] w-[40%] h-[100%] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[80px] origin-top pointer-events-none animate-ray-2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Reveal>
            {/* Eyebrow badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wide uppercase">Now Accepting Clients</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold mb-6 tracking-tight text-on-background leading-[1.08] max-w-4xl">
              Social Media{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary animate-gradient-text">
                Video Packages
              </span>
              <span className="text-primary">.</span>
            </h1>
            
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed">
              Grow your brand with consistent content and powerful exposure. Elevate your presence across platforms with high-quality production.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-primary text-on-primary font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:shadow-[0_0_35px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] border border-transparent transition-all duration-300 text-[15px] sm:text-[17px]"
              >
                Get Started Now
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-transparent text-on-background font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-surface-container border border-outline/40 transition-all duration-300 text-[15px] sm:text-[17px]"
              >
                Book a Consultation
              </motion.button>
            </div>

            {/* Live Social Stats */}
            <SocialStats />
          </Reveal>
        </div>

        {/* Right Column: Floating Icons — Desktop Only */}
        <div className="hidden lg:flex w-1/3 relative justify-center items-center min-h-[500px]">
          
          {/* TikTok */}
          <motion.img 
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            src="/Asset/shadow.png" alt="shadow" className="absolute inset-0 w-60 object-cover top-30 left-73 z-0 pointer-events-none mt-20" 
          />
          <motion.img 
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }}
            animate={{ y: [-8, 8, -8] }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0px 10px 30px rgba(0, 242, 254, 0.9))" }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
              filter: { duration: 0.3 }
            }}
            src="/Asset/tiktok.png" alt="TikTok" className="absolute inset-0 w-60 object-cover top-30 left-73 z-2 cursor-pointer" 
          />

          {/* Instagram */}
          <motion.img 
            animate={{ opacity: [0.1, 0.6, 0.6, 0.1] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            src="/Asset/shadow.png" alt="shadow" className="absolute inset-0 w-60 object-cover top-33 left-5 z-0 pointer-events-none mt-20" 
          />
          <motion.img 
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }}
            animate={{ y: [-8, 8, -8] }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0px 10px 30px rgba(225, 48, 108, 0.9))" }}
            transition={{ 
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
              filter: { duration: 0.3 }
            }}
            src="/Asset/instgram.png" alt="Instagram" className="absolute inset-0 w-60 object-cover top-30 left-7 z-2 cursor-pointer" 
          />

          {/* Facebook */}
          <motion.img 
            animate={{ opacity: [0.1, 0.6, 0.6, 0.1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="/Asset/shadow.png" alt="shadow" className="absolute inset-0 w-57 object-cover top-65 left-42 z-0 pointer-events-none mt-20" 
          />
          <motion.img 
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }}
            animate={{ y: [-8, 8, -8] }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0px 10px 30px rgba(24, 119, 242, 0.9))" }}
            transition={{ 
              y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
              filter: { duration: 0.3 }
            }}
            src="/Asset/facebook.png" alt="Facebook" className="absolute inset-0 w-57 object-cover top-62 left-43 z-2 cursor-pointer" 
          />

          {/* YouTube */}
          <motion.img 
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            src="/Asset/shadow.png" alt="shadow" className="absolute inset-0 w-60 object-cover left-40 z-0 pointer-events-none mt-20" 
          />
          <motion.img 
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }}
            animate={{ y: [-8, 8, -8] }}
            whileHover={{ scale: 1.05, filter: "drop-shadow(0px 10px 30px rgba(255, 0, 0, 0.9))" }}
            transition={{ 
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              scale: { type: "spring", stiffness: 400, damping: 25 },
              filter: { duration: 0.3 }
            }}
            src="/Asset/youtube.png" alt="YouTube" className="absolute inset-0 w-60 object-cover left-40 cursor-pointer z-1" 
          />
        </div>

        {/* Mobile Social Icons Row */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-4 mb-2">
          {[
            { src: "/Asset/tiktok.png", alt: "TikTok", color: "rgba(0,242,254,0.6)" },
            { src: "/Asset/instgram.png", alt: "Instagram", color: "rgba(225,48,108,0.6)" },
            { src: "/Asset/facebook.png", alt: "Facebook", color: "rgba(24,119,242,0.6)" },
            { src: "/Asset/youtube.png", alt: "YouTube", color: "rgba(255,0,0,0.6)" },
          ].map((icon, i) => (
            <motion.img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, filter: `drop-shadow(0px 6px 20px ${icon.color})` }}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain cursor-pointer"
            />
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full mt-12 md:mt-20">
        <Reveal delay={0.4} className="w-full">
          <p className="text-[13px] sm:text-[15px] text-on-surface-variant mb-6 sm:mb-8 font-medium text-center lg:text-left">Trusted by leading creators and businesses worldwide</p>
          <div className="relative w-full overflow-hidden py-2 select-none">
            {/* Visual gradient mask for smooth fade outer edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-10 md:gap-20 w-max items-center"
              animate={{
                x: [0, "-33.333%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear"
                }
              }}
            >
              {[...Array(3)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-10 md:gap-20 items-center shrink-0">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 pointer-events-auto shrink-0 select-none h-7 sm:h-10 w-auto">
                      <img src={`/Logo/p_logo${num}.png`} alt={`Client Logo ${num}`} className="h-full w-auto object-contain drop-shadow-sm invert dark:invert-0" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
