import { Youtube, Instagram } from 'lucide-react';

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
    <footer className="bg-surface-container-low border-t border-outline/20 w-full py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-on-primary font-bold text-sm">C</div>
             <h2 className="font-headline-md font-bold text-2xl text-on-background tracking-tight">CALE-M Creative</h2>
          </div>
          <p className="text-xs text-on-surface-variant font-medium tracking-[0.1em] uppercase">© {new Date().getFullYear()} CALE-M CREATIVE. ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="font-bold text-[11px] text-on-surface-variant tracking-[0.2em] uppercase">SUPPORTED PLATFORMS</h4>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-primary transition-all shadow-sm cursor-help" title="Instagram">
                <Instagram size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-primary transition-all shadow-sm cursor-help" title="TikTok">
                <TikTokIcon />
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/30 hover:bg-surface-container-lowest hover:text-primary transition-all shadow-sm cursor-help" title="YouTube">
                <Youtube size={20} />
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
