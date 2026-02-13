import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, Heart, IndianRupee } from "lucide-react";

const reasons = [
  { icon: Award, title: "Certified Professionals", desc: "Licensed and internationally trained beauty experts" },
  { icon: ShieldCheck, title: "Premium Brands", desc: "We use only top-tier cosmetic products" },
  { icon: Leaf, title: "Hygienic Environment", desc: "Sanitized tools and relaxing ambiance" },
  { icon: Heart, title: "Personalized Care", desc: "Custom skin analysis and treatments" },
  { icon: IndianRupee, title: "Affordable Luxury", desc: "Premium services at competitive prices" },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-pink-900 text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-pink-300 animate-float"
          style={{
            width: `${100 + i * 60}px`,
            height: `${100 + i * 60}px`,
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-pink-300 text-sm tracking-[0.2em] uppercase font-medium">Our Promise</span>
        <h2 className="text-4xl sm:text-5xl font-light mt-3">
          Why Choose <span className="font-semibold">Us</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card !bg-white/10 !border-white/20 rounded-2xl p-6 text-center hover:!bg-white/20 transition-colors"
          >
            <Icon className="w-8 h-8 mx-auto mb-3 text-pink-300" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-pink-200 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
