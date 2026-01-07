"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="px-12 py-20 max-w-7xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-24"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif italic text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight mb-8 text-foreground"
        >
          Welcome
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-2xl md:text-3xl text-primary/90 mb-12 max-w-4xl leading-relaxed"
        >
          The Book Cafe is a homely space with chill café vibes just minutes from Robertson Quay.
          <span className="block mt-4 text-xl text-muted-foreground font-normal">
            Whether you're looking for a slow brunch, a casual lunch, a relaxed dinner, or planning a group event — we’ve got a welcoming space, tasty food, and good vibes waiting.
          </span>
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-col items-start max-w-xl">
          <Button
            asChild
            variant="ghost"
            className="rounded-full px-6 py-4 text-primary/70 hover:text-primary hover:bg-primary/5 border border-primary/10 group"
          >
            <a
              href="#about"
              className="flex items-center gap-3 font-sans text-xs font-semibold tracking-wide !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line"
            >
              Our story in detail
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </Button>
        </motion.div>
      </motion.div>

        <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl mx-auto group">

          {/* Shadow and Paper Stack Effect */}
          <div className="absolute inset-0 bg-primary/5 rounded-sm translate-x-2 translate-y-2 -z-10" />
          <div className="absolute inset-0 bg-primary/10 rounded-sm translate-x-1 translate-y-1 -z-10" />

          {/* Notebook Container */}
          <div className="bg-background border border-primary/20 shadow-2xl flex h-[650px] overflow-hidden relative">
            {/* Left Page with Spiral */}
            <div className="w-1/2 border-r border-primary/10 relative bg-secondary/50 overflow-hidden">
              {/* Spiral Rings */}
              <div className="absolute right-[-8px] top-0 bottom-0 flex flex-col justify-around py-8 z-30">
                {[...Array(12)].map((_, i) =>
              <div key={i} className="w-4 h-2 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full shadow-sm" />
              )}
              </div>
              
              {/* Left Page Content */}
                <div className="p-12 h-full flex flex-col">
                  <div className="mb-12">
                    <span className="font-handwriting text-primary/60 text-xl block mb-2">Entry #001</span>
                    <h3 className="font-serif text-4xl text-primary italic">Our Philosophy</h3>
                  </div>
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <div className="h-px bg-primary/10 w-full" />
                      <p className="font-handwriting text-3xl text-primary/80 leading-relaxed">
                        "A book is a dream that you hold in your hands."
                      </p>
                      <div className="h-px bg-primary/10 w-full" />
                    </div>

                  <p className="font-sans text-muted-foreground leading-loose">
                    We believe in the slow morning, the long conversation, and the perfect brew. 
                    Every cup we serve is a chapter in our shared story at Robertson Quay.
                  </p>
                  <div className="pt-8">
                    <div className="w-32 h-32 border border-primary/10 rounded-lg flex items-center justify-center bg-primary/5 rotate-3">
                      <span className="text-4xl">☕</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Page */}
            <div className="w-1/2 bg-secondary relative overflow-hidden">
              {/* Page Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(var(--color-coffee) 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }} />
              
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="px-12 py-8 border-b border-primary/5 flex items-center justify-between">
                  <div className="font-serif italic font-bold text-primary/60 text-sm">© The Book Cafe Since 2000</div>
                  <div className="w-2 h-2 rounded-full bg-primary/20" />
                </div>

                {/* Scrolling Content */}
                <div className="flex-1 overflow-hidden relative">
                  <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                  className="p-12 space-y-16">

                    {[1, 2].map((i) =>
                  <div key={i} className="space-y-12">
                        <div className="space-y-4">
                          <h4 className="font-serif text-2xl text-primary">🌞 Morning Routine</h4>
                          <p className="font-sans text-muted-foreground leading-relaxed">
                            Start with hearty brunch classics and specialty coffee from Allpress Espresso. 
                            Our cozy corners feel like a second home.
                          </p>
                            <div className="bg-accent-brown/10 p-4 rounded-lg border-l-4 border-accent-brown/30 italic text-sm text-accent-brown/90">
                              Fan favorites: Breakfast Steak & Eggs, Pancakes, Eggs Benedict
                            </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-serif text-2xl text-primary">☀️ Afternoon Fuel</h4>
                          <p className="font-sans text-muted-foreground leading-relaxed">
                            From crisp salads to warm rice bowls and pasta, our weekday lunch menu is made for fueling up.
                          </p>
                            <div className="bg-olive/10 p-4 rounded-lg border-l-4 border-olive/30 italic text-sm text-olive/90">
                              Bestsellers: Chicken Caesar Salad, Olive Fried Rice
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-serif text-2xl text-primary">🌙 Evening Wind-down</h4>
                            <p className="font-sans text-muted-foreground leading-relaxed">
                              Unwind in the evening with relaxed dinner vibes, generous portions, and group-friendly plates.
                            </p>
                            <div className="bg-amber/10 p-4 rounded-lg border-l-4 border-amber/30 italic text-sm text-amber/90">
                              Wine and dine with our signature dinner platters.
                            </div>
                        </div>
                      </div>
                  )}
                  </motion.div>
                  {/* Gradients */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary to-transparent z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-secondary to-transparent z-10" />
                </div>
              </div>
            </div>
          </div>

        {/* Floating Decoration */}
        <div className="absolute -top-12 -right-8 z-30 pointer-events-none">
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl drop-shadow-xl filter sepia-[0.3]">

            🔖
          </motion.div>
        </div>
        <div className="absolute -bottom-8 -left-8 z-30 pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl drop-shadow-xl">

            🖊️
          </motion.div>
        </div>
      </motion.div>
    </section>);

}