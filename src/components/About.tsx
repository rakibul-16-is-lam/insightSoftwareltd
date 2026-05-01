import { motion } from 'motion/react';
import { Target, Eye, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-8 rounded-3xl text-white shadow-xl">
              <p className="text-4xl font-display font-bold">27+</p>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years Exp.</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-6">
              Engineering a Better <br />
              <span className="text-brand-accent">Digital Future</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Since 1997, Insight Software Ltd has been at the forefront of technological innovation. We don't just build software; we architect solutions that empower businesses to scale, secure their data, and outpace the competition.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Our Mission', desc: 'To provide high-quality, cost-effective IT solutions to clients worldwide.', icon: Target },
                { title: 'Our Vision', desc: 'To be the most trusted global partner for digital transformation.', icon: Eye },
                { title: 'Our Values', desc: 'Integrity, innovation, and a commitment to absolute excellence.', icon: Shield },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-primary">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
