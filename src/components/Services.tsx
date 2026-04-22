import { motion } from 'motion/react';
import { Sparkles, Activity, Smile, Waves, Heart, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Root Canal Treatment",
    description: "Saving your natural teeth with precision and care. Painless digital RCT for long-lasting health.",
    icon: <Activity className="w-8 h-8" />,
    benefits: ["Pain Relief", "Saves Natural Tooth", "Prevents Infection"],
    duration: "45-60 mins",
    pain: "Minimal (Local Anesthesia)",
    id: "rct"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and aesthetic reshaping for a perfect look.",
    icon: <Sparkles className="w-8 h-8" />,
    benefits: ["Hollywood Smile", "Corrects Gaps", "Stain Removal"],
    duration: "1-2 Sessions",
    pain: "None / Minimal",
    id: "cosmetic"
  },
  {
    title: "Invisible Aligners",
    description: "Clear, comfortable orthodontic solution to straighten teeth without metal or wires.",
    icon: <Smile className="w-8 h-8" />,
    benefits: ["Discreet", "Removable", "Better Hygiene"],
    duration: "6-18 Months",
    pain: "Moderate Pressure",
    id: "aligners"
  },
  {
    title: "Teeth Whitening",
    description: "Professional brightening for a radiant, confident smile that shines.",
    icon: <Waves className="w-8 h-8" />,
    benefits: ["Instant Results", "Safe Treatment", "High Confidence"],
    duration: "45 mins",
    pain: "None",
    id: "whitening"
  },
  {
    title: "Facial Aesthetics",
    description: "Enhance your natural beauty with advanced non-surgical clinic-grade treatments.",
    icon: <Heart className="w-8 h-8" />,
    benefits: ["Rejuvenated Skin", "Global Standards", "Natural Results"],
    duration: "30-60 mins",
    pain: "Minimal",
    id: "aesthetic"
  },
  {
    title: "Braces / Orthodontics",
    description: "Traditional and modern braces systems for perfect alignment across all ages.",
    icon: <ShieldCheck className="w-8 h-8" />,
    benefits: ["Perfect Alignment", "Functional Bite", "Lifetime Result"],
    duration: "12-24 Months",
    pain: "Initial Discomfort",
    id: "braces"
  }
];

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gold uppercase tracking-[0.3em] text-xs font-semibold"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif font-medium mt-4 mb-6"
        >
          Specialized Dental & Aesthetic <br />
          <span className="italic">Solutions</span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
          Providing world-class treatments using the latest technology in Khairpur Mir's. 
          Hamara maqsad apka muskurata chehra aur sehatmand danta hain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col p-8 bg-dark-surface/80 border border-gold/20 rounded-lg hover:border-gold transition-all duration-500 cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-gold transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <span className="gold-text text-[10px] tracking-widest font-bold">0{index + 1}</span>
            </div>
            
            <h3 className="text-xl font-serif font-light mb-4 group-hover:text-gold transition-colors">
              {service.title}
            </h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">
              {service.description}
            </p>
            
            <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30 font-bold">
                <span>Duration: {service.duration}</span>
                <span>Pain: {service.pain}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="bg-white/5 text-[9px] px-3 py-1 rounded-sm text-gold/80 uppercase font-bold tracking-wider border border-white/5">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
