import {
  Globe,
  Briefcase,
  UsersRound,
  Clock
} from './icons';

export default function StatsBar() {
  const stats = [
    {
      value: '4+',
      label: 'Delivery Hubs & Corridors',
      sub: 'Delhi NCR, Rajasthan, North America & EMEA',
      icon: Globe
    },
    {
      value: '35+',
      label: 'Completed Enterprise Projects',
      sub: 'SAC, BPC, Datasphere & Custom SaaS',
      icon: Briefcase
    },
    {
      value: '20+',
      label: 'Senior Practice Architects',
      sub: 'Average 8+ years hands-on experience',
      icon: UsersRound
    },
    {
      value: '1,100+',
      label: 'Hours & Placed Specialists',
      sub: 'High-stake sprints & fiscal close support',
      icon: Clock
    }
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-xs hover:shadow-md"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-200">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{s.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">{s.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
