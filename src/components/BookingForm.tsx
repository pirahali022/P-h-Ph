import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const BookingForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-lg text-center"
      >
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-serif font-light mb-4 text-white">Request Received!</h3>
        <p className="text-white/50 mb-8 leading-relaxed font-light">
          Shukriya! Your request has been sent. Our team will contact you within 24 hours to confirm your appointment.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:underline"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-lg space-y-8 relative">
      <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gold/40" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 block ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Ali Ahmed"
            className="w-full bg-black/40 border border-white/10 px-5 py-3 text-xs focus:outline-none focus:border-gold transition-all text-white placeholder:text-white/20"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 block ml-1">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="03xx-xxxxxxx"
            className="w-full bg-black/40 border border-white/10 px-5 py-3 text-xs focus:outline-none focus:border-gold transition-all text-white placeholder:text-white/20"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 block ml-1">Treatment Required</label>
        <select 
          required
          className="w-full bg-black/40 border border-white/10 px-5 py-3 text-xs focus:outline-none focus:border-gold transition-all text-white appearance-none"
        >
          <option value="" className="bg-luxury-black">Select Treatment</option>
          <option value="rct" className="bg-luxury-black">Root Canal Treatment (RCT)</option>
          <option value="whitening" className="bg-luxury-black">Teeth Whitening</option>
          <option value="cosmetic" className="bg-luxury-black">Cosmetic Dentistry</option>
          <option value="aligners" className="bg-luxury-black">Invisible Aligners</option>
          <option value="braces" className="bg-luxury-black">Braces / Orthodontics</option>
          <option value="filler" className="bg-luxury-black">Facial Aesthetic Treatment</option>
          <option value="other" className="bg-luxury-black">Other / Consultation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 block ml-1">Preferred Date</label>
          <input 
            required
            type="date" 
            className="w-full bg-black/40 border border-white/10 px-5 py-3 text-xs focus:outline-none focus:border-gold transition-all text-white inverted-scheme"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 block ml-1">Preferred Time</label>
          <select 
            required
            className="w-full bg-black/40 border border-white/10 px-5 py-3 text-xs focus:outline-none focus:border-gold transition-all text-white appearance-none"
          >
            <option value="morning" className="bg-luxury-black">Morning (10:00 AM - 02:00 PM)</option>
            <option value="evening" className="bg-luxury-black">Evening (05:00 PM - 09:00 PM)</option>
          </select>
        </div>
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-black py-4 text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition-all transform active:scale-95 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mx-auto" />
        ) : (
          <>
             Request Appointment
          </>
        )}
      </button>

      <p className="text-[9px] text-white/30 text-center uppercase tracking-widest leading-relaxed">
        Hamari medical team jald hi apse rabta karegi appointment confirm karne ke liye.
      </p>
    </form>
  );
};
