import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timeline = [
  {
    year: 'Jan 2025 - Mar 2025',
    role: 'Learning Graphic Design & Video Editing',
    company: 'Self-Learning',
    description:
      'Started practicing Photoshop, Premiere Pro, Canva, and basic motion editing through daily creative exercises and online tutorials.',
  },
  {
    year: 'Apr 2025 - Jun 2025',
    role: 'Creative Content Practice',
    company: 'Personal Projects',
    description:
      'Created thumbnails, reels, posters, social media creatives, and short-form edited videos for portfolio improvement.',
  },
  {
    year: 'Jul 2025 - Sep 2025',
    role: 'Web Design & Branding Exploration',
    company: 'Personal Projects',
    description:
      'Worked on portfolio website concepts, UI inspiration, branding layouts, and modern visual design styles.',
  },
  {
    year: 'Oct 2025 - Dec 2025',
    role: 'Freelance Creative Work',
    company: 'Self-Employed',
    description:
      'Started taking small freelance and practice-based projects related to video editing, graphic design, and digital content creation.',
  },
  {
    year: 'Jan 2026 - Present',
    role: 'Freelance Graphic Designer & Video Editor',
    company: 'Self-Employed',
    description:
      'Building a personal brand and improving creative workflow while working on editing, branding, and social media design projects.',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Creative <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow drop-shadow-xl z-10">
                <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <div className="flex flex-col mb-2">
                  <span className="text-purple-400 font-mono text-sm mb-1">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="text-zinc-400 text-sm font-medium">{item.company}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
