"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 border-b border-border bg-background">
      <Link href="/" className="font-serif text-2xl tracking-tight hover:opacity-70 transition-opacity">
        The Book Cafe
      </Link>
      
            <div className="flex items-center gap-8">
                <Link 
                  href="/book-a-table" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-paper-tone rounded-full hover:bg-accent-brown transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <span className="text-base font-medium tracking-wide">Book a Table</span>
                  <Mail className="w-4 h-4 opacity-90 group-hover:opacity-100 transition-opacity" />
                </Link>
            </div>
    </header>
  );
}
