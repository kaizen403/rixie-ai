"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  MessageSquare,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { openCalendly } from "@/lib/utils";

export default function Hero() {
  const tasks = [
    { text: "Schedule a meeting with Rishi at 5pm today", icon: Calendar },
    { text: "Call my wife and tell her I love you", icon: Phone },
    { text: "Add contract signing to my todo", icon: Clock },
    { text: "Make a call to Diya for progress", icon: Phone },
    { text: "Remind me in 5pm to drink protein", icon: Clock },
    { text: "Book dinner reservation for Friday", icon: Calendar },
    { text: "Send follow-up email to client", icon: MessageSquare },
    { text: "Order office supplies", icon: Clock },
    { text: "Cancel gym membership", icon: Phone },
    { text: "Update LinkedIn profile", icon: Clock },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-3 mb-8"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-4 py-2 bg-gray-800/80 text-gray-300 text-sm font-medium rounded border border-gray-700/50 font-lexend"
              >
                BETA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-4 py-2 bg-gray-800/80 text-gray-300 text-sm font-medium rounded border border-gray-700/50 font-lexend"
              >
                AI POWERED
              </motion.span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="relative text-white font-lexend block">
                  <span className="text-[#2BC4D8] font-medium">Rixie</span>
                  <br />
                  <span className="text-gray-300 font-light">
                    Your new AI Secretary
                  </span>
                </span>

                {/* Elegant underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#2BC4D8] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 mb-3 font-lexend">
                The AI That Makes You
              </h2>
              <div className="relative inline-block">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2BC4D8] font-lexend tracking-wide">
                  FIRE YOUR SECRETARY
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed font-lexend"
            >
              Forge genuine connections with calls, texts, reminders, and
              answers that feel human.
              <span className="block mt-2 text-[#2BC4D8] font-medium">
                Dont wait. Shes not worth it. Replace your secretary with Rixie
                AI now!
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-[#2BC4D8] text-white font-bold rounded-xl text-lg overflow-hidden font-lexend"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  <Image
                    src="/logo.png"
                    alt="Rixie AI logo"
                    width={24}
                    height={24}
                  />
                  Book Demo Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-[#2BC4D8]/50 text-[#2BC4D8] font-bold rounded-xl text-lg font-lexend hover:bg-[#2BC4D8]/5 transition-colors"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Available" },
                { value: "< 1s", label: "Response" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <div className="text-2xl font-bold text-white font-lexend">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-lexend">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Clean Task Queue */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 sm:h-[28rem] flex flex-col items-center justify-center">
              {/* Task Queue Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 sm:mb-10 text-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full border-2 border-gray-600/30 flex items-center justify-center bg-gray-800/50"
                  >
                    <Image
                      src="/logo.png"
                      alt="Rixie AI logo"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-lexend mb-3">
                  AI Task Management
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-lexend">
                  Processing tasks intelligently
                </p>
              </motion.div>

              {/* Clean Task Queue - 3 tasks visible */}
              <div className="relative w-full max-w-md sm:max-w-lg h-48 sm:h-56 overflow-hidden">
                {tasks.map((task, index) => (
                  <motion.div
                    key={`${task.text}-${index}`}
                    className="absolute w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/60 text-gray-200 text-sm sm:text-base rounded-lg border border-gray-700/50 font-lexend"
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    animate={{
                      opacity: [0, 1, 1, 1, 0],
                      y: [-60, 8, 64, 120, 180],
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: tasks.length * 2.5 - 8,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <task.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <span className="truncate flex-1 text-sm sm:text-base">
                        {task.text}
                      </span>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-500 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Simple Processing Indicator */}
              <motion.div
                className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-400 font-lexend">
                  Processing
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
