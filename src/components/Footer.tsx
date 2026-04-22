import { Facebook, Instagram, MessageSquare, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-light leading-none uppercase tracking-widest text-white">Elite Dental</h3>
              <p className="text-gold text-[9px] uppercase font-bold tracking-[0.3em] mt-2 opacity-80">Care & Aesthetics</p>
            </div>
            <p className="text-white/30 text-xs leading-relaxed font-light max-w-xs">
              Advanced Dental & Aesthetic Care in a comfortable, state-of-the-art environment in Khairpur Mir's. A patient-centered, pain-free approach.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:border-gold hover:text-gold transition-all bg-white/[0.02]">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:border-gold hover:text-gold transition-all bg-white/[0.02]">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#25D366]/30 flex items-center justify-center hover:border-[#25D366] text-[#25D366] transition-all bg-[#25D366]/5">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-10 opacity-60">Services</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/40 font-medium">
              <li><a href="#services" className="hover:text-gold transition-colors">Invisible Aligners</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Facial Aesthetics</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Root Canal (RCT)</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Orthodontics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-10 opacity-60">Practice</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/40 font-medium">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">The Practice</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Case Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="glass p-8 rounded-lg">
            <h4 className="text-white font-serif text-lg font-light mb-4 italic">Newsletter</h4>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6 leading-relaxed">Stay updated with digital dental tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 rounded-sm text-[10px] uppercase tracking-widest focus:outline-none focus:border-gold transition-all text-white placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-gold text-black rounded-sm hover:brightness-110 transition-all">
                 <Mail size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold">
            <span>&copy; 2026 Elite Dental Care</span>
            <span className="hidden sm:inline">Modern Hygiene Standards</span>
            <span className="hidden sm:inline">Sterilized Equipment</span>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[10px] italic opacity-40 text-white font-light uppercase tracking-widest">Digital Precision &bull; Aesthetic Artistry</p>
            <div className="flex items-center gap-2 text-white/30 text-[9px] uppercase tracking-[0.2em]">
              Created with <Heart size={10} className="text-gold fill-gold opacity-50" /> for Khairpur
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
