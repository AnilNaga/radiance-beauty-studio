import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    id: "bridal",
    label: "👰 Bridal Makeup",
    services: [
      { name: "HD Bridal Makeup", price: "₹12,000" },
      { name: "Airbrush Bridal Makeup", price: "₹18,000" },
      { name: "Engagement Makeup", price: "₹6,000" },
      { name: "Reception Makeup", price: "₹8,000" },
    ],
  },
  {
    id: "skin",
    label: "💆 Skin Care",
    services: [
      { name: "Basic Facial", price: "₹800" },
      { name: "Gold Facial", price: "₹1,500" },
      { name: "Diamond Facial", price: "₹2,500" },
      { name: "Anti-Aging Treatment", price: "₹3,500" },
      { name: "Acne Treatment", price: "₹2,000" },
    ],
  },
  {
    id: "hair",
    label: "💇 Hair Services",
    services: [
      { name: "Haircut", price: "₹700" },
      { name: "Hair Spa", price: "₹1,200" },
      { name: "Hair Smoothening", price: "₹5,000" },
      { name: "Keratin Treatment", price: "₹6,000" },
    ],
  },
  {
    id: "nails",
    label: "💅 Nail & Grooming",
    services: [
      { name: "Manicure", price: "₹600" },
      { name: "Pedicure", price: "₹700" },
      { name: "Gel Nail Extensions", price: "₹2,000" },
      { name: "Waxing (Full Arms)", price: "₹500" },
      { name: "Full Body Waxing", price: "₹2,500" },
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState("bridal");

  return (
    <section id="services" className="py-24 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
            Services & <span className="font-semibold text-gradient">Pricing</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? "gradient-hero text-primary-foreground shadow-pink"
                  : "bg-card text-muted-foreground hover:text-foreground shadow-card"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service List */}
        <AnimatePresence mode="wait">
          {categories
            .filter((c) => c.id === active)
            .map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                {cat.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center justify-between py-5 border-b border-border last:border-none group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-foreground text-lg">{service.name}</span>
                    </div>
                    <span className="text-primary font-semibold text-lg">{service.price}</span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
