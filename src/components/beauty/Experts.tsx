import { motion } from "framer-motion";
import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";
import expert3 from "@/assets/expert-3.jpg";

const experts = [
  {
    name: "Sneha Menon",
    role: "Senior Makeup Artist",
    exp: "12+ Years",
    spec: "Bridal & HD Makeup",
    cert: "International Makeup Diploma",
    image: expert1,
    emoji: "👰",
  },
  {
    name: "Kavya Nair",
    role: "Skin Care Specialist",
    exp: "8+ Years",
    spec: "Advanced Facials & Skin Treatments",
    cert: null,
    image: expert2,
    emoji: "💆",
  },
  {
    name: "Anjali Verma",
    role: "Hair Stylist",
    exp: "6+ Years",
    spec: "Hair Styling & Treatments",
    cert: null,
    image: expert3,
    emoji: "💇",
  },
];

const Experts = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Meet The Team</span>
        <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
          Our Beauty <span className="font-semibold text-gradient">Experts</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {experts.map((expert, i) => (
          <motion.div
            key={expert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-2xl">{expert.emoji}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2">{expert.name}</h3>
              <p className="text-primary font-medium text-sm">{expert.role}</p>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Experience: {expert.exp}</p>
                <p>Specialization: {expert.spec}</p>
                {expert.cert && <p className="text-primary/80 text-xs">{expert.cert}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experts;
