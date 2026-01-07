"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-8 md:px-16 bg-warm-beige">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2074&auto=format&fit=crop"
            alt="The Book Cafe Reading"
            fill
            className="object-cover"
          />
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-brown">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight">
                A sanctuary <br />
                <span className="italic">for words & warmth.</span>
              </h2>
                <div className="font-sans text-lg text-brown-grey leading-relaxed space-y-6">
                    <p>
                      Since 2000, The Book Cafe has been a cornerstone of the Robertson Quay community. 
                      Designed to feel like a cozy living room, we provide a sanctuary where you can escape the hustle 
                      of the city and immerse yourself in a good book.
                    </p>
                  <p>
                    Our kitchen serves up hearty comfort food—from all-day breakfasts to gourmet sandwiches 
                    and artisanal pastas. Whether you're here for a quiet afternoon of reading or a 
                    productive work session, you'll find the perfect blend of warmth and inspiration.
                  </p>
                </div>
            <div className="pt-8">
              <blockquote className="font-serif italic text-2xl text-accent-brown/80 border-l-2 border-accent-brown/20 pl-6">
                "Where stories brew and ideas take flight."
              </blockquote>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
