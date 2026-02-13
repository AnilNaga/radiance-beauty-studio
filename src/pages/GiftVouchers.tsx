import { motion } from "framer-motion";
import { useState } from "react";
import { Gift, Send, Check } from "lucide-react";

const amounts = [
  { value: 1000, label: "₹1,000" },
  { value: 2500, label: "₹2,500", popular: true },
  { value: 5000, label: "₹5,000" },
  { value: 10000, label: "₹10,000" },
];

const serviceVouchers = [
  { name: "Bridal Makeup Package", price: "₹15,000" },
  { name: "Luxury Spa Day", price: "₹8,000" },
  { name: "Hair Makeover", price: "₹6,000" },
  { name: "Complete Beauty Treatment", price: "₹12,000" },
];

const GiftVouchers = () => {
  const [tab, setTab] = useState<"amount" | "service">("amount");
  const [selected, setSelected] = useState<number | string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-light text-foreground">
            Gift <span className="font-semibold text-gradient">Vouchers</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Give the gift of beauty. Purchase a voucher for someone special.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Selection */}
          <div>
            <div className="flex gap-3 mb-8">
              {(["amount", "service"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setSelected(null); }}
                  className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all ${
                    tab === t ? "gradient-hero text-primary-foreground shadow-pink" : "bg-card text-muted-foreground shadow-card"
                  }`}
                >
                  By {t}
                </button>
              ))}
            </div>

            {tab === "amount" ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {amounts.map((a) => (
                    <button
                      key={a.value}
                      onClick={() => setSelected(a.value)}
                      className={`relative p-5 rounded-2xl text-center font-semibold text-lg transition-all ${
                        selected === a.value
                          ? "gradient-hero text-primary-foreground shadow-pink"
                          : "bg-card text-foreground shadow-card hover:shadow-hover"
                      }`}
                    >
                      {a.label}
                      {a.popular && (
                        <span className="absolute -top-2 right-3 bg-gold text-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelected("custom"); }}
                    className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {serviceVouchers.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSelected(s.name)}
                    className={`w-full p-5 rounded-2xl text-left flex justify-between items-center transition-all ${
                      selected === s.name
                        ? "gradient-hero text-primary-foreground shadow-pink"
                        : "bg-card shadow-card hover:shadow-hover"
                    }`}
                  >
                    <span className="font-medium">{s.name}</span>
                    <span className="font-bold">{s.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Delivery Details</h3>
            <input type="text" placeholder="Recipient Name" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="email" placeholder="Recipient Email" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="text" placeholder="Your Name" required className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <textarea placeholder="Personal Message (optional)" rows={3} className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <input type="date" className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <button
              type="submit"
              disabled={!selected}
              className="w-full gradient-hero text-primary-foreground py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-pink hover:shadow-hover transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {sent ? <><Check className="w-5 h-5" /> Voucher Sent!</> : <><Send className="w-5 h-5" /> Purchase Voucher</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiftVouchers;
