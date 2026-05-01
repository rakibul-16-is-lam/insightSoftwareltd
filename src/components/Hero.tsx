import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Innovation in IT
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-primary leading-[1.1] mb-6">
            Empowering Through <br />
            <span className="text-brand-accent">Innovation</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Insight Software Ltd delivers world-class technology solutions, driving digital transformation for businesses worldwide with over 27 years of excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Our Services <ArrowRight size={18} />
            </button>
            <button className="bg-white text-slate-800 px-8 py-4 rounded-full font-semibold border border-slate-200 hover:border-brand-accent transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Corporate Office" 
              className="w-full aspect-[4/3] object-cover"
            />
            {/* Overlay stats card */}
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Success Rate</p>
                <p className="text-2xl font-display font-bold text-brand-primary">99.9%</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Global Clients</p>
                <p className="text-2xl font-display font-bold text-brand-primary">500+</p>
              </div>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-slate-200 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
