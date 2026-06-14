import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-outline/20">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-4">
        <a className="font-headline-md text-xl md:text-2xl font-bold text-on-background tracking-tight flex items-center gap-2" href="#">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-on-primary font-bold">C</div>
          <span>CALE-M</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="text-on-surface-variant hover:text-on-background transition-colors duration-200" href="#overview">Overview</a>
          <a className="text-on-surface-variant hover:text-on-background transition-colors duration-200" href="#deliverables">Deliverables</a>
          <a className="text-on-surface-variant hover:text-on-background transition-colors duration-200" href="#benefits">Benefits</a>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-transparent text-on-background font-semibold px-4 py-2 rounded-lg border border-outline/30 hover:bg-surface-container transition-all duration-300 active:scale-95 hidden sm:block text-sm">
            Book a Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
