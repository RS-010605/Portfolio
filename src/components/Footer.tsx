import { Camera, MonitorPlay, Video, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-2 block">
              DEV<span className="text-gradient">.STUDIO</span>
            </a>
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
              <MonitorPlay size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
              <Video size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
              <Share2 size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
