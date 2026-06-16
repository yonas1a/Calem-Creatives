import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export function BookConsultation() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-margin-mobile relative overflow-hidden bg-background" id="consultation">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold text-primary tracking-[0.3em] uppercase block mb-3">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Book a Consultation</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto text-base sm:text-lg">
              Have questions or want to discuss your social media strategy? Send us a message below and we'll get back to you shortly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
            className="bg-surface-container/30 backdrop-blur-md p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] border border-outline/20 shadow-xl"
          >
            <form 
              action="https://formsubmit.co/amanufeleke@gmail.com" 
              method="POST" 
              className="flex flex-col gap-6"
            >
              {/* Security parameters for formsubmit */}
              {/* Redirect to a thank you page or self (can just omit next line to use their default page) */}
              <input type="hidden" name="_subject" value="New Consultation Request from Calem Creatives" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-on-surface-variant ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="bg-background/50 border border-outline/30 rounded-xl px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="bg-background/50 border border-outline/30 rounded-xl px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-on-surface-variant ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  placeholder="Tell us about your project, goals, and any questions you have..."
                  className="bg-background/50 border border-outline/30 rounded-xl px-4 py-3 text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-y min-h-[120px]"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto self-end mt-2 bg-primary text-on-primary font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] border border-transparent transition-all duration-300 text-[16px]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
