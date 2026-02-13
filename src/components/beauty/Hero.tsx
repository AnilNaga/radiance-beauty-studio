import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const textReveal = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

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
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Radiance Beauty Parlour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/85 via-pink-900/65 to-pink-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-pink-300/20"
          style={{ left: `${15 + i * 14}%`, top: `${25 + (i % 3) * 20}%` }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-pink-300/20 bg-pink-300/5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="text-pink-200 text-xs tracking-[0.25em] uppercase font-medium">
              Premium Beauty Experience
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-primary-foreground leading-[1] tracking-tight"
            >
              Enhance Your
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold italic leading-[1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-400 bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </motion.h1>
          </div>

          {/* Decorative line */}
          <motion.div
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/50" />
            <Star className="w-3 h-3 text-pink-300/60 fill-pink-300/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/50" />
          </motion.div>

          {/* Subtext */}
          <motion.p
            custom={4}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-pink-100/70 max-w-lg mx-auto mb-3 leading-relaxed font-light"
          >
            Professional beauty care, flawless makeup, radiant skin treatments, and luxurious pampering — all in one place.
          </motion.p>

          <motion.p
            custom={5}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-pink-300/80 text-sm italic tracking-wider mb-12"
          >
            Glow with Confidence · Shine with Elegance
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={6}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/appointment"
              className="group gradient-hero px-10 py-4 rounded-full text-primary-foreground font-medium text-base flex items-center gap-2 shadow-pink hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="px-10 py-4 rounded-full border border-pink-300/30 text-primary-foreground font-medium text-base hover:bg-pink-300/10 transition-all duration-300 hover:border-pink-300/60"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-9 rounded-full border border-pink-300/40 flex justify-center pt-2"
          >
            <div className="w-1 h-1 rounded-full bg-pink-300/80" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
