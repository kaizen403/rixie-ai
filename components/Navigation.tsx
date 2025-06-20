"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn, openCalendly } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#2BC4D8]/20"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Image
            src="/logo.png"
            alt="Rixie AI logo"
            width={85}
            height={85}
            className="rounded-lg"
          />

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <motion.a
                href="#features"
                className="text-gray-300 font-medium font-lexend text-base"
              >
                Features
              </motion.a>

              <motion.a
                href="#pricing"
                className="text-gray-300 font-medium font-lexend text-base"
              >
                Pricing
              </motion.a>

              <motion.button
                onClick={openCalendly}
                className="bg-[#2BC4D8] text-white px-6 py-2.5 rounded-lg font-medium font-lexend flex items-center gap-2 text-base"
              >
                Book Demo
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-[#2BC4D8]/20"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              <motion.a
                href="#features"
                className="block px-4 py-3 text-gray-300 font-medium font-lexend text-base"
                onClick={() => setIsOpen(false)}
              >
                Features
              </motion.a>

              <motion.a
                href="#pricing"
                className="block px-4 py-3 text-gray-300 font-medium font-lexend text-base"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </motion.a>

              <motion.button
                className="w-full text-left bg-[#2BC4D8] text-white px-4 py-2.5 rounded-lg font-medium font-lexend mt-4 text-base"
                onClick={() => {
                  openCalendly();
                  setIsOpen(false);
                }}
              >
                <span className="flex items-center gap-2">
                  Book Demo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
