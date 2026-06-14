import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

interface VideoItem {
  id: string;
  url: string;
  views: string;
  likes: string;
  logoUrl: string;
}

const localVideos: VideoItem[] = Array.from({ length: 7 }).map((_, i) => ({
  id: `video-${i + 1}`,
  url: `/video/video (${i + 1}).mp4`,
  views: `${(Math.random() * 5 + 1).toFixed(1)}M`,
  likes: `${Math.floor(Math.random() * 500 + 50)}K`,
  logoUrl: `/Logo/p_logo${(i % 9) + 1}.png`
}));

// Triplicating the list ensures seamless infinite right-to-left transition for different viewport widths
const sliderVideos = [...localVideos, ...localVideos, ...localVideos];

function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative w-[260px] sm:w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-primary/40 hover:-translate-y-4 hover:scale-[1.03] transition-all duration-500 group shrink-0 cursor-pointer"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0; // Restart video from the beginning
          videoRef.current.muted = false;
          // We remove the auto-remute fallback so it doesn't force silence if the browser complains
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(e => console.warn("Browser requires a click on the page to allow audio."));
          }
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(e => console.log(e));
          }
        }
      }}
    >
      {/* Embedded Local Video */}
      <video
        ref={videoRef}
        src={video.url}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      />

      {/* Bottom Overlay Info (Frosted Glass) */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-5 pt-16 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Left: Company Logo */}
          <div className="flex items-center">
            <img src={video.logoUrl} alt="Company Logo" className="h-6 w-auto object-contain drop-shadow-md" />
          </div>

          {/* Right: Metrics */}
          <div className="flex items-center gap-3 text-white text-xs font-bold drop-shadow-md">
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[14px] text-emerald-400">visibility</span>
              <span>{video.views}</span>
            </div>
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[14px] text-rose-500">favorite</span>
              <span>{video.likes}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle interactive hover lens */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-[2rem] transition-colors duration-300 pointer-events-none" />
    </div>
  );
}

export function TikTokShowcase() {
  return (
    <section className="py-20 md:py-0 bg-surface overflow-hidden relative border-y border-outline/30" id="showcase">
      <style>{`
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .ticker-track {
          animation: ticker-slide 50s linear infinite;
        }
        .ticker-wrapper:hover .ticker-track {
          animation-play-state: paused;
        }
      `}</style>
      {/* Visual background atmospheric lights (deep ambient indigo/cyan and orange) */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile relative z-10 text-center mb-12 sm:mb-16">
        <Reveal>
          <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase block mb-3">CREATIVE FEED</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Trending Portfolio Showcase</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Glance over real performance assets engineered for viral retention. Hover a card to pause the feed and watch.
          </p>
        </Reveal>
      </div>

      {/* Slider Carousel Container */}
      <div className="relative w-full z-10 select-none">
        
        {/* Soft edge fade-outs via gradient masks on left/right for seamlessness */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Outer scrolling track */}
        <div className="w-full overflow-hidden py-4 ticker-wrapper">
          <div className="flex gap-6 w-max px-4 ticker-track mt-5">
            {sliderVideos.map((video, idx) => (
              <VideoCard key={`${video.id}-${idx}`} video={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
