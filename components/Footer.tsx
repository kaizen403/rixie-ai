"use client";

import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ],
  support: [{ name: "Contact", href: "mailto:vrishi@kazdesk.in" }],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:vrishi@kazdesk.in", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Rixie AI logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold text-[#2BC4D8] font-lexend">
                  Rixie AI
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-sm font-lexend">
                Rixie AI makes you fire your secretary. Forge genuine
                connections with calls, texts, and reminders that feel human.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-[#2BC4D8] hover:bg-gray-700 transition-colors border border-gray-700"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 uppercase font-lexend text-sm tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#2BC4D8] transition-colors text-sm font-lexend"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, text: "8639096590", href: "tel:8639096590" },
              {
                icon: Mail,
                text: "vrishi@kazdesk.in",
                href: "mailto:vrishi@kazdesk.in",
              },
              { icon: MapPin, text: "Hyderabad, India", href: "#" },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-3 text-gray-400 hover:text-[#2BC4D8] transition-colors"
              >
                <contact.icon className="w-5 h-5 text-[#2BC4D8]" />
                <span className="font-lexend">{contact.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-lexend">
            © 2025 Rixie AI. All rights reserved.
          </p>

          <div className="text-xs text-gray-500 font-lexend">
            Grig Techonologies Pvt Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
