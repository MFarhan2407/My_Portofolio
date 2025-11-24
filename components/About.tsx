"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* White Top Strip */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 h-[2px] bg-white/20"
      />

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-bold mb-6 text-white"
        >
          About Me
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Hi, I'm{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-white font-bold tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          >
            Farhan
          </motion.span>{" "}
          ~ a passionate Fullstack Developer based in Indonesia.  
          I enjoy building high-performance backend systems and futuristic UI
          experiences. Always learning, always building.
        </motion.p>
      </div>

      {/* White Bottom Strip */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-0 left-0 h-[2px] bg-white/20"
      />
    </section>
  );
}
