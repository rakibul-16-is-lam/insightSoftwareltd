import { motion } from 'motion/react';
import { Users, Briefcase, Calendar, Star } from 'lucide-react';

const stats = [
  { label: 'Years of Excellence', value: '27+', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Team Members', value: '32', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Women Workforce', value: '21%', icon: Star, color: 'text-pink-600', bg: 'bg-pink-50' },
  { label: 'Completed Projects', value: '300+', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export default function Impact() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
            Our Global Impact
          </h2>
          <p className="text-slate-600">
            Driving technological advancement through decades of dedicated service and professional expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-slate-100 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
              <h3 className="text-4xl font-display font-bold text-brand-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-medium text-sm lg:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
