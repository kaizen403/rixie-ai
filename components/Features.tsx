"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Phone,
  MessageSquare,
  Brain,
  Clock,
  CheckCircle,
  Zap,
  MoreVertical,
  Paperclip,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Intelligent Scheduling",
    subtitle: "Call-In & Text-In Booking",
    description:
      "Visitors dial or message Rixie AI. It checks your calendar and instantly confirms appointments—eliminating endless back-and-forth.",
    demo: "Hey Rixie, book me with Sarah next Tuesday",
  },
  {
    icon: Phone,
    title: "Proactive Outreach",
    subtitle: "Outbound Meeting Requests",
    description:
      "Need to reschedule or confirm? Rixie AI reaches out by phone or text on your behalf with professional communication.",
    demo: "Calling Sarah: Hi, this is Rixie AI calling for John...",
  },
  {
    icon: Clock,
    title: "Smart Reminders",
    subtitle: "Never Miss Important Moments",
    description:
      "Receive intelligent texts or calls ahead of every event with context-aware information and preparation notes.",
    demo: "Meeting with Sarah in 15 mins. Agenda: Contract review",
  },
  {
    icon: Brain,
    title: "Contextual Intelligence",
    subtitle: "Memory-Driven Insights",
    description:
      "Rixie AI learns patterns and remembers preferences—alerting you when it's time to follow up with key contacts.",
    demo: "Sarah prefers morning meetings. Last discussed: Q4 budget",
  },
  {
    icon: MessageSquare,
    title: "Seamless Documentation",
    subtitle: "Capture Every Important Detail",
    description:
      "After meetings, Rixie AI prompts for notes and action items. Everything is timestamped and linked to the relevant event.",
    demo: "Meeting notes saved. 3 action items created.",
  },
  {
    icon: CheckCircle,
    title: "Action-Oriented Follow-up",
    subtitle: "Turn Conversations into Results",
    description:
      "Transform meeting notes into actionable tasks automatically. Rixie AI creates follow-up reminders and schedules next steps.",
    demo: "Follow-up scheduled: Send contract to Sarah by Friday",
  },
];

const liveDemo = [
  { time: "00:00", action: "Incoming call from Sarah", status: "answered" },
  {
    time: "00:15",
    action: "Checking your calendar availability",
    status: "processing",
  },
  { time: "00:30", action: "Proposed Tuesday 2PM slot", status: "confirmed" },
  {
    time: "00:45",
    action: "Calendar updated, confirmation sent",
    status: "completed",
  },
  {
    time: "01:00",
    action: "Reminder set for 1:45 PM Tuesday",
    status: "scheduled",
  },
];

