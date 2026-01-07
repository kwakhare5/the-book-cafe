"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Experience } from "@/components/Experience";
import { ChevronLeft, Calendar, Users, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function BookTablePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: parseInt(formData.guests),
            notes: formData.requests,
          },
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Reservation request sent!");
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen selection:bg-accent-brown/20 selection:text-accent-brown overflow-x-hidden bg-background/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-paper-tone/30 -z-10" />
      <Experience />
      <Sidebar />
      
      <div className="lg:pl-64 min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Hero Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-serif italic text-charcoal">Book a Table</h1>
                  <p className="text-lg text-brown-grey max-w-xl leading-relaxed">
                    Reserve a cozy spot for coffee, food, and unhurried moments. 
                    We'll keep a seat warm for you.
                  </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Form Section (Left) */}
                  <motion.div 
                    variants={itemVariants}
                    className="lg:col-span-2 bg-paper-tone/80 backdrop-blur-md border border-charcoal/5 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden bg-grain"
                  >
                    <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                      <div className="grid md:grid-cols-2 gap-12">
                        {/* Guest Details */}
                        <div className="space-y-8">
                          <h3 className="font-serif text-2xl text-charcoal flex items-center gap-3">
                            <span className="text-accent-brown">01.</span> Guest Details
                          </h3>
                          
                          <div className="space-y-6">
                            <div>
                              <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Full Name</label>
                              <input 
                                required
                                type="text" 
                                placeholder="Your Name"
                                className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Email Address</label>
                              <input 
                                required
                                type="email" 
                                placeholder="hello@example.com"
                                className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                            <div>
                              <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Phone Number</label>
                              <input 
                                required
                                type="tel" 
                                placeholder="+65 1234 5678"
                                className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Reservation Details */}
                        <div className="space-y-8">
                          <h3 className="font-serif text-2xl text-charcoal flex items-center gap-3">
                            <span className="text-accent-brown">02.</span> Reservation
                          </h3>
                          
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Date</label>
                                <div className="relative">
                                  <Calendar className="absolute right-2 top-3 w-4 h-4 text-coffee/40 pointer-events-none z-20" />
                                  <input 
                                    required
                                    type="date" 
                                    className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                                    value={formData.date}
                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Time</label>
                                <div className="relative">
                                  <Clock className="absolute right-2 top-3 w-4 h-4 text-coffee/40 pointer-events-none z-20" />
                                  <input 
                                    required
                                    type="time" 
                                    className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                                    value={formData.time}
                                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Number of Guests</label>
                              <div className="relative">
                                <Users className="absolute right-2 top-3 w-4 h-4 text-coffee/40 pointer-events-none" />
                                <select 
                                  className="w-full bg-transparent border-b border-charcoal/10 py-3 px-1 focus:border-accent-brown outline-none transition-colors font-sans text-lg appearance-none"
                                  value={formData.guests}
                                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                  ))}
                                  <option value="8+">8+ Guests</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Optional Details */}
                      <div className="space-y-8">
                        <h3 className="font-serif text-2xl text-charcoal flex items-center gap-3">
                          <span className="text-accent-brown">03.</span> Extra Details
                        </h3>
                        <div>
                          <label className="text-xs font-bold tracking-widest uppercase text-coffee/60 block mb-3">Special Requests / Notes (Optional)</label>
                          <textarea 
                            placeholder="Allergies, celebrations, seating preferences, etc."
                            rows={4}
                            className="w-full bg-transparent border border-charcoal/10 p-6 rounded-2xl focus:border-accent-brown outline-none transition-colors font-sans text-lg resize-none"
                            value={formData.requests}
                            onChange={(e) => setFormData({...formData, requests: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="pt-8 flex flex-col items-center gap-6">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto px-16 py-8 bg-charcoal text-paper-tone rounded-full hover:bg-accent-brown transition-all duration-300 group shadow-md hover:shadow-xl text-xl font-medium disabled:opacity-50"
                        >
                          <span className="flex items-center gap-3">
                            {isSubmitting ? (
                              <>
                                Sending Request...
                                <Loader2 className="w-5 h-5 animate-spin" />
                              </>
                            ) : (
                              <>
                                Request a Table
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                            )}
                          </span>
                        </Button>
                        <p className="text-sm text-brown-grey tracking-wide">
                          We'll confirm your reservation shortly via email.
                        </p>
                      </div>
                    </form>

                    {/* Decorative Elements for the Form Card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-brown/5 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee/5 rounded-full blur-3xl -ml-32 -mb-32" />
                  </motion.div>

                  {/* Guidelines Box (Right) */}
                  <motion.div 
                    variants={itemVariants}
                    className="bg-paper-tone/80 backdrop-blur-md border border-charcoal/5 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden bg-grain h-full"
                  >
                    <div className="space-y-8 relative z-10">
                      <h4 className="text-2xl font-serif italic text-charcoal border-b border-charcoal/5 pb-4">Reservation Guidelines</h4>
                      <ul className="space-y-6 text-base font-medium leading-relaxed text-charcoal/80 tracking-wide">
                        <li className="flex gap-4">
                          <span className="text-accent-brown font-bold text-xl flex-shrink-0">•</span>
                          <span>Reservations will be held for a maximum of 15 minutes.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-accent-brown font-bold text-xl flex-shrink-0">•</span>
                          <span>Sofa and charging point seats are available on walk-in basis only.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-accent-brown font-bold text-xl flex-shrink-0">•</span>
                          <span>Pets are welcome at our sheltered outdoor seating area only.</span>
                        </li>
                        <li className="flex gap-4">
                          <span className="text-accent-brown font-bold text-xl flex-shrink-0">•</span>
                          <span>Strictly for dine-in. Meetings, working, or studying are walk-in only.</span>
                        </li>
                        <li className="mt-8 pt-8 border-t border-charcoal/5 italic text-coffee/70 text-sm font-normal">
                          * The Café reserves the right to decline any reservation that does not adhere to these guidelines.
                        </li>
                      </ul>
                    </div>
                    {/* Decorative Elements for the Guidelines Card */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-brown/5 rounded-full blur-2xl -mr-16 -mt-16" />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto py-24 text-center space-y-8"
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif text-charcoal">Thank you!</h2>
                  <p className="text-lg text-brown-grey leading-relaxed">
                    We've received your request and will get back to you shortly to confirm your table.
                  </p>
                </div>
                <Button 
                  asChild
                  variant="outline"
                  className="rounded-full px-8"
                >
                  <Link href="/">Return Home</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
