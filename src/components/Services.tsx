import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Film, Smartphone, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'Graphic Design',
    description:
      'Creating posters, thumbnails, banners, social media posts, and simple branding designs with modern and clean visuals.',
  },
  {
    icon: <Film size={32} />,
    title: 'Video Editing',
    description:
      'Editing short-form and basic long-form videos with cuts, transitions, music syncing, subtitles, and simple effects.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Social Media Content',
    description:
      'Designing Instagram posts, reels covers, YouTube thumbnails, and promotional creatives for digital platforms.',
  },
  {
    icon: <Monitor size={32} />,
    title: 'Web & UI Design Practice',
    description:
      'Exploring modern website layouts, portfolio interfaces, and beginner-friendly UI design concepts using current design trends.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative z-10 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Creative <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-zinc-400 text-lg">Delivering premium design and editing services that help brands and creators stand out in the digital landscape.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-purple-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
