import { motion } from 'motion/react';
import { Award, Trophy, Medal, Star, ShieldCheck, Zap } from 'lucide-react';

const awards = [
  { title: 'Best IT Solution 2023', organization: 'Tech Excellence Awards', icon: Award },
  { title: 'Innovation Leader', organization: 'Global Biz Forum', icon: Zap },
  { title: 'Top Cybersecurity Firm', organization: 'Security Insider', icon: ShieldCheck },
  { title: 'Project of the Year', organization: 'Software Builders Assoc.', icon: Trophy },
  { title: 'Customer First Choice', organization: 'Service Hub', icon: Medal },
  { title: '5-Star Rated Integrator', organization: 'Clutch Reviews', icon: Star },
];

export default function Awards() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
            Recognized Excellence
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Our commitment to quality and innovation has earned us prestigious accolades across the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-50 transition-all"
            >
              <div className="w-16 h-16 bg-brand-accent/5 text-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <award.icon size={32} />
              </div>
              <h3 className="font-display font-bold text-brand-primary mb-1">
                {award.title}
              </h3>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold flex items-center gap-1">
                {award.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
