import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, Play, ChevronRight, Images } from "lucide-react";
import bridalImg from "@/assets/bridal.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryItems = [
  { id: 1, src: bridalImg, category: "bridal", title: "Bridal Makeup" },
  { id: 2, src: salonImg, category: "salon", title: "Our Salon" },
  { id: 3, src: heroBg, category: "makeup", title: "Makeup Station" },
  { id: 4, src: bridalImg, category: "bridal", title: "Reception Look" },
  { id: 5, src: salonImg, category: "skincare", title: "Facial Room" },
  { id: 6, src: heroBg, category: "hair", title: "Hair Styling" },
  { id: 7, src: bridalImg, category: "bridal", title: "Engagement Look" },
  { id: 8, src: salonImg, category: "nails", title: "Nail Art" },
  { id: 9, src: heroBg, category: "video", title: "Salon Tour", isVideo: true },
];

const filters = ["all", "bridal", "makeup", "skincare", "hair", "nails", "video"];

type ShowcaseState = {
  category: string;
  images: typeof galleryItems;
  currentIndex: number;
  phase: "slideshow" | "grid";
};

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showcase, setShowcase] = useState<ShowcaseState | null>(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  // Auto-advance slideshow
  useEffect(() => {
    if (!showcase || showcase.phase !== "slideshow") return;
    if (showcase.currentIndex >= Math.min(showcase.images.length, 3) - 1) return;

    const timer = setTimeout(() => {
      setShowcase((prev) =>
        prev ? { ...prev, currentIndex: prev.currentIndex + 1 } : null
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, [showcase]);

  const handleCategoryClick = useCallback((cat: string) => {
    if (cat === "all") {
      setFilter("all");
      setShowcase(null);
      return;
    }

    const catImages = galleryItems.filter((g) => g.category === cat);
    if (catImages.length === 0) {
      setFilter(cat);
      return;
    }

    setShowcase({
      category: cat,
      images: catImages,
      currentIndex: 0,
      phase: "slideshow",
    });
  }, []);

  const handleViewCollection = useCallback(() => {
    if (!showcase) return;
    setFilter(showcase.category);
    setShowcase(null);
  }, [showcase]);

  const showcaseTopImages = showcase ? showcase.images.slice(0, 3) : [];
  const isLastSlide = showcase ? showcase.currentIndex >= Math.min(showcaseTopImages.length, 3) - 1 : false;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
            Gallery & <span className="font-semibold text-gradient">Videos</span>
          </h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleCategoryClick(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === f && !showcase
                  ? "gradient-hero text-primary-foreground shadow-pink"
                  : "bg-card text-muted-foreground shadow-card hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Normal Grid */}
        {!showcase && (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setLightbox(item.id)}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-card"
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <span className="text-primary-foreground font-medium">{item.title}</span>
                  </div>
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-foreground/80 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary fill-primary" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Category Showcase */}
      <AnimatePresence>
        {showcase && showcase.phase === "slideshow" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={() => setShowcase(null)}
              className="absolute top-6 right-6 z-10 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
            >
              <span className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase font-medium">
                {showcase.category}
              </span>
            </motion.div>

            {/* Slide Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {showcaseTopImages.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === showcase.currentIndex
                      ? "w-8 bg-primary"
                      : i < showcase.currentIndex
                        ? "w-4 bg-primary/40"
                        : "w-4 bg-primary-foreground/20"
                  }`}
                />
              ))}
            </div>

            {/* Images sliding left to right */}
            <AnimatePresence mode="wait">
              <motion.div
                key={showcase.currentIndex}
                initial={{ opacity: 0, x: 300, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -300, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full h-full flex items-center justify-center p-8 sm:p-16"
              >
                <img
                  src={showcaseTopImages[showcase.currentIndex]?.src}
                  alt={showcaseTopImages[showcase.currentIndex]?.title}
                  className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl"
                />

                {/* Title overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 text-center"
                >
                  <h3 className="text-primary-foreground text-xl sm:text-2xl font-light">
                    {showcaseTopImages[showcase.currentIndex]?.title}
                  </h3>
                </motion.div>

                {/* View Collection button on last slide */}
                {isLastSlide && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleViewCollection}
                    className="absolute bottom-36 sm:bottom-40 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-pink hover:shadow-hover transition-all hover:scale-105"
                  >
                    <Images className="w-4 h-4" />
                    View Collection
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={galleryItems.find((g) => g.id === lightbox)?.src}
              alt=""
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