const whatsappMessages = [
  {
    id: 1,
    text: "Hey Rixie, I need to schedule a meeting with Sarah for next week",
    sender: "user",
    time: "2:30 PM",
  },
  {
    id: 2,
    text: "I'll help you with that! Let me call Sarah right now to check her availability and coordinate the meeting.",
    sender: "rixie",
    time: "2:30 PM",
  },
  {
    id: 3,
    text: "📞 Calling Sarah now...",
    sender: "rixie",
    time: "2:31 PM",
  },
  {
    id: 4,
    text: "Great news! I just spoke with Sarah. She's available on:\n\n• Tuesday 2:00 PM - 3:00 PM\n• Wednesday 10:00 AM - 11:00 AM\n• Thursday 3:30 PM - 4:30 PM\n\nWhich time works best for you?",
    sender: "rixie",
    time: "2:33 PM",
  },
  {
    id: 5,
    text: "Tuesday 2 PM sounds perfect!",
    sender: "user",
    time: "2:34 PM",
  },
  {
    id: 6,
    text: "Perfect! ✅ I'll call Sarah back to confirm and send both of you calendar invites.\n\n📅 Meeting Details:\n• Date: Tuesday, Dec 19\n• Time: 2:00 PM - 3:00 PM\n• Participants: You & Sarah\n• Location: Conference Room A\n\nAll set! 🎉",
    sender: "rixie",
    time: "2:34 PM",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#2BC4D8]/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 100}px`,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-16 h-16 border border-[#2BC4D8]/10 rotate-45 bg-[#2BC4D8]/5"></div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 font-lexend tracking-wider text-[#2BC4D8]">
            SUPERHUMAN CAPABILITIES
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-lexend">
            Watch Rixie AI revolutionize your workflow in real-time
          </p>
        </motion.div>

        {/* Live Activity Monitor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-[#2BC4D8]/30 overflow-hidden"
        >
          <div className="p-6 border-b border-[#2BC4D8]/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-lg font-lexend text-[#2BC4D8]">
                Live Task Processing
              </span>
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center gap-3 text-sm text-[#2BC4D8] font-lexend"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-3 h-3 bg-[#2BC4D8] rounded-full"
              />
              ACTIVE
            </motion.div>
          </div>

          {/* Live Activity Feed */}
          <div className="p-6">
            <h3 className="text-base font-semibold text-[#2BC4D8] mb-4 font-lexend">
              TASK EXECUTION
            </h3>
            <div className="space-y-3">
              {liveDemo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 rounded bg-gray-800/60 border border-[#2BC4D8]/20"
                >
                  <div className="text-sm text-[#2BC4D8] font-mono w-14">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-200 font-lexend">
                      {item.action}
                    </div>
                    <div className="text-sm font-lexend text-[#2BC4D8]">
                      {item.status.toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-[#2BC4D8]/20 overflow-hidden p-8"
            >
              {/* Feature Content */}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-gray-800/60 border border-[#2BC4D8]/30 rounded">
                  <feature.icon className="w-4 h-4 text-[#2BC4D8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white font-lexend truncate">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#2BC4D8] font-lexend font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-3 font-lexend line-clamp-3">
                {feature.description}
              </p>

              {/* Demo Preview */}
              <div className="bg-gray-800/50 border border-[#2BC4D8]/20 rounded p-2 border-l-2 border-[#2BC4D8]">
                <div className="text-sm text-[#2BC4D8] font-sans italic">
                  {feature.demo}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Rixie AI Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h3 className="text-2xl font-bold mb-8 font-lexend text-center tracking-wider text-[#2BC4D8]">
            HOW RIXIE AI WORKS
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Workflow Steps */}
            <div className="relative">
              {/* Animated Connection Lines */}
              <div className="absolute top-0 left-8 bottom-0 w-px bg-gradient-to-b from-[#2BC4D8]/50 via-[#2BC4D8]/30 to-transparent hidden md:block"></div>

              {/* Workflow Steps */}
              <div className="space-y-8 relative z-10">
                {[
                  {
                    step: "1",
                    title: "MESSAGE RECEIVED",
                    desc: "Client texts Rixie AI via WhatsApp or SMS",
                  },
                  {
                    step: "2",
                    title: "AI CALLS CONTACT",
                    desc: "Rixie AI calls the person directly to coordinate",
                  },
                  {
                    step: "3",
                    title: "AVAILABILITY CHECKED",
                    desc: "Finds optimal time slots through conversation",
                  },
                  {
                    step: "4",
                    title: "MEETING CONFIRMED",
                    desc: "Schedules appointment and sends confirmations",
                  },
                  {
                    step: "5",
                    title: "FOLLOW-UP AUTOMATED",
                    desc: "Reminders and prep notes sent to all parties",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 relative"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(43, 196, 216, 0.4)",
                          "0 0 0 8px rgba(43, 196, 216, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.6,
                      }}
                      className="w-16 h-16 bg-[#2BC4D8] rounded-full flex items-center justify-center border-2 border-[#2BC4D8]/50 relative flex-shrink-0"
                    >
                      <span className="text-white font-bold font-lexend text-lg">
                        {item.step}
                      </span>
                    </motion.div>

                    <div className="flex-1 pt-2">
                      <h4 className="text-base font-bold text-[#2BC4D8] mb-1 font-lexend">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 font-lexend">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - WhatsApp UI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {/* Mobile Phone Frame */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[640px] bg-black rounded-[2.5rem] border-8 border-gray-800 relative overflow-hidden shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-2 bg-black rounded-[1.8rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-[#111B21] px-4 py-2 flex justify-between items-center text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm">
                          <div className="w-3 h-1 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Header */}
                    <div className="bg-[#202C33] px-4 py-3 flex items-center gap-3 border-b border-gray-700">
                      <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">R</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base">
                          Rixie AI
                        </h4>
                        <p className="text-[#8696A0] text-xs">online</p>
                      </div>
                      <div className="flex gap-4">
                        <Phone className="w-5 h-5 text-[#8696A0]" />
                        <MoreVertical className="w-5 h-5 text-[#8696A0]" />
                      </div>
                    </div>

                    {/* Messages Container */}
                    <div
                      className="flex-1 p-4 space-y-3 overflow-y-auto"
                      style={{
                        background: `
                          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                          #0B141A
                        `,
                        height: "480px",
                      }}
                    >
                      {whatsappMessages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 1.2 }}
                          viewport={{ once: true }}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] px-3 py-2 rounded-lg relative ${
                              message.sender === "user"
                                ? "bg-[#005C4B] text-white rounded-br-sm"
                                : "bg-[#202C33] text-[#E9EDEF] rounded-bl-sm"
                            }`}
                          >
                            <p className="text-sm leading-relaxed whitespace-pre-line">
                              {message.text}
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                              <p
                                className={`text-xs ${message.sender === "user" ? "text-[#8696A0]" : "text-[#8696A0]"}`}
                              >
                                {message.time}
                              </p>
                              {message.sender === "user" && (
                                <div className="flex">
                                  <div className="w-4 h-3 flex items-end">
                                    <svg
                                      viewBox="0 0 16 15"
                                      width="16"
                                      height="15"
                                      className="text-[#53BDEB]"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.063-.51z"
                                      />
                                      <path
                                        fill="currentColor"
                                        d="m5.09 9.050a.32.32 0 0 1-.484.033L1.026 5.75a.418.418 0 0 0-.036.541l1.32 1.266c.143.14.361.125.484-.033L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.063-.51l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Input Area */}
                    <div className="bg-[#202C33] px-4 py-2 flex items-center gap-3">
                      <Paperclip className="w-5 h-5 text-[#8696A0]" />
                      <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 flex items-center gap-2">
                        <p className="text-[#8696A0] text-sm flex-1">
                          Type a message
                        </p>
                      </div>
                      <Mic className="w-5 h-5 text-[#8696A0]" />
                    </div>
                  </div>

                  {/* Phone Details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-900/60 backdrop-blur-sm rounded-xl p-10 border border-[#2BC4D8]/30 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 font-lexend tracking-wider text-[#2BC4D8]">
              READY TO FIRE YOUR SECRETARY?
            </h3>
            <p className="text-lg text-gray-300 mb-8 font-lexend">
              Experience the future of AI assistance in under 60 seconds
            </p>
            <motion.button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg border border-[#2BC4D8]/30 font-lexend inline-flex items-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Try Interactive Demo
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
