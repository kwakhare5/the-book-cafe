"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 px-8 md:px-16 bg-charcoal text-warm-beige relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-brown/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-brown/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="space-y-3">
                  <span className="font-sans text-[14px] tracking-[0.4em] uppercase text-accent-brown font-bold">Colophon</span>
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]">Visit our <br/><span className="italic">literary sanctuary.</span></h2>
                <div className="w-12 h-px bg-warm-beige/20 mt-4" />
              </div>

            <div className="grid gap-6">
                {[
                  { icon: MapPin, title: "Location", lines: ["Seng Kee Building, 20 Martin Road", "#01-02, Singapore 239070"] },
                  { icon: Clock, title: "Opening Hours", lines: ["Mondays: 8:30am to 5:30pm", "Tuesday to Sunday: 8:30am to 9:30pm"] },
                  { icon: Phone, title: "Contact", lines: ["+65 6339 3130", "info@thebookcafesg.com"] }
                ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="group flex items-start gap-5"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-brown/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full blur-xl" />
                    <item.icon className="w-4 h-4 text-accent-brown relative z-10 mt-1" />
                  </div>
                    <div>
                        <h4 className="font-serif text-[14px] tracking-widest uppercase text-accent-brown mb-1.5 font-bold">{item.title}</h4>
                      <p className="font-sans text-sm md:text-base text-warm-beige/80 leading-relaxed">
                      {item.lines[0]}<br />
                      <span className="text-warm-beige/80">{item.lines[1]}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

            <div className="relative">
              <div className="absolute -inset-2 border border-warm-beige/5 rounded-sm -z-10" />
              <div className="relative bg-accent-brown/[0.03] border border-warm-beige/10 p-1 overflow-hidden">
                <div className="relative z-10 h-[250px] md:h-[350px] w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817105088237!2d103.83676557585094!3d1.2912085986962383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da199c2ab6ed9b%3A0x8f27bddbf6faab1d!2sThe%20Book%20Cafe!5e0!3m2!1sen!2ssg!4v1710000000000!5m2!1sen!2ssg"
                      width="100%" 

                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-sm"
                  />
                </div>
              </div>
            </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-warm-beige/5">
          <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-2 text-center md:text-left">
            <div className="space-y-1">
              <span className="font-serif text-lg italic">The Book Cafe</span>
              <p className="font-sans text-[8px] tracking-widest uppercase text-warm-beige/30 leading-loose">
                Established at the turn of the millennium.<br/>
                A sanctuary for the curious mind.
              </p>
            </div>
            
            <div />

            <div className="md:text-right space-y-0.5">
                <p className="font-sans text-[8px] tracking-widest uppercase text-warm-beige/30 hover:text-warm-beige/60 transition-colors cursor-default">
                  © The Book Cafe Since 2000
                </p>
                <p className="font-serif italic text-[9px] text-accent-brown font-bold">Where stories brew daily.</p>
              </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
