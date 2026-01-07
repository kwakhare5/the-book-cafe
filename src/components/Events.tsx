"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Events() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    },
  };

  return (
    <section id="events" className="py-32 px-6 lg:px-12 bg-paper-tone relative overflow-hidden bg-grain">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column - Main Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span 
                  variants={itemVariants}
                  className="text-xs font-bold tracking-[0.3em] uppercase text-accent-brown block"
                >
                  Event Venue
                </motion.span>
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight"
                >
                  Cozy Vibes & <br />
                  <motion.span 
                    initial={{ backgroundSize: "0% 100%" }}
                    whileInView={{ backgroundSize: "100% 100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="italic bg-gradient-to-r from-accent-brown/20 to-accent-brown/20 bg-no-repeat bg-[length:0%_30%] bg-[position:0_85%]"
                  >
                    Full AV Setup.
                  </motion.span>
                </motion.h2>
              </div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-6 text-lg text-brown-grey leading-relaxed"
            >
              <p>
                Looking for a casual, charming space to host your next gathering? The Book Cafe is a cozy café and event venue just minutes from Robertson Quay — perfect for birthdays, family reunions, team dinners, workshops, private screenings, and more.
              </p>
              <p>
                We offer flexible seating, a warm and relaxed atmosphere, and the kind of friendly service you’ll only find in a long-standing, family-run space.
              </p>
            </motion.div>

              <motion.div variants={itemVariants} className="pt-8">
                      <motion.a 
                        href="#contact" 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-paper-tone rounded-full hover:bg-accent-brown transition-all duration-300 group shadow-sm hover:shadow-md"
                        >
                          <span className="text-base font-medium tracking-wide">Plan Your Event</span>
                        <Mail className="w-4 h-4 opacity-90 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
              </motion.div>
          </div>

          {/* Right Column - Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl space-y-4 shadow-sm"
            >
              <div className="text-3xl">📝</div>
              <h3 className="font-serif font-medium text-xl text-charcoal">Popular Events</h3>
              <ul className="text-sm text-brown-grey space-y-2">
                <li>• Birthday parties (adults & kids!)</li>
                <li>• Family gatherings & celebrations</li>
                <li>• Corporate offsites & dinners</li>
                <li>• Workshops & book clubs</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl space-y-4 shadow-sm"
            >
              <div className="text-3xl">🪑</div>
              <h3 className="font-serif font-medium text-xl text-charcoal">Venue Capacity</h3>
              <p className="text-sm text-brown-grey leading-relaxed">
                Up to 80 guests (indoor & outdoor combined). Suitable for both intimate groups and medium-sized events.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl space-y-4 sm:col-span-2 shadow-sm"
            >
              <div className="text-3xl">🎤</div>
              <h3 className="font-serif font-medium text-xl text-charcoal">AV Equipment</h3>
              <p className="text-sm text-brown-grey leading-relaxed">
                Projector & screen, Microphones, Speakers / PA system available for your presentations or entertainment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-coffee/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber/5 rounded-full blur-3xl -z-10" 
      />
    </section>
  );
}
