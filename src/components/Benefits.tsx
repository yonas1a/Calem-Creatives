import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export function Benefits() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-margin-mobile bg-background relative" id="benefits">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-outline/40 to-transparent"></div>
      <div className="max-w-container-max mx-auto pt-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why This Package Matters</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg hover:text-on-background transition-colors">We combine high-end production with strategic distribution to ensure your content performs and drives measurable results.</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline/30 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">ads_click</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Strategic Content</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Videos designed with your specific target audience and goals in mind.</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline/30 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-secondary/50"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined text-3xl fill">videocam</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Pro Production</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">High-quality camera, sophisticated audio, and polished editing setups.</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline/30 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-tertiary/50"
            >
              <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined text-3xl fill">campaign</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">High Engagement</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Dynamic content optimized to get likes, shares, comments, and saves.</p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline/30 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl fill">trending_up</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Real Growth</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Consistent brand visibility that builds solid, long-term authority.</p>
            </motion.div>
          </Reveal>
        </div>
        
        <Reveal delay={0.5}>
            <div className="mt-16 sm:mt-20 text-center">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-on-primary font-semibold px-8 py-4 text-[15px] sm:text-[17px] rounded-xl hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] transition-all duration-300 shadow-lg"
                >
                    Ready to Level Up? Get Started
                </motion.button>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
