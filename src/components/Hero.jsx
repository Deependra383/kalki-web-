import { useRef, useState } from 'react'
import {
  Play,
  Pause,
  Sparkles,
  TrendingUp,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Database,
  Users
} from 'lucide-react'

export default function Hero({ onOpenContact }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.08]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/hero-poster.jpg"
            alt="Financial Planning and Analytics Desk"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Multi-layered Gradients for readability and sleek enterprise look */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15),transparent_60%)]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Floating Video Control Widget */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-700/60 shadow-xl text-xs text-slate-300">
        <button
          onClick={togglePlay}
          className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors focus:outline-none"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
          <span>{isPlaying ? 'Video Playing' : 'Paused'}</span>
        </button>
        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
        <span className="text-[11px] text-slate-400">Financial Planning &amp; Analytics Feed</span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Messaging */}
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Next-Gen Enterprise Advisory &amp; Digital Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Financial Clarity</span>, SAP Intelligence &amp; Digital Scale
            </h1>

            {/* Subheading emphasizing user's exact services */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
              We empower global enterprises with mission-critical <strong>Financial Planning, Consolidation &amp; Financial Reporting</strong>, pioneering <strong>AI-driven solutions across SAC, Datasphere, BPC &amp; BDC</strong>, high-performance <strong>Web &amp; Application Development</strong>, and specialized <strong>Resource &amp; Staffing</strong>.
            </p>

            {/* Key Focus Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Consolidation</span>
                </div>
                <div className="text-sm font-medium text-slate-200">Statutory &amp; Planning</div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>AI in SAP</span>
                </div>
                <div className="text-sm font-medium text-slate-200">SAC &amp; Datasphere</div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-1">
                  <Database className="w-4 h-4" />
                  <span>CPM Systems</span>
                </div>
                <div className="text-sm font-medium text-slate-200">BPC &amp; BDC Legacy</div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                  <Users className="w-4 h-4" />
                  <span>Staffing</span>
                </div>
                <div className="text-sm font-medium text-slate-200">Elite Tech &amp; SAP Talent</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenContact}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-base hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700/80 hover:border-slate-500 transition-all flex items-center gap-2"
              >
                <span>Explore Practice Areas</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SAP &amp; Cloud Certified Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rapid Talent Onboarding</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick KPI Board */}
          <div className="lg:col-span-4">
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                    Live Performance Benchmarks
                  </div>
                  <div className="text-base font-bold text-white">
                    Client Value Delivery
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Metric 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Financial Close Cycle Reduction</span>
                  <span className="font-bold text-cyan-400">-70% time</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[78%] rounded-full" />
                </div>
                <span className="text-[11px] text-slate-400">Average acceleration across BPC &amp; SAC rollouts</span>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Consolidation Accuracy</span>
                  <span className="font-bold text-emerald-400">99.98%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-[99%]" />
                </div>
                <span className="text-[11px] text-slate-400">Statutory multi-currency compliance</span>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Datasphere &amp; AI Data Fabric</span>
                  <span className="font-bold text-indigo-400">Real-time sync</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[92%]" />
                </div>
                <span className="text-[11px] text-slate-400">Unified semantic layer across SAP &amp; cloud data</span>
              </div>

              {/* Interactive Quick Callout */}
              <div className="pt-2">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white">Need immediate staffing?</div>
                    <div className="text-[11px] text-slate-400">Pre-vetted SAC &amp; Fullstack leads ready</div>
                  </div>
                  <button
                    onClick={onOpenContact}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Deploy Talent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
