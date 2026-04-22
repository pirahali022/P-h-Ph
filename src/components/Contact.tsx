import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="gold-text uppercase tracking-[0.2em] text-[10px] font-bold">Connect</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mt-4 mb-6 italic">The Location</h2>
            <p className="text-white/40 font-light leading-relaxed max-w-lg">
              Elite Dental is situated in Khairpur Mir's (Sindh), offering a serene and hygienic space for your transformation. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-2 border-l border-gold/40 pl-6">
              <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Emergency Line</h4>
              <p className="text-2xl font-serif text-white">0332-3734789</p>
              <p className="text-[10px] uppercase tracking-widest text-gold opacity-60">24/7 Response for Trauma</p>
            </div>

            <div className="space-y-2 border-l border-white/10 pl-6">
              <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Clinic Timings</h4>
              <p className="text-lg font-serif">10am-2pm | 5pm-9pm</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 italic">Mon-Sat (Sunday Appt Available)</p>
            </div>

            <div className="space-y-2 border-l border-white/10 pl-6 col-span-1 md:col-span-2">
              <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Location Details</h4>
              <p className="text-xl font-serif">Khairpur Mir's, Sindh, Pakistan</p>
              <a 
                href="https://maps.app.goo.gl/fF17vMosPcqma1mf8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:underline mt-4 inline-block"
              >
                Inquiry & Directions
              </a>
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="h-[400px] lg:h-auto bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl shadow-luxury-black/5"
        >
          {/* Mock Map Placeholder as requested */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14138.868779607593!2d68.4631623!3d27.5218765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393663a0937c8861%3A0xe54e3d5483ac939!2sElite%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1713795000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125"
          />
        </motion.div>
      </div>
    </div>
  );
};
