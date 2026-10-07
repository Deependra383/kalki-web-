import { useRef, useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Pause,
  Play,
  Briefcase,
  Cpu,
  Code2,
  CheckCircle2
} from './icons';

export default function HeroSection({ onContact }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Video autoplay note:', err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Manual play error:', err));
      }
    }
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-14 sm:pb-18 bg-slate-50"
    >
      {/* Background Video Layer - Clearly Visible with Light Theme Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="/hero-poster.jpg"
            alt="Corporate Analytics Video"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Soft Light Gradient: High text contrast on left, bright clearly visible video on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/35 sm:to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />

        {/* Subtle decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
            backgroundSize: `28px 28px`
          }}
        />
      </div>

      {/* Floating Video Play/Pause Control - Light Theme */}
      <div className="absolute top-28 sm:top-36 right-4 sm:right-8 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md text-xs text-slate-700">
        <button
          onClick={toggleVideo}
          className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold focus:outline-none cursor-pointer"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5" />
          )}
          <span>{isPlaying ? 'Video Playing' : 'Paused'}</span>
        </button>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-[11px] text-slate-500 font-medium">Enterprise Analytics</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl lg:max-w-4xl text-left space-y-6 sm:space-y-7">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>50+ Trusted Global Clients &bull; India's Premier Business &amp; Technology Advisory</span>
          </div>

          {/* Headline in Light Theme */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Being Different Isn’t a Tactic,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              It’s Our Foundation.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl leading-relaxed font-normal">
            We believe innovation is the cornerstone of business success. At <strong className="text-slate-900 font-bold">Kalki Consulting Services</strong>, we go beyond conventional consulting by delivering unique strategies tailored to your enterprise goals—from mission-critical{' '}
            <strong className="text-blue-700 font-semibold">Financial Planning &amp; Statutory Consolidation (SAC, Datasphere, BPC &amp; BDC)</strong> to high-performance{' '}
            <strong className="text-blue-700 font-semibold">Tailor-Made Application Development</strong> and specialized{' '}
            <strong className="text-blue-700 font-semibold">Resource &amp; Staffing Deployment</strong>.
          </p>

          {/* Dual Action CTA Buttons - Light Theme */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={handleScrollToServices}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onContact}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 hover:border-slate-400 shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Quick Credibility Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real Technology Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Pre-Vetted SAP &amp; Fullstack Talent</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Discovery Session within 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Featured Highlight Cards - Clean Light Theme */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1: Staffing and Recruitment */}
          <div
            onClick={onContact}
            className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-blue-500 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Staffing &amp; Recruitment
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
              Specialized Talent Deployment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlock the full potential of your workforce with pre-screened SAP architects (SAC, BPC, Datasphere) and agile software squads ready in 48-72 hours.
            </p>
          </div>

          {/* Card 2: ERP & SAP Solutions */}
          <div
            onClick={handleScrollToServices}
            className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-blue-500 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                ERP &amp; SAP Systems
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
              SAC, Datasphere &amp; BPC/BDC
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Streamline enterprise processes with integrated analytics. From predictive SAC and Datasphere data fabrics to 5x faster BPC script logic and zero-loss BDC data migrations.
            </p>
          </div>

          {/* Card 3: Tailor-Made Application Development */}
          <div
            onClick={handleScrollToServices}
            className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-slate-200/90 hover:border-blue-500 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3.5">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Tailor-Made App Dev
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
              Custom Apps &amp; AI Automations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineer production-grade web portals, internal enterprise tools, and autonomous AI robotic process automations that save up to 80% of repetitive operational effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
