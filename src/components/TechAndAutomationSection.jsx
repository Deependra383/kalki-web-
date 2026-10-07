import React, { useState } from 'react'
import {
  Code2,
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  Globe2,
  Workflow,
  Zap,
  CheckCircle2,
  ArrowRight,
  Bot,
  FileCheck2,
  ServerCog,
  TerminalSquare
} from 'lucide-react'

export default function TechAndAutomationSection({ onOpenContact }) {
  const [activeSegment, setActiveSegment] = useState('appdev')

  const capabilities = {
    appdev: {
      title: 'Bespoke Website & Application Development',
      badge: 'Software Engineering',
      tagline: 'Engineering high-performance web applications, customer portals, and enterprise platforms.',
      description:
        'We design, architect, and build production-grade web and mobile applications tailored to your exact business specifications. Built with clean code, sub-second response times, and bulletproof security.',
      points: [
        'Full-Stack Web Development with React, Next.js, Node.js & TypeScript',
        'Enterprise Client Portals, Internal Tools & Executive Dashboards',
        'Custom SaaS Platform Engineering with Scalable Multi-Tenancy',
        'API Design & Integration (RESTful, GraphQL, WebSocket, Webhooks)',
        'Cloud-Native Deployment & DevOps on AWS, Microsoft Azure & GCP',
        'Rigorous Code Audits, Automated Testing & Zero-Downtime Releases',
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Tailwind', 'Docker', 'PostgreSQL'],
    },
    automation: {
      title: 'AI Automations & Autonomous Workflow Agents',
      badge: 'Intelligent Automation',
      tagline: 'Eliminating manual operations through state-of-the-art AI agents and RPA pipelines.',
      description:
        'Transform labor-intensive business processes into autonomous digital workflows. We deploy custom AI agents, automated document extraction, and seamless system integrations that operate 24/7 with zero human error.',
      points: [
        'Automated Invoice & Document Processing (Multimodal AI & OCR)',
        'Agentic Workflow Orchestration for Complex Multi-Step Tasks',
        'Robotic Process Automation (RPA) for Legacy System Data Entry',
        'Automated Financial Anomaly Detection & Cross-System Auditing',
        'Custom Enterprise LLM Fine-Tuning & Secure Private Knowledge Bases',
        'Human-in-the-Loop Review Interfaces with Real-Time Alerts',
      ],
      techStack: ['LangChain', 'LlamaIndex', 'Python', 'FastAPI', 'OpenAI/Gemini', 'Celery', 'Redis', 'OCR AI'],
    },
  }

  const current = capabilities[activeSegment]

  return (
    <section id="tech-development" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technology &amp; Digital Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Website &amp; App Development + <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">AI Automations</span>
            </h2>
            <p className="text-slate-400 text-base">
              Turn innovative digital concepts into reliable, enterprise-grade software and autonomous automated workflows.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSegment('appdev')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSegment === 'appdev'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Web &amp; App Dev</span>
            </button>
            <button
              onClick={() => setActiveSegment('automation')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSegment === 'automation'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Automations</span>
            </button>
          </div>
        </div>

        {/* Feature Display Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                {current.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.title}
              </h3>

              <p className="text-cyan-300 text-base font-medium">
                {current.tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Points */}
              <div className="space-y-3 pt-2">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4">
                <div className="text-xs uppercase font-bold text-slate-400 mb-2.5">
                  Core Tech Stack &amp; Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Discuss Your Tech Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Interactive Terminal / Automation Simulator */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                {/* Code Editor Header */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      {activeSegment === 'appdev' ? 'kalki-app-architecture.ts' : 'ai-agent-workflow.py'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400">Production Ready</span>
                </div>

                {/* Simulated Code / Flow */}
                <div className="p-5 font-mono text-xs text-slate-300 space-y-2 bg-slate-950/60 leading-relaxed overflow-x-auto">
                  {activeSegment === 'appdev' ? (
                    <>
                      <div className="text-slate-500">// Enterprise App Architecture</div>
                      <div><span className="text-purple-400">import</span> &#123; createEnterprisePortal &#125; <span className="text-purple-400">from</span> <span className="text-cyan-300">'@kalki/core'</span>;</div>
                      <div className="pt-2"><span className="text-blue-400">export const</span> <span className="text-yellow-300">AppConfig</span> = &#123;</div>
                      <div className="pl-4">framework: <span className="text-cyan-300">'React / Next.js'</span>,</div>
                      <div className="pl-4">latencySLA: <span className="text-emerald-400">'&lt; 150ms'</span>,</div>
                      <div className="pl-4">security: [<span className="text-cyan-300">'OAuth2'</span>, <span className="text-cyan-300">'RBAC'</span>, <span className="text-cyan-300">'AuditLog'</span>],</div>
                      <div className="pl-4">cloudInfra: <span className="text-cyan-300">'Multi-Region Kubernetes'</span>,</div>
                      <div>&#125;;</div>
                      <div className="pt-2 text-emerald-400">// Output: Scalable, responsive, 99.99% uptime</div>
                    </>
                  ) : (
                    <>
                      <div className="text-slate-500"># Autonomous Financial Workflow Agent</div>
                      <div><span className="text-purple-400">from</span> kalki.agents <span className="text-purple-400">import</span> FinancialAgent</div>
                      <div className="pt-2">agent = FinancialAgent(model=<span className="text-cyan-300">"enterprise-ai"</span>)</div>
                      <div>pipeline = agent.listen(source=<span className="text-cyan-300">"GL_Journal_Feeds"</span>)</div>
                      <div className="pt-2">@pipeline.on_event</div>
                      <div><span className="text-blue-400">def</span> <span className="text-yellow-300">auto_reconcile</span>(entry):</div>
                      <div className="pl-4">matches = agent.detect_variances(entry)</div>
                      <div className="pl-4"><span className="text-purple-400">return</span> agent.auto_post_elimination(matches)</div>
                      <div className="pt-2 text-emerald-400"># Result: 0 manual touches, 100% matched</div>
                    </>
                  )}
                </div>
              </div>

              {/* Highlights badge */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Average deployment speed:</span>
                <span className="font-bold text-cyan-400">2-4 Weeks MVP Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
