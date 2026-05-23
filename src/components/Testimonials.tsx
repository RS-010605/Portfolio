import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director, TechFlow',
    content: 'The branding work exceeded our expectations. The attention to detail and modern approach completely transformed our online presence. Highly recommended for any serious brand.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Content Creator',
    content: 'Hands down the best video editor I\'ve worked with. The pacing, color grading, and motion graphics are top-tier. My retention rate went up by 30% since we started collaborating.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Elena Rostova',
    role: 'Founder, Elevate Agency',
    content: 'A rare combination of incredible graphic design skills and video editing expertise. Delivered our campaign creatives ahead of schedule and the quality was cinematic.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Client <span className="text-gradient">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-zinc-500 text-sm">{t.role}</p>
                </div>
              </div>
              
              <p className="text-zinc-300 italic leading-relaxed relative z-10">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
