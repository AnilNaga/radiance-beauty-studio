import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Radiance Beauty Parlour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-900/60 to-pink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-pink-300/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-pink-300" />
            <span className="text-pink-200 text-sm tracking-[0.2em] uppercase font-medium">
              Premium Beauty Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-foreground leading-[0.95] mb-6"
          >
            Enhance Your{" "}
            <span className="font-semibold italic bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-pink-100/80 max-w-xl mb-4 leading-relaxed"
          >
            Professional beauty care, flawless makeup, radiant skin treatments, and luxurious pampering — all in one place.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-pink-300 text-sm italic tracking-wide mb-10"
          >
            Glow with Confidence. Shine with Elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/appointment"
              className="group gradient-hero px-8 py-4 rounded-full text-primary-foreground font-medium text-lg flex items-center gap-2 shadow-pink hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border-2 border-pink-300/40 text-primary-foreground font-medium text-lg hover:bg-pink-300/10 transition-all duration-300 hover:border-pink-300/70"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-pink-300/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-pink-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
