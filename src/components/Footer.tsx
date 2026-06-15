import { Youtube, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

// Using a custom icon for tiktok since lucide might not represent it vividly
const TikTokIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline/20 w-full py-12 md:py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-10">
        
        <Reveal className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-2">
             <img src="/Asset/logo.png" alt="CALE-M Creative Logo" className="h-10 sm:h-12 w-auto object-contain invert dark:invert-0" />
          </div>
          <p className="text-[10px] md:text-xs text-on-surface-variant font-medium tracking-[0.1em] uppercase text-center md:text-left">© {new Date().getFullYear()} CALE-M CREATIVE. ALL RIGHTS RESERVED.</p>
        </Reveal>
        
        <Reveal delay={0.2} className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="font-bold text-[10px] md:text-[11px] text-on-surface-variant tracking-[0.2em] uppercase">SUPPORTED PLATFORMS</h4>
          <div className="flex gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-pink-500 hover:border-pink-500/30 transition-colors shadow-sm cursor-pointer" 
              title="Instagram"
            >
                <Instagram size={20} />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-emerald-400 hover:border-emerald-400/30 transition-colors shadow-sm cursor-pointer" 
              title="TikTok"
            >
                <TikTokIcon />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-red-500 hover:border-red-500/30 transition-colors shadow-sm cursor-pointer" 
              title="YouTube"
            >
                <Youtube size={20} />
            </motion.div>
          </div>
        </Reveal>
        
      </div>
    </footer>
  );
}
