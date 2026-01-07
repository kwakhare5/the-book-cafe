"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-paper-tone relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: The "Archive" Image Stack */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px]"
            >
            {/* Vintage Photo 1 */}
            <div className="absolute top-0 left-0 w-3/4 h-2/3 rotate-[-3deg] z-20 shadow-xl border-[12px] border-white ring-1 ring-charcoal/5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a5729aa5-ce04-42b8-b287-9b74d93ac720/628623_662cf508240f4e13b4bd0dcdf54ef3cb-mv2-1767777729052.avif"
                alt="Vintage Cafe"
                fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 font-handwriting text-xl text-charcoal/40">est. 2000</div>
              </div>

              {/* Vintage Photo 2 */}
              <div className="absolute bottom-0 right-0 w-3/4 h-2/3 rotate-[2deg] z-10 shadow-lg border-[12px] border-white ring-1 ring-charcoal/5">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a5729aa5-ce04-42b8-b287-9b74d93ac720/628623_f085fe68d14443d291faa914c2e39c06-mv2-1767777729056.avif"
                  alt="Coffee Pouring"
                  fill
                  className="object-cover sepia-[0.3] grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 right-4 font-handwriting text-xl text-charcoal/40">the craft</div>
              </div>


            {/* Ink Blot Decorative Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2B2B2B" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84,13.9,77.5,27.8,68.9,40.1C60.3,52.4,49.6,63.1,36.7,70.5C23.8,77.9,8.7,82, -5.9,80.3C-20.5,78.6,-34.6,71.1,-46.8,61.4C-59,51.7,-69.3,39.8,-75.4,26.1C-81.5,12.4,-83.4,-3.1,-79.8,-17.4C-76.2,-31.7,-67.1,-44.8,-55.1,-52.4C-43.1,-60,-28.2,-62.1,-14.8,-69.3C-1.4,-76.5,11.3,-88.8,26.3,-90.6C41.3,-92.4,58.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: The "Journal Entry" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="inline-block px-4 py-1 mb-6 border border-charcoal/10 rounded-full text-sm font-medium tracking-widest uppercase text-amber">
              Our Story
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-serif text-charcoal leading-tight mb-8">
              A Café with <span className="italic">Soul, Stories</span> & Second Living Room Vibes
            </h2>

            <div className="space-y-6 text-base text-brown-grey leading-relaxed font-sans">
              <p>
                The Book Cafe began as a quiet corner inside MPH Bookshop on Stamford Road before finding its own home at Martin Road in September 2000. What started as a haven for book lovers has grown into a cozy hideaway near Robertson Quay — a place where time slows down and familiar faces feel like family.
              </p>
              
              <p>
                Today, we&apos;re proud to be a family-owned café that has stood the test of time. For many, our space has become a second living room — a place to browse books and magazines, settle into comfy leather sofas, enjoy familiar comfort food, and sip on coffee, tea, or our house-made thirst quenchers.
              </p>

              <div className="pt-2">
                <p className="font-serif font-medium text-charcoal mb-3">Our core values:</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">☕</span>
                    <span>Graciousness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🤝</span>
                    <span>Co-ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">❤️</span>
                    <span>Love</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌱</span>
                    <span>Friendship</span>
                  </div>
                </div>
              </div>

              <p>
                These guide everything we do, from how we serve you to how we grow together. We&apos;d love to welcome you in, and if you feel at home, bring your friends and family along too — our tables are always better when shared.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-charcoal/5 flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-serif text-xl text-charcoal italic">The Book Cafe Family</div>
                <div className="text-sm text-amber font-medium uppercase tracking-widest">Est. 2000</div>
              </div>
            </div>

            {/* Hand-drawn underline effect */}
            <div className="absolute -bottom-10 right-0 w-32 h-12 opacity-20 rotate-[-10deg]">
              <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,40 Q50,10 90,40 T170,40" fill="none" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-coffee/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-64 h-64 border border-charcoal/5 rounded-full rotate-45 pointer-events-none" />
    </section>
  );
};
