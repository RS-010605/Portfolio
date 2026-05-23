import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '1+', label: 'Years Experience' },
    { number: '5', label: 'Tools Mastered' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 glass-card p-2">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
                alt="Creative Professional"
                className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-[50px] z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-600/30 rounded-full blur-[50px] z-0" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Crafting <span className="text-gradient">Stories</span> Through Design & Motion.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              I am a passionate Graphic Designer and Video Editor with a keen eye for detail and a drive for creating visually stunning and highly engaging content. With years of experience working with top-tier creators and brands, I specialize in bringing ideas to life through dynamic motion and premium aesthetics.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "Graphic Design",
                "Video Editing",
                "Social Media Design",
                "Poster Design",
                "Basic Motion Graphics"
              ].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-4xl font-bold text-white">{stat.number}</span>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
