"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 flex items-center justify-center">

            {/* BACKGROUND CIRCLE RED */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-700/40 rounded-full blur-3xl"></div>

            {/* MAIN WRAPPER */}
            <div className="relative z-10 w-full max-w-6xl text-center">

                {/* NAMA BESAR (DEADPOOL STYLE) */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 -translate-y-1/2 text-[18vw] font-extrabold text-white/5 tracking-tight pointer-events-none select-none"
                >
                    FARHAN
                </motion.h1>

                {/* CAST LIST */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex justify-center gap-10 text-xs font-light tracking-[0.3em] text-white/60 mb-6"
                >
                    <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>BACKEND</motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>NODE.JS</motion.span>
                    <motion.span whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>REACT</motion.span>
                </motion.div>


                <br /><br />


                {/* JUDUL UTAMA */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[80px] md:text-[120px] font-extrabold tracking-tight"
                >
                    FULLSTACK DEV
                </motion.h2>


                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-between items-center mt-8 max-w-3xl mx-auto"
                >
                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer"
                    >
                        Hire Me
                    </motion.a>


                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer"
                    >
                        View Projects
                    </motion.a>
                </motion.div>
            </div>

            {/* PROFILE IMAGE - Paling depan */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 -translate-x-1/2 z-[10]"
            >
                <Image
                    src="/porto_9.png"
                    alt="Muhammad Farhan"
                    width={380}
                    height={380}
                    className="w-[380px] drop-shadow-[0px_0px_40px_rgba(255,255,255,0.15)]"
                />
            </motion.div>

            {/* SUBTITLE BOTTOM */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute bottom-4 w-full flex justify-center z-20"
            >
                <p className="text-gray-300 max-w-5xl mx-auto text-base md:text-lg whitespace-nowrap px-6">
                    Building high-performance applications with clean architecture & production-ready backend systems.
                </p>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        </section>
    );
}
