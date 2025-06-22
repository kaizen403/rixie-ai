"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Calendar,
  Phone,
  MessageSquare,
  Clock,
} from "lucide-react";
import { openCalendly } from "@/lib/utils";

export default function Hero() {
  const tasks = [
    { text: "Schedule a meeting with Rishi at 5pm today", icon: Calendar },
    {
      text: "Call all my friends for party at 5pm",
      icon: Phone,
    },
    {
      text: "Prepare notes from my last also update Ryan",
      icon: Clock,
    },
    { text: "Call my wife and tell her that love her", icon: Phone },
    { text: "Remind Ryan about contract signing tomorrow", icon: Clock },
    { text: "Make a call to Aryan for lunch", icon: Phone },
    { text: "Remind me in 5pm to drink protein", icon: Clock },
    {
      text: "Arrange a meeting with the Design team",
      icon: Phone,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tags */} {/* Main Title */}
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
                Switch on autopilot
              </h2>
              <div className="relative inline-block">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2BC4D8] font-lexend tracking-wide">
                  Let AI manage the rest.{" "}
                </span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed font-lexend"
            >
              Rixie AI makes & takes calls, messages, schedules meetings,
              reminders, meeting notes.. much more
              <span className="block mt-2 text-[#2BC4D8] font-medium"></span>
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
                  <Bot className="w-6 h-6" />
                  Book Demo Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
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
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300" />
                  </motion.div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-lexend mb-3">
                  Rixie&apos;s Task Queue
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-lexend">
                  Processes tasks intelligently
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
                <span className="text-sm sm:text-base text-gray-400 font-lexend"></span>
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
