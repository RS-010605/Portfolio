import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, PlayCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Genesis Brand Identity',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    tools: ['Illustrator', 'Photoshop'],
    type: 'image'
  },
  {
    id: 2,
    title: 'Urban Streetwear Promo',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1000&auto=format&fit=crop',
    tools: ['Premiere Pro', 'After Effects'],
    type: 'video'
  },
  {
    id: 3,
    title: 'Tech Startup Social Kit',
    category: 'Social Media Design',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    tools: ['Figma', 'Photoshop'],
    type: 'image'
  },
  {
    id: 4,
    title: 'Cyberpunk Event Poster',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000&auto=format&fit=crop',
    tools: ['Photoshop'],
    type: 'image'
  },
];

const categories = ['All', 'Graphic Design', 'Video Editing', 'Social Media Design', 'Poster Design'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">A curated selection of my latest projects across branding, motion, and digital design.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-card aspect-[4/3] md:aspect-square lg:aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-purple-400 text-sm font-medium mb-2">{project.category}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-zinc-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                        {project.type === 'video' ? <PlayCircle size={24} /> : <ExternalLink size={24} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
            Works
          </button>
        </div>
      </div>
    </section>
  );
}
