import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Sukkur",
    text: "Painless RCT experience! Doctor was very professional and the clinic environment is very relaxing. Best clinic in Sindh.",
    stars: 5
  },
  {
    name: "Sana Phulpoto",
    location: "Khairpur",
    text: "Mera danto ka gap bilkul khatam ho gaya veneers ke zariye. Aesthetic smile making mein Elite Dental ka koi muqabla nahi.",
    stars: 5
  },
  {
    name: "Zeeshan Ali",
    location: "Larkana",
    text: "Bacho ke liye bhi bohot achi clinic hai. My son got his braces from here, and the results are amazing. Very hygienic.",
    stars: 5
  }
];

export const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Patient Stories</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium mt-4">Wall of <span className="italic">Smiles</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 glass rounded-lg relative group hover:border-gold transition-all duration-500"
          >
            <Quote className="absolute top-8 right-8 text-gold/10 w-16 h-16 group-hover:text-gold/20 transition-colors" />
            <div className="flex gap-1 mb-6">
              {[...Array(item.stars)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-10 italic text-[15px]">
              "{item.text}"
            </p>
            <div className="border-t border-white/5 pt-6">
              <h4 className="font-serif font-light text-xl text-white">{item.name}</h4>
              <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold mt-1 opacity-60">Verified Patient &bull; {item.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
