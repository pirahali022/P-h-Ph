import { motion } from 'motion/react';
import { User, Shield, Zap, HeartHandshake } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="relative"
        >
          <div className="aspect-[4/5] bg-white/[0.02] rounded-3xl overflow-hidden relative border border-gold/20 shadow-2xl">
            <img 
              src="/input_file_3.png" 
              alt="Elite Dental Clinic Interior" 
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-serif mb-2">DR Pirah Ali Phulpoto</h3>
              <p className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold">
                BDS, RDS, DIP.FA, C.ENDO, C.IMPLANT, C.COSMETIC DENTISTRY
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold rounded-tr-3xl hidden md:block" />
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="gold-text uppercase tracking-[0.2em] text-[10px] font-bold">The Practice</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mt-4 leading-tight">Elite care that’s <br /> <span className="italic text-gold">within reach</span> for all.</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/60 leading-relaxed text-lg font-light max-w-xl">
              Advanced Dental & Aesthetic Care in a comfortable, state-of-the-art environment in Khairpur Mir's. 
              We prioritize your comfort with a patient-centered, pain-free approach to your smile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {[
              { icon: <Shield size={18} />, title: "Sterilized Standards", desc: "Global Hygiene Protocols" },
              { icon: <Zap size={18} />, title: "Modern Equipment", desc: "Digital Precision Tools" },
              { icon: <HeartHandshake size={18} />, title: "Pain-Free Care", desc: "Gentle Extraction & RCT" },
              { icon: <User size={18} />, title: "Expert Surgeon", desc: "Specialized Aesthetician" }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="doctor-badge flex flex-col gap-2"
              >
                <div className="text-gold flex items-center gap-3">
                   {item.icon}
                   <h4 className="text-[11px] uppercase tracking-widest font-bold opacity-80">{item.title}</h4>
                </div>
                <p className="text-xs text-white/40 ml-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
