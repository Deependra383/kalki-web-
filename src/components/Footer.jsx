import { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ArrowRight,
  CheckCircle2
} from './icons';

export default function Footer({ onContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Newsletter Banner matching Disa Consulting */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Stay Ahead in Enterprise Innovation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Join Our Executive Advisory Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                Get quarterly briefs on SAP Analytics Cloud upgrades, statutory IFRS close playbooks, and cloud technology architectures.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/60 px-5 py-3 rounded-xl border border-emerald-500/40">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed! Check your inbox for our latest advisory brief.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-2 max-w-md w-full"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your enterprise email..."
                    className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white placeholder-slate-500 outline-none w-full sm:w-72"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-blue-600/20"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-sky-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  KALKI <span className="text-blue-400 font-light">CONSULTING</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
                  Business &amp; Technology Advisory
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              India's leading enterprise business and technology consulting partner. Delivering Financial Planning, Consolidation &amp; Reporting, SAP modernizations (SAC, Datasphere, BPC, BDC), custom application engineering, and specialized staffing.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:kalkiconsulting.main@gmail.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  kalkiconsulting.main@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Delhi NCR &amp; Rajasthan Business Corridor, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Monday &ndash; Friday: 09:00 AM &ndash; 06:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links matching Navbar: Home, Services, Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="mailto:kalkiconsulting.main@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={onContact}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Premium Services Directory */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Our Services
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  IT Consulting &amp; Solutioning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  ERP &amp; SAP Systems (SAC &amp; BPC)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Financial Advisory &amp; Statutory Close
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Staffing &amp; Recruitment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Tailor-Made Application Dev
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Data Backup &amp; Cyber-Security
                </a>
              </li>
            </ul>
          </div>

          {/* Strategic Locations & Direct Action */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Enterprise Advisory
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering Fortune 500 &amp; mid-market enterprises across North America, EMEA, and APAC with on-ground Indian engineering hubs.
            </p>
            <div className="pt-2">
              <button
                onClick={onContact}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 text-blue-300 font-bold text-xs transition-all text-center block cursor-pointer"
              >
                Start IT Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Back To Top */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Kalki Consulting Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300">
              Our Services
            </a>
            <a href="#hero" className="hover:text-slate-300">
              Terms of Engagement
            </a>
            <a href="#services" className="hover:text-slate-300">
              Security &amp; Compliance
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
