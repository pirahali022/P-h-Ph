import { motion } from 'motion/react';

const galleryItems = [
  { id: 1, title: "Advanced Aesthetic Unit", category: "Technology", url: "/input_file_0.png" },
  { id: 2, title: "Modern Operatory", category: "Clinic", url: "/input_file_1.png" },
  { id: 3, title: "Certified Excellence", category: "Standards", url: "/input_file_2.png" },
  { id: 4, title: "Patient Care Area", category: "Service", url: "/input_file_3.png" },
  { id: 5, title: "Professional Environment", category: "Clinic", url: "/input_file_4.png" },
  { id: 6, title: "Hygienic Standards", category: "Safety", url: "/input_file_1.png" },
];

export const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold">Showcase</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 italic">Clinic & Results</h2>
        <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
          A glimpse into our world-class facility and the beautiful smiles we care for every day. Modern hygiene standards in every corner.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
            
            <div className="absolute inset-x-0 bottom-0 p-8">
              <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </span>
              <h3 className="text-white font-serif text-xl font-light transform group-hover:-translate-y-1 transition-transform duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
