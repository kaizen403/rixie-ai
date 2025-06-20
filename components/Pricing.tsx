"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Users,
  Building,
  Crown,
  ArrowRight,
  ChevronDown,
  Zap,
} from "lucide-react";
import { openCalendly } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for solopreneurs and small businesses",
    features: [
      "Up to 100 calls per month",
      "Basic calendar integration",
      "SMS & email notifications",
      "Standard business hours",
      "Basic call recording",
      "Email support",
    ],
    icon: Users,
    popular: false,
    tier: "basic",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and busy professionals",
    features: [
      "Up to 500 calls per month",
      "Advanced calendar synchronization",
      "Smart routing & escalation",
      "24/7 availability",
      "Full conversation logs",
      "Priority support",
      "Custom greetings",
      "Meeting preparation briefs",
      "CRM integration",
    ],
    icon: Building,
    popular: true,
    tier: "pro",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited calls",
      "Multi-calendar management",
      "Advanced AI training",
      "Custom workflows",
      "Department routing",
      "Dedicated account manager",
      "White-label options",
      "API access",
      "Advanced analytics",
      "SSO integration",
      "Custom integrations",
    ],
    icon: Crown,
    popular: false,
    tier: "enterprise",
  },
];

const faqs = [
  {
    question: "How does Rixie AI handle complex scheduling?",
    answer:
      "Our AI understands context, preferences, and scheduling conflicts. It can handle multi-party meetings, time zone conversions, and even reschedule meetings when conflicts arise.",
  },
  {
    question: "Can it integrate with my existing tools?",
    answer:
      "Yes. We integrate with Google Calendar, Outlook, Salesforce, HubSpot, Slack, and dozens of other popular business tools. Custom integrations available for Enterprise plans.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, comply with GDPR and CCPA, and never sell your data. All conversations are encrypted and stored securely.",
  },
  {
    question: "What if the AI cannot handle a request?",
    answer:
      "The AI is trained to recognize its limitations and will seamlessly transfer complex requests to you or your team. You maintain full control.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
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
        {Array.from({ length: 8 }).map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-5xl md:text-6xl font-black mb-6 font-lexend tracking-wider text-[#2BC4D8]">
            CHOOSE YOUR POWER
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-lexend">
            Transparent solutions designed to scale with your business needs.
            All plans include comprehensive support and full feature access.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(43, 196, 216, 0.2)",
              }}
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(43, 196, 216, 0.4)",
                          "0 0 0 10px rgba(43, 196, 216, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="bg-[#2BC4D8] text-white px-4 py-1.5 rounded-full text-xs font-bold font-lexend border border-[#2BC4D8]/50 whitespace-nowrap"
                    >
                      MOST POPULAR
                    </motion.div>
                  </div>
                </motion.div>
              )}

              <div
                className={`relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full ${
                  plan.popular
                    ? "border-[#2BC4D8]/40 hover:border-[#2BC4D8]/60"
                    : "border-gray-700/30 hover:border-[#2BC4D8]/30"
                }`}
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`inline-flex p-4 rounded-2xl mb-4 ${
                        plan.popular
                          ? "bg-[#2BC4D8]"
                          : "bg-gradient-to-r from-gray-700 to-gray-800 border border-[#2BC4D8]/30"
                      }`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-3xl font-black text-white mb-2 font-lexend tracking-wider">
                      {plan.name.toUpperCase()}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed font-lexend">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-[#2BC4D8] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed font-lexend">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:vrishi@kazdesk.in"
                    className={`block w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 font-lexend relative overflow-hidden ${
                      plan.popular
                        ? "bg-[#2BC4D8] text-white shadow-lg hover:shadow-[#2BC4D8]/25"
                        : "bg-gray-800/60 text-white hover:bg-gray-700/60 border border-[#2BC4D8]/30"
                    }`}
                  >
                    <span className="relative z-10">CONTACT US</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3 className="text-4xl font-black text-center mb-12 font-lexend tracking-wider text-[#2BC4D8]">
            FREQUENTLY ASKED QUESTIONS
          </motion.h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-[#2BC4D8]/40 transition-all duration-300 overflow-hidden">
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-bold text-white font-lexend pr-4">
                      {faq.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-[#2BC4D8] flex-shrink-0" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-[#2BC4D8]/30 to-transparent mb-4"></div>
                          <p className="text-gray-300 leading-relaxed font-lexend">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-[#2BC4D8]/30 p-12 text-center">
            <div className="relative z-10">
              <motion.h3 className="text-4xl md:text-5xl font-black mb-6 font-lexend tracking-wider text-[#2BC4D8]">
                READY TO BOOK A DEMO?
              </motion.h3>

              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed font-lexend">
                Lets discuss how Rixie AI can transform your business operations
                and boost your productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(43, 196, 216, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendly}
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 shadow-2xl relative overflow-hidden font-lexend border border-[#2BC4D8]/30"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    BOOK DEMO NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:vrishi@kazdesk.in"
                  className="px-10 py-4 bg-transparent border-2 border-[#2BC4D8]/50 text-[#2BC4D8] font-bold rounded-full transition-all font-lexend hover:bg-[#2BC4D8]/5 hover:shadow-lg hover:shadow-[#2BC4D8]/25"
                >
                  CONTACT US
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

