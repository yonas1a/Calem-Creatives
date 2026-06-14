import { Reveal } from './Reveal';

export function Deliverables() {
  return (
    <section className="py-24 px-margin-mobile relative overflow-hidden" id="deliverables">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Package Deliverables</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed hover:text-on-background transition-colors">Exactly what you get every month, and the robust library built over your 3-month campaign.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="bg-surface p-8 md:p-10 rounded-2xl border border-outline/30 h-full relative overflow-hidden transition-all hover:border-secondary shadow-sm hover:shadow-xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute top-4 right-4 text-secondary/40 material-symbols-outlined text-4xl group-hover:rotate-12 transition-transform duration-500">calendar_month</div>

              <h3 className="text-xs font-bold text-secondary mb-3 tracking-[0.2em]">PER MONTH</h3>
              <h4 className="text-3xl font-bold mb-8 tracking-tight">What's Included</h4>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-xl">12</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xl leading-tight mb-2">Professional Social Media Videos</h5>
                    <p className="text-base text-on-surface-variant leading-relaxed">Tailored specifically for your brand pages. Fully edited and optimized for immediate upload.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xl leading-tight mb-2">Promotional Video</h5>
                    <p className="text-base text-on-surface-variant leading-relaxed">Featured directly by the Caleb MG page for powerful exposure and cross-audience engagement.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-surface-container p-8 md:p-10 rounded-2xl border border-outline/30 h-full relative overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-primary group text-on-surface">
               {/* decorative bg */}
              <div className="absolute -right-8 -bottom-8 opacity-5 text-primary group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[180px] leading-none">movie_edit</span>
              </div>
              
              <h3 className="text-xs font-bold text-primary mb-3 tracking-[0.2em]">3-MONTH TOTAL</h3>
              <h4 className="text-3xl font-bold mb-8 tracking-tight">Total Deliverables</h4>
              
              <div className="mb-8 relative z-10 flex items-baseline">
                 <span className="text-7xl lg:text-[7rem] font-bold text-primary tracking-tighter leading-none">39</span>
                 <span className="text-xl font-bold ml-4 text-on-surface-variant uppercase tracking-widest">Videos</span>
              </div>
              
              <ul className="space-y-5 relative z-10 bg-background/50 p-6 rounded-xl border border-outline/20 backdrop-blur-sm">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined fill text-primary text-2xl">check_circle</span>
                  <span className="font-medium text-lg"><strong>36</strong> Social Media Videos</span>
                </li>
                <div className="h-px bg-outline/20 w-full"></div>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined fill text-primary text-2xl">check_circle</span>
                  <span className="font-medium text-lg"><strong>3</strong> Caleb MG Promo Videos</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
