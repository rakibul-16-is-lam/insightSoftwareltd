import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Media() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/20 blur-[100px] -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our Vision in <br />
              <span className="text-brand-accent italic">Action</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Witness how Insight Software Ltd is shaping the future of digital infrastructure through our dedicated team and innovative approach.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Global presence in 15+ countries',
                'Pioneering AI integration in legacy systems',
                'Sustainable technology practices',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-all">
              Watch Our Story
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Using a placeholder video or styled box */}
              <video 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                controls
                poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-around-a-table-42637-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Styled Play Button Cover (Visible when not playing) */}
              <div className="absolute inset-0 bg-brand-primary/40 flex items-center justify-center opacity-100 group-hover:opacity-0 pointer-events-none transition-opacity duration-300">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/50 animate-bounce">
                  <Play size={32} fill="white" className="ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
