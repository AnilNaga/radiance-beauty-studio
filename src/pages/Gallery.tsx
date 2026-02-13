import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";
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

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-light text-foreground mt-3">
            Gallery & <span className="font-semibold text-gradient">Videos</span>
          </h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === f ? "gradient-hero text-primary-foreground shadow-pink" : "bg-card text-muted-foreground shadow-card hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

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
    </div>
  );
};

export default GalleryPage;
