"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Gamora",
            desc: "Web e-commerce platform.",
        },
        {
            title: "Feastbook",
            desc: "Mobile app for connect people",
        },
        {
            title: "Care Connect",
            desc: "Donation / volunteering mobile web system.",
        },
        {
            title: "Gamora",
            desc: "Web e-commerce platform.",
        },
        {
            title: "Feastbook",
            desc: "Mobile app for connect people",
        },
        {
            title: "Care Connect",
            desc: "Donation / volunteering mobile web system.",
        }
    ];

    return (
        <section id="projects" className="relative py-28 pb-20 bg-gradient-to-b from-black to-[#0a0a2a]">
            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE ANIMATION */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl font-bold mb-12 text-white text-center"
                >
                    Projects
                </motion.h2>

                {/* GRID WITH STAGGER */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >
                    {projects.map((p) => (
                        <motion.div
                            key={p.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.05,
                                y: -5
                            }}
                            className="
                p-6 rounded-xl bg-white/5 border border-white/10 
                cursor-pointer
                transition-all duration-300
                hover:border-red-500/50
                hover:shadow-[0_0_35px_rgba(239,68,68,0.4),0_0_70px_rgba(59,130,246,0.2)]
              "
                        >
                            <h3 className="text-xl font-semibold text-red-400">{p.title}</h3>
                            <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

        </section>
    );
}
