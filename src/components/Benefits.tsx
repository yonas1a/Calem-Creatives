import { Reveal } from './Reveal';

export function Benefits() {
  return (
    <section className="py-24 px-margin-mobile bg-background" id="benefits">
      <div className="max-w-container-max mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why This Package Matters</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg hover:text-on-background transition-colors">We combine high-end production with strategic distribution to ensure your content performs and drives measurable results.</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <div className="bg-surface p-8 rounded-2xl border border-outline/30 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">ads_click</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Strategic Content</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Videos designed with your specific target audience and goals in mind.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-surface p-8 rounded-2xl border border-outline/30 hover:border-secondary/50 hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined text-3xl fill">videocam</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Pro Production</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">High-quality camera, sophisticated audio, and polished editing setups.</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-surface p-8 rounded-2xl border border-outline/30 hover:border-tertiary/50 hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined text-3xl fill">campaign</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">High Engagement</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Dynamic content optimized to get likes, shares, comments, and saves.</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="bg-surface p-8 rounded-2xl border border-outline/30 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl fill">trending_up</span>
              </div>
              <h3 className="font-bold text-xl mb-3 tracking-tight">Real Growth</h3>
              <p className="text-on-surface-variant text-sm flex-grow leading-relaxed">Consistent brand visibility that builds solid, long-term authority.</p>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={0.5}>
            <div className="mt-20 text-center">
                <button className="bg-primary text-on-primary font-semibold px-8 py-4 text-[17px] rounded-lg hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] transition-all duration-300 active:scale-95 shadow-lg">
                    Ready to Level Up? Get Started
                </button>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
