"use client";

import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { Check, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import WebinarRegisterForm from "./WebinarRegisterForm";

export default function WebinarCTA() {
  const { reserveSeat } = WEBINAR_PAGE;

  const whatsappHref = `https://wa.me/${reserveSeat.whatsappNumber}?text=${encodeURIComponent(
    reserveSeat.whatsappMessage
  )}`;

  return (
    <section
      id="register"
      className="py-16 md:py-24 bg-gradient-to-br from-secondary via-[#5DD1E8] to-primary scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-textPrimary order-2 lg:order-1">
            <p className="text-sm uppercase tracking-wider mb-4 font-medium">
              {reserveSeat.preTitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              {reserveSeat.title}
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              {reserveSeat.description}
            </p>

            <div className="space-y-4 mb-8">
              {reserveSeat.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-textPrimary rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base md:text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-md mb-4">
              <WebinarRegisterForm source="weight-loss-webinar" />
            </div>

            <div className="flex items-center gap-2 text-sm mb-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary/80 hover:text-textPrimary underline underline-offset-2"
              >
                {reserveSeat.whatsappText}
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-textPrimary/10 hover:bg-textPrimary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-textPrimary" />
              </a>
              <a
                href={reserveSeat.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-textPrimary/10 hover:bg-textPrimary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-textPrimary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-textPrimary/10 hover:bg-textPrimary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-textPrimary" />
              </a>
              <a
                href={reserveSeat.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-textPrimary/10 hover:bg-textPrimary/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-textPrimary" />
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative order-1 lg:order-2">
            {/* Coach Image */}
            <div className="relative w-full aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={reserveSeat.coachImage}
                alt="Amit Sarvaiya - Health Coach"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Webinar Thumbnail - Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-8 right-0 w-2/3 shadow-2xl rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={reserveSeat.webinarImage}
                  alt="Webinar Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
