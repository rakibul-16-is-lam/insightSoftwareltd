import { motion } from 'motion/react';
import { Code, Cloud, Shield, Database, Layout, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke applications tailored to your specific business needs and workflows.',
    icon: Code,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions to modernize your legacy systems.',
    icon: Cloud,
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security audits and protection for your digital assets.',
    icon: Shield,
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced AI & ML.',
    icon: Database,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric designs that balance aesthetic beauty with functional utility.',
    icon: Layout,
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-slate-600">
              We leverage cutting-edge technology to solve complex business challenges and drive growth.
            </p>
          </div>
          <button className="text-brand-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all shrink-0">
            View All Services <Code size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-accent/20 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-primary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
