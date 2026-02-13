import { motion } from "framer-motion";
import { Droplets, Sun, Sparkles, BookOpen } from "lucide-react";

const tips = [
  { icon: Droplets, title: "Stay Hydrated", desc: "Drink plenty of water for glowing skin" },
  { icon: Sparkles, title: "Avoid Heavy Makeup", desc: "Wait 24 hours after facial treatments" },
  { icon: Sun, title: "Use Sunscreen", desc: "Apply SPF 30+ sunscreen daily" },
  { icon: BookOpen, title: "Follow Routine", desc: "Stick to your recommended skincare routine" },
];

const AftercareTips = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Beauty Tips</span>
        <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
          Aftercare <span className="font-semibold text-gradient">Tips</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {tips.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-secondary rounded-2xl p-6 text-center shadow-card hover:shadow-hover transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl gradient-hero mx-auto mb-4 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AftercareTips;
