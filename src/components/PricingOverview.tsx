import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export function PricingOverview() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="py-24 md:py-32 px-margin-mobile bg-surface-container-low relative overflow-hidden" id="overview">
      {/* Dynamic Background Blurry Orange Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1],
          x: [0, 20, -15, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-primary/25 to-amber-500/10 rounded-full blur-[140px] pointer-events-none mix-blend-color-dodge dark:mix-blend-plus-lighter z-0 opacity-70"
      />

      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 1],
          x: [0, -30, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -right-20 w-[550px] h-[550px] bg-gradient-to-tr from-amber-600/20 to-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-color-dodge dark:mix-blend-plus-lighter z-0 opacity-60"
      />

      {/* Decorative center connecting matching line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[2px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10 w-full">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase block mb-3">FINANCIAL STRATEGY</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Investment &amp; Overview</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto text-lg hover:text-on-background transition-colors leading-relaxed">
              Activate your brand's video conversion cycle with a unified production and exposure investment.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto w-full">
          {/* Left Column: Core Campaign Strategy Roadmap (3-Month steps with connecting line) */}
          <div className="lg:col-span-5 space-y-8 relative w-full">
            {/* Thread alignment line */}
            <div className="absolute left-[27px] top-[24px] bottom-[24px] w-[2px] bg-gradient-to-b from-primary via-primary/40 to-outline/20 pointer-events-none" />
            
            <Reveal delay={0.1}>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface-container border-2 border-primary/20 flex items-center justify-center font-bold text-primary group-hover:border-primary shrink-0 transition-all duration-300 relative z-10 shadow-md group-hover:shadow-[0_0_15px_rgba(255,106,26,0.3)]">
                  <span className="text-sm font-semibold tracking-wide">M1</span>
                  {/* Outer circle pulse */}
                  <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-background mb-1 tracking-tight group-hover:text-primary transition-colors">Creative Strategy &amp; Setup</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">We establish your brand identity guidelines, design unique video hooks, formulate scripts, and initiate production setup.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface-container border-2 border-primary/20 flex items-center justify-center font-bold text-primary group-hover:border-primary shrink-0 transition-all duration-300 relative z-10 shadow-md group-hover:shadow-[0_0_15px_rgba(255,106,26,0.3)]">
                  <span className="text-sm font-semibold tracking-wide">M2</span>
                  <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-background mb-1 tracking-tight group-hover:text-primary transition-colors">Consistent Engines &amp; Promotion</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Scale filming models to guarantee constant output, launch cross-collaborations, and trigger algorithmic authority across feeds.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-surface-container border-2 border-primary/20 flex items-center justify-center font-bold text-primary group-hover:border-primary shrink-0 transition-all duration-300 relative z-10 shadow-md group-hover:shadow-[0_0_15px_rgba(255,106,26,0.3)]">
                  <span className="text-sm font-semibold tracking-wide">M3</span>
                  <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-background mb-1 tracking-tight group-hover:text-primary transition-colors">Optimization &amp; Compounding</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Iterate script structures based on retention analytics, optimize marketing hooks, and solidify a conversion machine.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Glowing Glassmorphic Investment Panel */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.2}>
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white/70 dark:bg-zinc-900/40 p-8 sm:p-10 md:p-12 rounded-[2rem] relative border border-outline/30 flex flex-col md:flex-row items-center md:items-stretch justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/40 group gap-8 backdrop-blur-xl"
                style={{
                  boxShadow: isHovered 
                    ? "0 25px 70px -15px rgba(0,0,0,0.5), 0 0 50px -15px rgba(255,106,26,0.25)" 
                    : "0 10px 40px -20px rgba(0,0,0,0.3)"
                }}
              >
                {/* 1. Binding Orange Spotlight Effect inside the card */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"
                  style={{
                    background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(255, 90, 0, 0.15), transparent 85%)`,
                  }}
                />

                {/* Constant secondary ambient corner glow */}
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-colors duration-500" />
                
                {/* Visual Campaign tag */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-b-xl text-[10px] font-extrabold tracking-[0.2em] font-label-caps shadow-sm z-10 whitespace-nowrap">
                  3-MONTH AGREEMENT
                </div>

                <div className="relative z-10 flex flex-col justify-between pt-4 md:pt-0 text-center md:text-left">
                  <div>
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                      <span className="material-symbols-outlined fill text-3xl">handshake</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-on-background">3-Months Campaign</h3>
                    <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed md:pr-4">
                      Deploy a dedicated team of scriptwriters, producers, and marketers. Over 3 months, build a robust portfolio of high-performing video content built to drive organic exposure.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      All-Inclusive
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-on-surface-variant bg-surface-container/50 border border-outline/30 px-3 py-1 rounded-full">
                      VAT Included
                    </span>
                  </div>
                </div>

                {/* Total Investment side pill */}
                <div className="relative z-10 text-center bg-white/90 dark:bg-black/60 border border-outline/30 group-hover:border-primary/30 p-8 rounded-2xl w-full md:w-auto md:min-w-[280px] shadow-lg flex flex-col justify-center items-center backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]">
                  <p className="text-[11px] font-label-caps text-on-surface-variant mb-4 font-extrabold tracking-[0.25em]">TOTAL INVESTMENT</p>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[2.75rem] sm:text-5xl font-extrabold text-primary tracking-tighter leading-none mb-1 drop-shadow-[0_0_20px_rgba(255,106,26,0.35)]">
                      179,400
                    </span>
                    <span className="text-lg font-bold text-primary uppercase tracking-[0.1em]">Birr</span>
                  </div>

                  <div className="h-px bg-outline/40 w-full my-6" />

                  <span className="text-[11px] font-semibold text-on-surface-variant/90 leading-normal max-w-[200px]">
                    Monthly Payments of <strong className="text-on-background font-bold text-xs block mt-1">59,800 Birr / Mo</strong>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
