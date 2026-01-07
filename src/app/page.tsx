"use client";

import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Menu } from "@/components/Menu";
import { Sidebar } from "@/components/Sidebar";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-accent-brown/20 selection:text-accent-brown overflow-x-hidden bg-background">
      <Experience />
      <Sidebar />
      
      <div className="lg:pl-64 min-h-screen flex flex-col">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <Hero />
            <Events />
            <Menu />
            <AboutUs />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
