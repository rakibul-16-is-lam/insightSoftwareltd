import { motion } from 'motion/react';
import { ExternalLink, Maximize2 } from 'lucide-react';

export default function AppIframe() {
  const appUrl = "https://cpicst-f20ff.firebaseapp.com/";
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
            Live Application Preview
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Experience our smart monitoring dashboard in real-time. 
            <a 
              href={appUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-brand-accent hover:underline flex items-center gap-1 font-semibold"
            >
              Open Fullscreen <ExternalLink size={14} />
            </a>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white bg-white"
        >
          {/* Browser-like header */}
          <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="bg-white/80 px-4 py-1 rounded-lg text-[10px] text-slate-400 font-mono tracking-wider shadow-sm border border-slate-100 flex items-center gap-2">
              <Maximize2 size={10} /> {appUrl}
            </div>
            <div className="w-12 h-1 bg-slate-200 rounded-full" />
          </div>

          <div className="w-full h-[calc(100%-3rem)] bg-slate-50">
             <iframe 
              src={appUrl}
              className="w-full h-full border-none"
              title="Insight Software Live App"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
