import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="Insight Software Ltd Logo" className="h-full w-auto" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-brand-primary">
                Insight Software Ltd
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Pioneering digital excellence through innovative IT solutions and world-class consultation for nearly three decades.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Careers', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-brand-accent transition-colors block text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+88-01577204682' },
                { icon: Mail, text: 'sales@is.system.com' },
                { icon: MapPin, text: 'Nasirabad, Chattogram-4209, Bangladesh' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-500">
                  <item.icon size={18} className="text-brand-accent shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-primary mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Stay updated with the latest tech trends and news.</p>
            <div className="flex bg-white p-1 rounded-full border border-slate-200">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none focus:ring-0 px-4 text-sm w-full"
              />
              <button className="bg-brand-primary text-white p-3 rounded-full hover:bg-slate-800 transition-all">
                <Mail size={16} />
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-3 gap-2">
              {/* Mock certifications */}
              <div className="h-10 bg-slate-200 rounded animate-pulse" />
              <div className="h-10 bg-slate-200 rounded animate-pulse" />
              <div className="h-10 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Insight Software Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 text-xs hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-xs hover:text-brand-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
