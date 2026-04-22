import { motion } from 'motion/react';

const cases = [
  {
    title: "Smile Transformation",
    category: "Full Arch Restoration",
    beforeAfter: "/input_file_0.png",
    description: "Complete prosthetic restoration for functionality and aesthetics."
  },
  {
    title: "Composite Bondings",
    category: "Cosmetic Dentistry",
    beforeAfter: "/input_file_2.png",
    description: "Decay removal and life-like composite layering in a single visit."
  },
  {
    title: "Enamel Contouring",
    category: "Aesthetic Correction",
    beforeAfter: "/input_file_3.png",
    description: "Correcting chips and discoloration for a harmonious smile."
  },
  {
    title: "Clear Aligners",
    category: "Orthodontics",
    beforeAfter: "/input_file_4.png",
    description: "3 months progress with invisible orthodontic solutions."
  },
  {
    title: "PFM Crown Unit",
    category: "Restorative",
    beforeAfter: "/input_file_5.png",
    description: "Single unit crown to restore natural beauty and strength."
  },
  {
    title: "Caries Management",
    category: "Oral Health",
    beforeAfter: "/input_file_6.png",
    description: "From decay to confidence via modern restorative techniques."
  }
];

export const Results = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold">Transformations</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 italic">Proven Results</h2>
        <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
          Real cases, real people. Witness the impact of precision dentistry and aesthetic artistry. 
          Painless, results-driven care in every visit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass rounded-lg overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={item.beforeAfter} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/0 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-black text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                  Actual Case
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-bold mb-2 block">
                {item.category}
              </span>
              <h3 className="text-white font-serif text-xl font-light mb-3 italic">
                {item.title}
              </h3>
              <p className="text-white/40 text-[13px] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
