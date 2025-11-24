"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "Node.js", "Express.js",
    "Next.js", "React", "PostgreSQL", "MongoDB",
    "GraphQL", "TailwindCSS", "Apollo", "REST API"
  ];

  return (
    <section id="skills" className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-12 text-white text-center"
        >
          Skills
        </motion.h2>

        {/* GRID ANIMATION WRAPPER */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="
                p-4 rounded-lg bg-white/5 border border-white/10 
                text-center text-white font-medium
                cursor-pointer
                transition-all duration-300
                hover:border-red-500/50
                hover:shadow-[0_0_25px_rgba(239,68,68,0.4),0_0_50px_rgba(59,130,246,0.2)]
              "
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
