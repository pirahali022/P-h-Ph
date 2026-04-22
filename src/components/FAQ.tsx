import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Root Canal Treatment (RCT) mein dard hota hai?",
    answer: "Nahi, modern techniques aur anesthesia ki wajah se ab RCT bilkul painless hoti hai. Hamari clinic digital RCT provide karti hai jo bohot gentle hota hai."
  },
  {
    question: "Teeth Whitening se danto ko nuksan toh nahi hota?",
    answer: "Professional teeth whitening bilkul safe hai. Hum high-quality clinic grade gels use karte hain jo danto ki enamel ko nuksan nahi pohanchate."
  },
  {
    question: "Invisible Aligners aur Braces mein kya farq hai?",
    answer: "Invisible Aligners transparent hote hain aur removable hote hain, jabke traditional braces metal ke fixed wires hote hain. Aligners zyada comfortable aur aesthetic hote hain."
  },
  {
    question: "Clinic ke timings kya hain?",
    answer: "Hum Subah 10:00 AM se 02:00 PM tak aur Shaam 05:00 PM se 09:00 PM tak open hote hain. Sunday ko appointments available hotay hain."
  },
  {
    question: "Initial consultation fee kitni hai?",
    answer: "Consultation ke zariye hum apke danto ka detail checkup karte hain aur sahi treatment plan suggest karte hain. Booking ke liye aap form fill kar sakte hain."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-20">
        <span className="gold-text uppercase tracking-[0.2em] text-[10px] font-bold">Information</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6">Patient Inquiries</h2>
        <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
          Everything you need to know about our treatments and procedures. Digital standards for modern dentistry.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border-b border-white/5 overflow-hidden transition-all duration-500 ${activeIndex === index ? 'bg-white/[0.03] px-8 rounded-lg' : 'px-2'}`}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-8 text-left group"
            >
              <span className="text-lg md:text-2xl font-serif text-white/80 group-hover:text-gold transition-colors pr-8 font-light">
                {faq.question}
              </span>
              <div className="text-gold shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-white/40 leading-relaxed font-light pb-8 text-[15px]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
