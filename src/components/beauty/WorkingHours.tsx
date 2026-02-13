import { motion } from "framer-motion";
import { Clock, CalendarCheck, Sparkles, UserCheck } from "lucide-react";

const steps = [
  { icon: Sparkles, label: "Choose Service", step: "01" },
  { icon: CalendarCheck, label: "Select Date & Time", step: "02" },
  { icon: UserCheck, label: "Confirm Appointment", step: "03" },
  { icon: Clock, label: "Visit & Enjoy", step: "04" },
];

const WorkingHours = () => (
  <section className="py-24 gradient-soft">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Schedule</span>
          <h2 className="text-4xl font-light text-foreground mt-3 mb-8">
            Working <span className="font-semibold text-gradient">Hours</span>
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Monday – Saturday</span>
              </div>
              <span className="text-primary font-semibold">10:00 AM – 8:00 PM</span>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Sunday</span>
              </div>
              <span className="text-primary font-semibold">11:00 AM – 6:00 PM</span>
            </div>
            <p className="text-muted-foreground text-sm italic mt-4">* Advance Booking Recommended</p>
          </div>
        </motion.div>

        {/* Booking Steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Easy Process</span>
          <h2 className="text-4xl font-light text-foreground mt-3 mb-8">
            How to <span className="font-semibold text-gradient">Book</span>
          </h2>
          <div className="space-y-4">
            {steps.map(({ icon: Icon, label, step }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-4 group hover:shadow-hover transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {step}
                </div>
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WorkingHours;
