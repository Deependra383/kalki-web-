import React from 'react'
import {
  ShieldCheck,
  Zap,
  Target,
  Award,
  Users2,
  Workflow,
  Sparkles,
  CheckCircle,
  Building2,
  Clock
} from 'lucide-react'

export default function WhyChooseUs({ onOpenContact }) {
  const pillars = [
    {
      icon: Target,
      title: 'Domain & Financial Rigor',
      desc: 'Our consultants are not just coders; they understand statutory accounting, IFRS, US GAAP, intercompany eliminations, and complex consolidation mechanics.',
    },
    {
      icon: Zap,
      title: 'Accelerated Time-to-Value',
      desc: 'Pre-built SAP SAC models, BPC migration accelerators, and reusable AI automation pipelines reduce implementation cycles by up to 60%.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Security',
      desc: 'Institutional-grade data protection, strict SOC2 & GDPR compliant practices, encrypted transit, and role-based zero-trust architectures.',
    },
    {
      icon: Users2,
      title: 'Elite Vetted Talent Network',
      desc: 'Every consultant passes strict multi-stage technical benchmarks. We only place the top 5% of tested SAP and software specialists.',
    },
  ]

  const methodology = [
    {
      step: '01',
      name: 'Diagnostic & Architecture Audit',
      desc: 'Comprehensive review of current financial systems, reporting bottlenecks, or software requirements.',
    },
    {
      step: '02',
      name: 'Blueprint & Solution Design',
      desc: 'Target architecture definition across SAC, Datasphere, BPC/BDC, custom tech, and resource allocation.',
    },
    {
      step: '03',
      name: 'Agile Implementation & Testing',
      desc: 'Sprint-based rollout with continuous automated reconciliation, regression testing, and validation.',
    },
    {
      step: '04',
      name: 'Go-Live, Knowledge Transfer & Scale',
      desc: 'Seamless transition to live close cycles, comprehensive internal team training, and 24/7 SLA support.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-slate-900/50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Why Kalki Consulting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Advisory Partner for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Complex Enterprise Demands</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Bridging boardroom strategic vision with deep-level technical and financial execution.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-950 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Methodology Pathway */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our Delivery Methodology
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              From Discovery to Enterprise-Scale Execution
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              A battle-tested 4-phase framework guaranteeing predictability, auditability, and speed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 relative group hover:border-slate-700"
              >
                <div className="text-2xl font-black text-cyan-500/40 group-hover:text-cyan-400 transition-colors font-mono">
                  {m.step}
                </div>
                <div className="text-sm font-bold text-white">
                  {m.name}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
