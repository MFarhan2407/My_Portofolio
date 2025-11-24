"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-32 bg-gradient-to-t from-black to-[#08081a] overflow-hidden"
        >
            {/* Soft Blue/Red Glow with Animation */}
            <motion.div
                className="
          absolute top-10 left-1/2 -translate-x-1/2 
          w-[70%] h-[200px]
          bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20
          blur-[150px]
        "
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-4xl font-bold mb-6"
                >
                    Contact Me
                </motion.h2>

                {/* TEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
                >
                    Want to collaborate, work together, or just say hi?
                    I’m always open to exciting opportunities.
                </motion.p>

                {/* BUTTON */}
                <motion.a
                    href="mailto:mf6819042@gmail.com"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    whileHover={{
                        scale: 1.07,
                        y: -4,
                        boxShadow: "0px 0px 35px rgba(255,255,255,0.4), 0 0 80px rgba(59,130,246,0.4)",
                        background: "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                        backdropFilter: "blur(8px)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="
    inline-block px-12 py-4 rounded-xl
    bg-white/10 backdrop-blur-md
    border border-white/20
    font-semibold tracking-wide
    transition-all duration-300
    text-white
  "
                >
                    ✉ Send Email
                </motion.a>



                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.a
                        href="https://github.com/MFarhan2407"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/muhammad-farhan-71482b38a"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/frhnn_007/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                        Instagram
                    </motion.a>
                </motion.div>
            </div>

            {/* Bottom Fade - Smooth */}
            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
        </section>
    );
}
