"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Sidebar() {
    const links = [
      { name: "Home", href: "#home", id: "home" },
      { name: "Events", href: "#events", id: "events" },
      { name: "Menu", href: "#menu", id: "menu" },
      { name: "Story", href: "#about", id: "about" },
      { name: "Contact", href: "#contact", id: "contact" },
    ];

  const activeSection = useActiveSection(links.map((link) => link.id));

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border flex flex-col justify-between py-12 px-8 hidden lg:flex bg-background z-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <Coffee size={24} />
        </div>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-2"
      >
        {links.map((link, i) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2.5 font-sans text-sm tracking-widest uppercase transition-colors flex items-center gap-3 group ${
                isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <motion.span
                animate={{ scaleX: isActive ? 1 : 0 }}
                className="w-4 h-[1px] bg-primary origin-left transition-transform"
              />
              {link.name}
            </Link>
          );
        })}
      </motion.nav>

      <div className="text-[10px] tracking-widest uppercase text-muted-foreground/50">
        © 2000 The Book Cafe
      </div>
    </aside>
  );
}
