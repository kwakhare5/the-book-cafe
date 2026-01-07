"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = [
    { emoji: "🍳", title: "Breakfast", desc: "All-day breakfast & healthy bowls" },
    { emoji: "🍝", title: "Mains & Asian", desc: "Pastas, rice dishes & house specialties" },
    { emoji: "🍔", title: "Lite Bites", desc: "Burgers, sandwiches & finger food" },
    { emoji: "☕", title: "Drinks & Desserts", desc: "Specialty coffee, teas & sweet treats" }
  ];

    const menuData = [
      {
        chapter: "Breakfast Highlights",
        items: [
          { name: "Eggs Blackstone", price: "$22.95", desc: "Toasted English muffin + maple bacon + grilled tomatoes + baby spinach + poached \"freedom range\" eggs with homemade hollandaise sauce + rosti potato" },
          { name: "Shibuya Grilled Cheese Sandwich", price: "$17.80", desc: "Toasted bread filled with American cheese" }
        ]
      },
      {
        chapter: "Chef’s Selection",
        items: [
          { name: "Omega Oomph!", price: "$21.65", desc: "Baked salmon with mentaiko sauce, romaine lettuce, broccoli, mixed mushroom, baked cherry tomatoes, lemon dressing served aside" },
          { name: "Salmon Noodle Soup", price: "$20.95", desc: "A comforting bowl of milky fish soup with thick vermicelli noodles and fried salmon nuggets" },
          { name: "Chicken Mango", price: "$21.00", desc: "Grilled chicken breasts + avocado + mango chutney spread + tomato + lettuce + mayonnaise + ciabatta + mesclun green salad" }
        ]
      },
      {
        chapter: "Lite Bites",
        items: [
          { name: "Wing Zings", price: "$14.00", desc: "" },
          { name: "Toasted Tortillas", price: "$19.00", desc: "" }
        ]
      },
      {
        chapter: "Specialty Sips",
        items: [
          { name: "Iced Thai Lemongrass w/ Butterfly Pea", price: "$9.00", desc: "" },
          { name: "Pandan Latte", price: "$7.50", desc: "" },
          { name: "Avocado Milkshake", price: "$8.50", desc: "" }
        ]
      },
      {
        chapter: "Sweet Endings",
        items: [
          { name: "Alice's Adventure in Wonderland", price: "$7.00", desc: "" },
          { name: "Italian Lemon & Pine Nut Pie", price: "$7.50", desc: "" }
        ]
      }
    ];

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.h2 
                  variants={itemVariants} 
                  className="text-4xl lg:text-5xl font-serif text-charcoal italic leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >🧾</motion.span> Our Menu
                </motion.h2>
              
              <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-xl lg:text-2xl font-sans text-coffee font-medium leading-snug">
                  Comfort Food, Specialty Coffee & Good Vibes — All Day
                </motion.h3>
                <motion.p variants={itemVariants} className="text-base lg:text-lg text-brown-grey leading-relaxed font-sans max-w-xl">
                  At The Book Cafe, we serve comforting food and specialty drinks for every pace of the day — from slow brunches to relaxed dinners, with hearty favorites, sweet treats, and coffees and house-made drinks to keep the good vibes going.
                </motion.p>
              </div>
            </div>

            <div className="grid gap-6 pt-2">
              {categories.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <span className="text-3xl transition-transform duration-300 transform group-hover:scale-110">
                    {item.emoji}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-sans text-base font-semibold text-charcoal group-hover:text-coffee transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-brown-grey text-sm font-sans">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
                  <a 
                    href="/menu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-[0.2em] uppercase text-coffee flex items-center gap-2 hover:gap-3 transition-all group"
                  >
                <span className="w-8 h-px bg-coffee/20 group-hover:w-12 transition-all" />
                View Full Detailed Menu
              </a>
            </motion.div>
          </motion.div>

            {/* Right Side: Menu Items */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="min-h-[600px] lg:aspect-[1/1.3] bg-paper-tone border border-soft-grey rounded-xl shadow-xl overflow-hidden relative group">
                <div className="h-full w-full bg-[#fcfaf7] flex flex-col p-6 lg:p-8">
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="mb-6 flex items-center justify-between border-b border-coffee/10 pb-4">
                      <h4 className="text-2xl font-serif text-charcoal italic">Menu 2025</h4>
                      <span className="text-[10px] font-bold tracking-widest text-coffee/40 uppercase">TBC — 01</span>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-thin scrollbar-thumb-coffee/20">
                      {menuData.map((section, idx) => (
                        <div key={idx}>
                          <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-coffee mb-4 border-l-2 border-coffee/20 pl-3">
                            {section.chapter}
                          </h5>
                          <div className="space-y-4">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex justify-between items-start gap-4">
                                <div className="space-y-0.5">
                                  <p className="text-sm font-semibold text-charcoal">{item.name}</p>
                                  <p className="text-[10px] text-brown-grey italic">{item.desc}</p>
                                </div>
                                <span className="text-sm font-medium text-coffee whitespace-nowrap">{item.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-coffee/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <a 
                            href="/menu.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            download="The-Book-Cafe-Menu.pdf"
                            className="w-full sm:w-auto px-6 py-3 bg-soft-grey/40 text-coffee border border-coffee/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-soft-grey/60 transition-all flex items-center justify-center gap-2"
                          >
                        <Download size={16} /> Download Menu PDF
                      </a>
                      <span className="text-[10px] font-medium text-brown-grey italic order-first sm:order-last">Last Updated 2025</span>
                    </div>
                  </div>
                </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-coffee/5 rounded-tl-3xl border-t border-l border-coffee/10" />
            </div>

            {/* Subtle shadow behind */}
            <div className="absolute inset-0 bg-charcoal/5 -rotate-2 -z-10 rounded-xl" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-coffee/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-olive/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
