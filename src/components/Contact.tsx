import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
                Let's Start a <br />
                <span className="text-brand-accent">Conversation</span>
              </h2>
              <p className="text-slate-600">
                Ready to take your business to the next level? Our experts are here to help you navigate the complex world of technology.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { label: 'Email', value: 'sales@is.system.com', icon: Mail },
                { label: 'Phone', value: '+88-01577204682', icon: Phone },
                { label: 'Address', value: 'Nasirabad, Chattogram-4209, Bangladesh', icon: MapPin },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-brand-primary font-bold text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-brand-accent focus:border-brand-accent transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-brand-accent focus:border-brand-accent transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-brand-accent focus:border-brand-accent transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-brand-accent focus:border-brand-accent transition-all">
                  <option>Software Development</option>
                  <option>Cloud Infrastructure</option>
                  <option>Cybersecurity</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-brand-accent focus:border-brand-accent transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-brand-primary/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
