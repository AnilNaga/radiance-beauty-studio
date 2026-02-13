import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
            Contact <span className="font-semibold text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Location", value: "Kochi, Kerala" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "info@radiancebeauty.com" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-secondary rounded-2xl p-5">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-hero text-primary-foreground py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 shadow-pink hover:shadow-hover transition-all hover:scale-[1.02]"
            >
              {sent ? "Message Sent! ✓" : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
