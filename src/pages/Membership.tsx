import { motion } from "framer-motion";
import { Check, Star, Gem, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Bronze",
    price: "₹999",
    icon: Star,
    color: "from-orange-400 to-orange-600",
    features: [
      "10% discount on all services",
      "Priority booking",
      "Birthday month special",
      "Free basic facial monthly",
      "Exclusive events access",
    ],
    popular: false,
  },
  {
    name: "Silver",
    price: "₹1,999",
    icon: Gem,
    color: "from-gray-400 to-gray-500",
    features: [
      "20% discount on all services",
      "Priority & advance booking",
      "Free premium facial monthly",
      "Complimentary nail service",
      "2 guest passes/month",
      "Birthday gift hamper",
      "Free product samples",
    ],
    popular: true,
  },
  {
    name: "Gold",
    price: "₹3,999",
    icon: Crown,
    color: "from-yellow-400 to-yellow-600",
    features: [
      "30% discount on all services",
      "VIP priority booking",
      "Free luxury treatment monthly",
      "Complimentary bridal trial",
      "4 guest passes/month",
      "Annual beauty hamper",
      "Free home service once",
      "Exclusive product previews",
      "Personal beauty consultant",
    ],
    popular: false,
  },
];

const Membership = () => {
  const [joined, setJoined] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-light text-foreground">
            Membership <span className="font-semibold text-gradient">Plans</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Join our exclusive membership for premium discounts and VIP benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:shadow-hover ${
                plan.popular ? "border-primary shadow-pink" : "border-border shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                <plan.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-2 mb-6">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { setJoined(plan.name); setTimeout(() => setJoined(null), 3000); }}
                className={`w-full py-3 rounded-full font-medium transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? "gradient-hero text-primary-foreground shadow-pink"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {joined === plan.name ? "Joined! ✓" : "Join Now"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
