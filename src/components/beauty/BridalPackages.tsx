import { motion } from "framer-motion";
import { Check, Star, Crown, Gem } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Silver",
    price: "₹15,000",
    icon: Star,
    features: ["HD Bridal Makeup", "Hair Styling", "Saree Draping", "Basic Facial"],
    popular: false,
  },
  {
    name: "Gold",
    price: "₹25,000",
    icon: Gem,
    features: ["Airbrush Makeup", "Advanced Hair Styling", "Premium Facial", "Pre-Bridal Skin Care"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹40,000",
    icon: Crown,
    features: [
      "Airbrush Makeup",
      "Luxury Hair Styling",
      "3 Pre-Bridal Sessions",
      "Full Body Polishing",
      "Complimentary Nail Service",
    ],
    popular: false,
  },
];

const BridalPackages = () => (
  <section id="packages" className="py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Exclusive Offers</span>
        <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
          Bridal <span className="font-semibold text-gradient">Packages</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-8 transition-shadow duration-300 ${
              pkg.popular
                ? "gradient-hero text-primary-foreground shadow-pink"
                : "bg-card shadow-card hover:shadow-hover"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card text-primary text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </div>
            )}
            <pkg.icon className={`w-8 h-8 mb-4 ${pkg.popular ? "text-pink-200" : "text-primary"}`} />
            <h3 className="text-2xl font-semibold mb-1">{pkg.name} Bridal Package</h3>
            <div className="text-3xl font-bold mb-6">{pkg.price}</div>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-pink-200" : "text-primary"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/appointment"
              className={`block text-center py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "bg-card text-primary hover:shadow-lg"
                  : "gradient-hero text-primary-foreground shadow-pink"
              }`}
            >
              Book Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BridalPackages;
