import {
  Quote,
  Star,
  CheckCircle2
} from './icons';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Raj',
      role: 'Chief Executive Officer (CEO)',
      company: 'Global Retail & Distribution Enterprise',
      date: 'May 15, 2025',
      feedback:
        'Kalki Consulting Services transformed our internal systems and gave us a clear, auditable roadmap for sustainable growth. Their team delivered automated financial consolidation in SAP Analytics Cloud weeks ahead of schedule. We felt supported at every single stage.',
      highlight: 'Multi-Entity Close Reduced by 70%'
    },
    {
      name: 'Anjali',
      role: 'Co-founder & Chief Technology Officer',
      company: 'Enterprise FinTech Platform',
      date: 'May 15, 2024',
      feedback:
        'The team’s professionalism, technical depth, and agility were exceptional. They provisioned two senior SAP Datasphere engineers and a full-stack squad within 48 hours. They delivered faster than promised and consistently exceeded our expectations.',
      highlight: 'Pre-Vetted Squad Deployed in 48h'
    },
    {
      name: 'Vikram',
      role: 'Director of Corporate Finance & Group Controller',
      company: 'Manufacturing & Industrial Conglomerate',
      date: 'March 10, 2024',
      feedback:
        'Their deep knowledge of IFRS statutory close, BPC script logic tuning, and BDC migration saved us from catastrophic fiscal close delays. The batch runtimes went from 6 hours to under 45 minutes.',
      highlight: '5x Faster Batch Runtimes'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Trusted Clients Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Business Leaders Say About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Our Consulting Services
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real enterprise leaders share their experience partnering with Kalki Consulting Services on mission-critical initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{t.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.feedback}"
                </p>

                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2 mb-6 text-xs text-blue-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{t.highlight}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-base shadow-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-blue-600 font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
