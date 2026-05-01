import { motion } from 'motion/react';
import { Activity, BarChart3, Clock, LayoutGrid, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    title: 'Real-time Analytics',
    desc: 'Monitor department performance and activity live with precision tracking.',
    icon: Activity,
  },
  {
    title: 'Resource Allocation',
    desc: 'Smart algorithms to optimize hardware and human resource distribution.',
    icon: LayoutGrid,
  },
  {
    title: 'Automated Reporting',
    desc: 'Generate comprehensive insights and compliance reports automatically.',
    icon: BarChart3,
  },
  {
    title: 'Security Compliance',
    desc: 'Built-in enterprise encryption and access control for sensitive data.',
    icon: ShieldCheck,
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} />
              Flagship Product
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Smart Department <br />
              <span className="text-brand-accent">Monitoring System</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Insight Software's proprietary monitoring suite provides 360-degree visibility into your organization's operational efficiency. Empower your department heads with the data they need to lead effectively.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                      <feature.icon size={20} />
                    </div>
                    <h4 className="font-display font-bold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-brand-accent/20">
              Request Live Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-slate-900 rounded-[2.5rem] border border-white/10 p-4 shadow-2xl overflow-hidden">
              {/* Mock Dashboard UI */}
              <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono tracking-tighter">SDMS v2.4 - OPERATIONAL</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-32 bg-brand-accent/10 rounded-xl border border-brand-accent/20 flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-accent/40 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-center">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Efficiency</p>
                      <p className="text-lg font-display font-bold text-white">94.2%</p>
                    </div>
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-center">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Active Nodes</p>
                      <p className="text-lg font-display font-bold text-white">128 / 130</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-accent/10 blur-[100px] -z-0 rounded-full" />
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/5 rounded-full -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
