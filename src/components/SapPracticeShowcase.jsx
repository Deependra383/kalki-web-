import { useState } from 'react'
import {
  Cpu,
  Database,
  Sparkles,
  ArrowRight,
  Network,
  Activity,
  CheckCircle2,
  HardDriveDownload,
  Gauge
} from 'lucide-react'

export default function SapPracticeShowcase({ onOpenContact }) {
  const [selectedTech, setSelectedTech] = useState('sac')

  const technologies = [
    {
      id: 'sac',
      name: 'SAP Analytics Cloud (SAC)',
      badge: 'Predictive & Planning AI',
      subtitle: 'Next-Generation Enterprise Planning & Augmented Business Intelligence',
      icon: Gauge,
      description:
        'We design and deploy high-performance SAC solutions combining predictive analytics, financial planning models, and automated executive storyboards powered by machine learning algorithms.',
      highlights: [
        'Predictive Scenario Modeling with Automated Machine Learning',
        'Smart Insights & Automated Natural Language Variance Explanations',
        'Integrated Financial Planning (P&L, Balance Sheet, Cash Flow, Capex)',
        'Digital Boardroom Setup with Interactive Touch-Screen Navigation',
        'Direct Live Data Connectivity to SAP Datasphere, S/4HANA & BW/4HANA',
      ],
      deliverable: 'Zero-latency live query connections with real-time currency conversion',
    },
    {
      id: 'datasphere',
      name: 'SAP Datasphere',
      badge: 'Unified Data Fabric',
      subtitle: 'Modern Business Data Fabric for Real-Time Semantic Data Harmonization',
      icon: Network,
      description:
        'Unleash the full potential of your enterprise data. We architect SAP Datasphere spaces, relational models, and business builder semantic layers that connect SAP and third-party data seamlessly.',
      highlights: [
        'Data Harmonization without Physical Data Duplication',
        'Business Semantic Layer Modeling for Business Users & Analysts',
        'Federated Queries across SAP S/4HANA, Cloud Storage, and SQL Warehouses',
        'Enterprise Cataloging, Lineage Tracking & Robust Data Governance',
        'Real-time Data Pipeline Orchestration & Delta Streaming',
      ],
      deliverable: 'Single source of truth with 100% semantic consistency across business units',
    },
    {
      id: 'bpc',
      name: 'SAP BPC (Planning & Consolidation)',
      badge: 'Consolidation Engine',
      subtitle: 'Modernization, Script Logic Tuning & Consolidation Rule Automation',
      icon: Database,
      description:
        'With deep expertise in both BPC Standard and Embedded configurations, we optimize your existing consolidation rules, tuning script logic execution times and structuring clean migration pathways.',
      highlights: [
        'Business Process Flows (BPF) & Work Status Configuration',
        'Advanced Script Logic Optimization for 5x Faster Batch Processing',
        'Automated Elimination Rules, Currency Translations & Equity Reclassifications',
        'Audit Logging & Compliance Reporting for Global Regulatory Standards',
        'Strategic Hybrid Architecture: Connecting BPC with SAP Analytics Cloud',
      ],
      deliverable: 'Drastically reduced batch runtimes from hours to minutes during peak close',
    },
    {
      id: 'bdc',
      name: 'BDC & High-Volume Data Services',
      badge: 'Migration & Batch Interfaces',
      subtitle: 'Batch Data Communication, Legacy Modernization & High-Throughput Migration',
      icon: HardDriveDownload,
      description:
        'Execute complex SAP data conversions and batch interfaces without disruption. We build resilient BDC sessions, call transaction routines, and automated reconciliation validation frameworks.',
      highlights: [
        'High-Throughput Batch Input Sessions & Direct Call Transactions',
        'Legacy Data Cleansing, Transformation & Automated Staging',
        'Pre- and Post-Migration Balance Validation & Exception Logging',
        'Automated Mass Record Processing with Resilient Error Recovery',
        'Seamless Transition to Modern APIs, OData & Cloud Integration Services',
      ],
      deliverable: 'Zero data loss with automated cryptographic checksum verification',
    },
  ]

  const currentTech = technologies.find((t) => t.id === selectedTech) || technologies[0]

  return (
    <section id="sap-solutions" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>SAP Practice &amp; AI Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI-Driven Solutions in <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">SAC, Datasphere, BPC &amp; BDC</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering unified architectures that elevate legacy CPM systems into predictive, autonomous decision intelligence hubs.
          </p>
        </div>

        {/* 4 Cards Grid Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {technologies.map((tech) => {
            const Icon = tech.icon
            const isSelected = selectedTech === tech.id
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-500/40 -translate-y-1'
                    : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      {tech.badge}
                    </span>
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {tech.name}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {tech.subtitle}
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Technology Deep-Dive Panel */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                  {currentTech.badge}
                </span>
                <span className="text-xs text-slate-400">Architecture &amp; Implementation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {currentTech.name}
              </h3>

              <p className="text-cyan-300 text-base font-medium">
                {currentTech.subtitle}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentTech.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Technical Architecture Capabilities
                </div>
                {currentTech.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Schedule Architectural Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Architecture Diagram */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-inner space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>AI-Powered Data Pipeline</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    Active Pipeline
                  </span>
                </div>

                {/* Pipeline Stages */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">Data Source (BDC / S/4HANA)</span>
                    </div>
                    <span className="text-slate-400 font-mono">100% Ingested</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-slate-300">Datasphere Semantic Harmonization</span>
                    </div>
                    <span className="text-slate-400 font-mono">Zero Duplication</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-slate-300">BPC Consolidation &amp; Eliminations</span>
                    </div>
                    <span className="text-slate-400 font-mono">Automated Close</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-200 font-bold">SAC Machine Learning Forecasts</span>
                    </div>
                    <span className="text-cyan-400 font-mono">Live Visuals</span>
                  </div>
                </div>

                {/* Guarantee Banner */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
                  <span className="text-cyan-400 font-bold">Client Metric: </span>
                  {currentTech.deliverable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
