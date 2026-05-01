import { motion } from 'motion/react';
import { ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Revolution',
    client: 'Global bank corp',
    category: 'Backend Migration',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'HealthCare AI Sync',
    client: 'National Health Inst',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'EduTech Portal',
    client: 'Heritage University',
    category: 'LMS Platform',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-4">
              Featured Case Studies
            </h2>
            <p className="text-slate-600">
              Discover how we've helped leading organizations achieve their digital ambitions through tailored innovation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-primary">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">
                  <Tag size={12} />
                  {project.category}
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-1 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500">Client: {project.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
