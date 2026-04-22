import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black pt-20">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gold opacity-[0.03] rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-8xl font-serif font-light text-white mb-8 leading-[1.1] tracking-tight"
        >
          Elite care that’s <br />
          <span className="italic text-gold italic">within reach</span> for all.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
        >
          Advanced Dental & Aesthetic Care in a comfortable, state-of-the-art environment in Khairpur Mir's. A patient-centered, pain-free approach to your smile.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#booking" 
            className="w-full sm:w-auto bg-gold text-black px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-gold/10"
          >
            Book Appointment
          </a>
          <a 
            href="tel:03323734789" 
            className="w-full sm:w-auto bg-transparent text-white border border-white/10 px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Emergency Call
          </a>
        </motion.div>
      </div>

      {/* Featured Services Mini Grid as per theme layout */}
      <div className="absolute bottom-12 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-4">
           {['RCT', 'Whitening', 'Cosmetic', 'Aligners', 'Braces', 'Aesthetic'].map((s, i) => (
             <motion.div 
               key={s}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2 + (i * 0.1) }}
               className="bg-white/[0.02] border border-white/5 py-4 px-2 text-center rounded hover:border-gold/30 transition-all cursor-default"
             >
               <span className="gold-text text-[8px] font-bold uppercase tracking-widest block mb-1">0{i+1}</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{s}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};
