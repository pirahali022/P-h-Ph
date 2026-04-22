import { motion } from 'motion/react';
import { ShieldCheck, Thermometer, Clock, CheckCircle2 } from 'lucide-react';

const protocols = [
  {
    step: "01",
    title: "Ultrasonic Cleaning",
    desc: "Pre-cleaning instruments to remove microscopic debris before sterilization.",
    icon: <ShieldCheck size={20} />
  },
  {
    step: "02",
    title: "Pouching & Sealing",
    desc: "Instruments are sealed in medical-grade pouches with internal chemical indicators.",
    icon: <Clock size={20} />
  },
  {
    step: "03",
    title: "Autoclave Cycle",
    desc: "High-pressure steam (121°C / 250°F at 15-20 psi) kills all bacteria and spores.",
    image: "/input_file_1.png",
    details: "International standards verified."
  },
  {
    step: "04",
    title: "Indicator Verification",
    desc: "Chemical indicators are verified to confirm successful sterilization cycles.",
    image: "/input_file_2.png",
    details: "Step-by-step safety check."
  }
];

export const Sterilization = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="gold-text uppercase tracking-[0.2em] text-[10px] font-bold">Safety First</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 italic">Sterilization Protocols</h2>
            <p className="text-white/40 max-w-lg font-light leading-relaxed">
              At Elite Dental, your safety is our ultimate priority. We follow rigid, multi-step sterilization 
              protocols that meet international medical standards. No compromises, only clinical excellence.
            </p>
          </motion.div>

          <div className="space-y-8">
            {protocols.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-gold group-hover:border-gold transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl font-light mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-6 p-6 border border-white/5 rounded-lg bg-white/[0.01]">
             <div className="bg-gold/10 p-3 rounded-full text-gold">
               <Thermometer size={24} />
             </div>
             <div>
               <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Controlled Heat</p>
               <p className="text-white/60 text-sm font-light">121°C High-Pressure Steam Cycle</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {protocols.slice(2).map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/5 bg-white/[0.02]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-gold text-[8px] font-bold uppercase tracking-widest block mb-1">Step {item.step}</span>
                  <p className="text-white font-serif text-lg leading-tight mb-2 italic">{item.title}</p>
                  <div className="flex items-center gap-2 text-white/30 text-[9px] uppercase tracking-widest font-bold">
                    <CheckCircle2 size={10} className="text-gold" />
                    {item.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="sm:col-span-2 p-8 border border-gold/10 rounded-lg bg-gold/5 mt-4 relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="text-white font-serif text-2xl font-light mb-2 italic">International Safety Guidelines</h4>
               <p className="text-white/40 text-sm font-light">We adhere strictly to 15-20 psi pressure controls to eliminate 100% of bacterial spores and viruses.</p>
             </div>
             <ShieldCheck size={120} className="absolute -right-10 -bottom-10 text-gold/5" />
          </div>
        </div>
      </div>
    </div>
  );
};
