import { Reveal } from './Reveal';
import { FloatingTikTok, FloatingInstagram, FloatingFacebook, FloatingYouTube } from './Floating3DIcons';
import { motion } from 'motion/react';



export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-margin-mobile overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Light Rays Background Effect */}
      <div className="absolute top-[0%] left-[20%] w-[60%] h-[120%] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[100px] origin-top pointer-events-none animate-ray-1 z-0"></div>
      
      <div className="absolute top-[10%] right-[20%] w-[40%] h-[100%] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[80px] origin-top pointer-events-none animate-ray-2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-5">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-1xl lg:text-[5rem] font-bold mb- tracking-tight text-on-background leading-[1.05] max-w-4xl">
              Social Media <br className="hidden lg:block" />Video Packages.
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed">
              Grow your brand with consistent content and powerful exposure. Elevate your presence across platforms with high-quality production.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-0">
              <button className="w-full sm:w-auto bg-primary text-on-primary font-semibold px-8 py-4 rounded-lg hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] border border-transparent transition-all duration-300 active:scale-95 text-[17px]">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto bg-transparent text-on-background font-semibold px-8 py-4 rounded-lg hover:bg-surface-container border border-outline/40 transition-all duration-300 active:scale-95 text-[17px]">
                Book a Consultation
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Floating Icons Diamond Grid */}
        <div id='hold_icons' className="w-1/3 relative flex justify-center items-center min-h-[400px] sm:min-h-[500px]">
          
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

      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full mt-16 md:mt-24">
        <Reveal delay={0.4} className="w-full">
          <p className="text-[15px] text-on-surface-variant mb-8 font-medium text-center lg:text-left">Trusted by leading creators and businesses worldwide</p>
          <div className="relative w-full overflow-hidden py-2 select-none">
            {/* Visual gradient mask for smooth fade outer edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-12 md:gap-20 w-max items-center"
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
                <div key={loopIdx} className="flex gap-12 md:gap-20 items-center shrink-0">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-auto shrink-0 select-none h-8 sm:h-10 w-auto">
                      <img src={`/Logo/p_logo${num}.png`} alt={`Client Logo ${num}`} className="h-full w-auto object-contain drop-shadow-sm" />
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
