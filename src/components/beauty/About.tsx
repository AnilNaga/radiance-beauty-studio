import { motion } from "framer-motion";
import { Award, Heart, Shield } from "lucide-react";
import salonImg from "@/assets/salon-interior.jpg";

const features = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Heart, label: "Premium Products" },
  { icon: Shield, label: "100% Hygienic" },
];

const About = () => (
  <section id="about" className="py-24 gradient-soft">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <img
              src={salonImg}
              alt="Our Beauty Studio"
              className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-hero opacity-20 blur-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Our Story</span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3 mb-6">
            About Our <span className="font-semibold text-gradient">Beauty Studio</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            At Radiance Beauty Parlour, we believe beauty is personal. Our certified beauty experts provide customized treatments using premium products and modern techniques to help you look and feel your absolute best.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With over 10+ years of experience, we specialize in bridal makeovers, skincare treatments, hair services, and complete beauty transformations. We focus on hygiene, comfort, and customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-6">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-card rounded-2xl px-5 py-3 shadow-card">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
