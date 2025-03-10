"use client";

import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="overflow-hidden">
      {/* Section Title */}
      <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mt-10">
        Contact Me
      </h1>

      <section
        id="contact"
        className="py-20 sm:py-24 md:py-28 text-white max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8"
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-12">
            {/* Heading Animation */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold"
            >
              Get in <span className="text-green-400">Touch</span>
            </motion.h2>

            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-6 rounded-2xl space-y-6"
            >
              {/* Phone Section */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl">Phone</p>
                <a
                  href="tel:+919653406954"
                  className="transition duration-300 flex items-center gap-2 hover:text-green-400"
                >
                  +91 9653406954
                </a>
              </div>

              {/* Email Section */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl">Email</p>
                <a
                  href="mailto:aryapawarwork@gmail.com"
                  className="transition duration-300 flex items-center gap-2 hover:text-green-400"
                >
                  aryapawarwork@gmail.com
                </a>
              </div>

              {/* Address Section */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl">Address</p>
                <address className="not-italic leading-relaxed hover:text-green-400 cursor-pointer">
                  Malad East, Mumbai - 400097 <br /> India
                </address>
              </div>
            </motion.div>
          </div>

          {/* Responsive Google Maps Embed */}
          <motion.div
            className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4429985685783!2d72.86636037493219!3d19.175844048831014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b709fe930475%3A0x1d903dcdc19d9565!2sJP%20Decks!5e0!3m2!1sen!2sin!4v1741509528000!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
