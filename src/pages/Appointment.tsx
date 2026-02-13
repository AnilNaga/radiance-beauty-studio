import { motion } from "framer-motion";
import { CalendarCheck, Check } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "HD Bridal Makeup",
  "Airbrush Bridal Makeup",
  "Basic Facial",
  "Gold Facial",
  "Diamond Facial",
  "Haircut",
  "Hair Spa",
  "Hair Smoothening",
  "Manicure",
  "Pedicure",
  "Gel Nail Extensions",
  "Full Body Waxing",
];

const AppointmentPage = () => {
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <CalendarCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-light text-foreground">
            Book <span className="font-semibold text-gradient">Appointment</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Schedule your visit and enjoy a premium beauty experience.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input type="text" placeholder="Your Name" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <input type="tel" placeholder="Phone Number" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <input type="email" placeholder="Email Address" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <select required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option value="">Select Service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="time" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <textarea placeholder="Additional Notes (optional)" rows={3} className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
          <button
            type="submit"
            className="w-full gradient-hero text-primary-foreground py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-pink hover:shadow-hover transition-all hover:scale-[1.02]"
          >
            {booked ? <><Check className="w-5 h-5" /> Appointment Booked!</> : "Confirm Booking"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default AppointmentPage;
