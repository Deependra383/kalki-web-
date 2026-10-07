import { useState } from 'react'
import {
  Calculator,
  TrendingUp,
  Cpu,
  Code2,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function ProjectEstimator({ onOpenContactWithDetails }) {
  const [selectedPractice, setSelectedPractice] = useState('cpm')
  const [companyScale, setCompanyScale] = useState('enterprise')
  const [timeline, setTimeline] = useState('standard')

  const practices = [
    { id: 'cpm', name: 'Financial Planning & Consolidation', icon: TrendingUp },
    { id: 'sap', name: 'AI in SAC, Datasphere, BPC & BDC', icon: Cpu },
    { id: 'tech', name: 'Web/App Dev & AI Automations', icon: Code2 },
    { id: 'staffing', name: 'Resource & Staffing Deployment', icon: Users },
  ]

  const getEstimate = () => {
    switch (selectedPractice) {
      case 'cpm':
        return {
          duration: companyScale === 'enterprise' ? '6 - 10 Weeks' : '4 - 6 Weeks',
          team: '1 Lead CPM Architect, 2 Consolidation Consultants, 1 QA Lead',
          deliverables: [
            'Automated Multi-Entity Statutory Consolidation Matrix',
            'Automated Elimination Rules & FX Translation',
            'Interactive Executive Variance Boardroom',
            'Full Audit Trail & Lineage Documentation',
          ],
          summary: 'End-to-end statutory consolidation & rolling financial planning platform.',
        }
      case 'sap':
        return {
          duration: companyScale === 'enterprise' ? '8 - 12 Weeks' : '5 - 7 Weeks',
          team: '1 SAC Architect, 1 Datasphere Engineer, 1 BPC/BDC Senior Specialist',
          deliverables: [
            'SAP Datasphere Semantic Spaces & Unified Data Fabric',
            'SAC Predictive Planning Stories & AI Smart Insights',
            'BPC Script Logic Optimization (Up to 5x Speedup)',
            'Legacy BDC Batch Migration & Clean Staging',
          ],
          summary: 'Modernized SAP data architecture connecting live analytics and legacy CPM.',
        }
      case 'tech':
        return {
          duration: companyScale === 'enterprise' ? '6 - 10 Weeks' : '3 - 6 Weeks',
          team: '1 Full-Stack Tech Lead, 2 Senior Engineers, 1 AI/Automation Engineer',
          deliverables: [
            'Custom High-Scale Web Application (React / Next.js)',
            'Autonomous Document & Invoice AI Automation Pipeline',
            'Secure Cloud Deployment with CI/CD Automation',
            'Role-Based Access Control & Microservice APIs',
          ],
          summary: 'Bespoke enterprise software platform combined with automated workflow bots.',
        }
      case 'staffing':
        return {
          duration: 'Onboarding in 48 - 72 Hours',
          team: 'Pre-Vetted Dedicated Consultants or Turnkey Squads',
          deliverables: [
            'Immediate Technical Interviews with Pre-Qualified Candidates',
            'Zero Placement Fee Risk & 2-Week Evaluation Trial',
            'Seamless Time Tracking, NDA & IP Assignment',
            'Flexible Scaling (Upsize/Downsize with 15 Days Notice)',
          ],
          summary: 'Rapid staffing of specialized SAP, CPM, and software engineers.',
        }
      default:
        return {}
    }
  }

  const estimate = getEstimate()

  const handleBook = () => {
    const practiceName = practices.find((p) => p.id === selectedPractice)?.name
    onOpenContactWithDetails({
      practice: practiceName,
      scale: companyScale,
      timeline,
      estimatedDuration: estimate.duration,
    })
  }

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Solution Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Configure Your Enterprise Engagement
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Select your practice needs and operational scale to review estimated team composition and deliverables.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Practice Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. Select Practice Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {practices.map((p) => {
                    const Icon = p.icon
                    const isSelected = selectedPractice === p.id
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPractice(p.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-500 text-white font-semibold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm">{p.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Organization Scale */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  2. Organization / Project Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'growth', label: 'Mid-Market / Growth', desc: '1 - 5 Entities' },
                    { id: 'enterprise', label: 'Global Enterprise', desc: '6 - 25+ Entities' },
                    { id: 'conglomerate', label: 'Multi-National Group', desc: 'Complex Multi-GAAP' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCompanyScale(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        companyScale === s.id
                          ? 'bg-cyan-500/15 border-cyan-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{s.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  3. Deployment Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'immediate', label: 'Immediate Sprint', sub: 'Next 1 - 2 weeks' },
                    { id: 'standard', label: 'Standard Planned', sub: 'Within 30 days' },
                    { id: 'q_close', label: 'Fiscal Close Window', sub: 'Quarterly target' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        timeline === t.id
                          ? 'bg-cyan-500/15 border-cyan-500 text-white font-bold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.label}</div>
                      <div className="text-[10px] text-slate-400">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                    Blueprint Estimate
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {estimate.summary}
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Target Timeframe:</span>
                  <span className="text-sm font-bold text-cyan-300 font-mono">{estimate.duration}</span>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-slate-400">Recommended Squad:</span>
                  <div className="text-xs font-medium text-slate-200 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    {estimate.team}
                  </div>
                </div>

                <div className="text-xs space-y-2 pt-1">
                  <span className="text-slate-400">Key Solution Milestones:</span>
                  {estimate.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300 text-[11px]">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleBook}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Request Proposal for this Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
