import { useState } from 'react';
import {
  TrendingUp,
  Cpu,
  Code2,
  UsersRound,
  ShieldCheck,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X
} from './icons';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'financial-advisory',
      title: 'Financial Advisory & Statutory Planning',
      badge: 'Corporate CPM',
      icon: TrendingUp,
      tagline: 'Statutory multi-entity consolidation, IFRS/GAAP compliance, and driver-based planning.',
      description:
        'Make smarter financial decisions with our comprehensive advisory and CPM services. We eliminate manual Excel close spreadsheets by configuring automated multi-currency eliminations, equity pickup, rolling forecasts, and board cockpits.',
      capabilities: [
        'Automated Legal & Statutory Consolidation (IFRS & US GAAP)',
        'Complex Intercompany Eliminations & Currency Translation (CTA)',
        'Integrated Financial Planning (IFP) - Revenue, OPEX & Headcount',
        'Rolling 12/18-Month Continuous Forecasts & Scenario Modeling',
        'Digital Boardroom & Automated Variance Summaries'
      ],
      metrics: 'Close cycles cut by up to 70% with 100% auditable lineage'
    },
    {
      id: 'erp-sap',
      title: 'ERP & SAP Implementation Services',
      badge: 'SAP Analytics Cloud & CPM',
      icon: Cpu,
      tagline: 'SAC predictive stories, Datasphere data fabric, BPC logic tuning, and BDC migrations.',
      description:
        'Streamline your enterprise processes with modern, integrated ERP platforms. We implement and tune SAP Analytics Cloud (SAC), build zero-replication data spaces in SAP Datasphere, accelerate BPC script logic by 5x, and execute zero-loss BDC data conversions.',
      capabilities: [
        'SAP Analytics Cloud (SAC) Planning & Machine Learning Insights',
        'SAP Datasphere Semantic Spaces & Unified Data Fabric Architecture',
        'SAP BPC (Standard & Embedded) Performance & Script Logic Optimization',
        'BDC Batch Input Sessions & Mass Call Transaction Migration',
        'Seamless Integration between S/4HANA, Legacy Systems & Cloud'
      ],
      metrics: '5x faster batch runtimes and zero-duplicate semantic modeling'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting & Solutioning',
      badge: 'Modern Infrastructure',
      icon: Globe,
      tagline: 'Enterprise architecture assessments, cloud modernization, and system integration.',
      description:
        'Our IT consulting team helps enterprises plan, architect, and execute digital upgrades including infrastructure optimization, microservices design, API integration, and cloud-first scaling that securely aligns IT with your business vision.',
      capabilities: [
        'Enterprise IT Systems Architecture Audit & Modernization Roadmap',
        'Cloud-Native Infrastructure & Multi-Region Kubernetes (AWS / GCP / Azure)',
        'Microservices, RESTful & GraphQL API Integration Pipelines',
        'Legacy Migration Strategies with Continuous System Availability',
        'Automated DevOps, CI/CD Deployment & 24/7 Monitoring'
      ],
      metrics: 'Sub-second SLAs and resilient 99.99% uptime architectures'
    },
    {
      id: 'staffing-recruitment',
      title: 'Staffing & Recruitment Consulting',
      badge: 'Elite Talent Deployment',
      icon: UsersRound,
      tagline: 'Deploy pre-vetted SAP architects, CPM specialists, and senior software squads in 48-72h.',
      description:
        'Unlock the full potential of your workforce. From talent acquisition and employer branding to specialized staff augmentation—we provide rigorously pre-vetted SAP consultants, full-stack developers, and turnkey project squads ready to deliver from day one.',
      capabilities: [
        'Dedicated SAP Consultants (SAC, Datasphere, BPC, BDC, S/4HANA)',
        'Senior Full-Stack & Cloud Engineers (React, Node, Python, Cloud)',
        'Flexible Engagement: Contract, Contract-to-Hire & Managed Squads',
        'Rigorous Multi-Stage Technical & Behavioral Vetting (Top 5% only)',
        'Rapid Turnaround: Pre-qualified candidate profiles in 48 to 72 hours'
      ],
      metrics: 'Top 5% tested talent with a 96% client contract renewal rate'
    },
    {
      id: 'tailor-made-apps',
      title: 'Tailor-Made Application Development',
      badge: 'Digital Engineering',
      icon: Code2,
      tagline: 'Bespoke enterprise web portals, scalable SaaS platforms, and intelligent AI automations.',
      description:
        'We design, architect, and build custom web and enterprise applications tailored to your exact business specifications. We also implement autonomous agentic automations and document processing pipelines that save up to 80% of repetitive operational effort.',
      capabilities: [
        'Custom Web & Enterprise Portals (React, Next.js, Node.js, TypeScript)',
        'Scalable Internal Tools, Client Portals & Executive Dashboards',
        'AI Workflow Automations & Document Data Extraction (OCR / LLMs)',
        'Robotic Process Automation (RPA) for Legacy System Interfacing',
        'High-Security Role-Based Access Control (RBAC) & Audit Logging'
      ],
      metrics: 'Sub-second page speeds and up to 80% manual effort saved'
    },
    {
      id: 'cyber-security',
      title: 'Data Backup & Cyber-Security',
      badge: 'Enterprise Protection',
      icon: ShieldCheck,
      tagline: 'Protect critical data assets with cloud backup strategies, threat monitoring & compliance.',
      description:
        'Protect your critical financial records and customer assets with institutional-grade security. We configure zero-trust access control, automated cryptographic checksums, disaster recovery protocols, and full compliance with SOC2, GDPR, and IFRS/GAAP standards.',
      capabilities: [
        'Automated Cloud-First Backup & Rapid Disaster Recovery Testing',
        'Zero-Trust Architecture, Role-Based Permissions & Multi-Factor Auth',
        'Cryptographic Checksum Verification for Zero Data Loss During Migrations',
        'Continuous Threat Monitoring, Anomaly Detection & Vulnerability Audits',
        'Comprehensive Audit Trails & Lineage for Regulatory Compliance'
      ],
      metrics: '100% verifiable data integrity and zero-trust protocol enforcement'
    }
  ];

  const handleServiceInquiry = (service) => {
    setSelectedService(null);
    window.location.assign(`mailto:kalkiconsulting.main@gmail.com?subject=Inquiry: ${encodeURIComponent(service.title)}`);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Light Theme */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Most Premium Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Business &amp; Technology Solutions{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Designed for Real Growth
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From strategic corporate finance and SAP architectures to bespoke software development, cybersecurity, and on-demand elite staffing.
          </p>
        </div>

        {/* 6 Services Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-3xl p-7 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      0{idx + 1} &bull; {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-blue-700 font-semibold mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                    {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(item)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleServiceInquiry(item)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Selected Service - Light Theme */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                {selectedService.badge}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-blue-700 text-sm font-semibold mb-4">
              {selectedService.tagline}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Full Scope &amp; Key Deliverables
              </div>
              {selectedService.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700">
              <strong className="text-blue-700">Outcome SLA: </strong>
              {selectedService.metrics}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleServiceInquiry(selectedService)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Request Quote for this Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
