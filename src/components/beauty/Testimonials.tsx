import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  { text: "Absolutely loved my bridal look. It was flawless and lasted all day!", name: "Meera R.", rating: 5 },
  { text: "Best facial experience in town. My skin feels amazing.", name: "Divya S.", rating: 5 },
  { text: "Very professional and clean environment. Highly recommend!", name: "Nisha P.", rating: 5 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Feedback</span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
            Client <span className="font-semibold text-gradient">Testimonials</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl sm:text-2xl text-foreground italic leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-primary font-semibold">— {testimonials[current].name}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
