import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Database, Globe, Smartphone, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      icon: <Globe className="w-6 h-6" />,
      color: "text-racing-red",
      bgColor: "bg-racing-red/20",
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "Css", level: 70 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML", level: 95 },
      ],
    },
    {
      title: t("skills.categories.backend"),
      icon: <Database className="w-6 h-6" />,
      color: "text-engine-orange",
      bgColor: "bg-engine-orange/20",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 70 },
        { name: "C++", level: 50 },
        { name: "Java", level: 30 },
      ],
    },
    {
      title: t("skills.categories.tools"),
      icon: <Settings className="w-6 h-6" />,
      color: "text-electric-green",
      bgColor: "bg-electric-green/20",
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 60 },
        { name: "CI/CD", level: 70 },
      ],
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-carbon-gray/20 to-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-racing font-bold mb-6 gradient-text">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="card-glow rounded-2xl p-6 hover:shadow-neon transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className={category.color}>{category.icon}</span>
                </div>
                <h3 className="text-xl font-racing font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400 font-racing">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-midnight-black/50 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r from-racing-red to-engine-orange`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                        />
                      </div>
                      {/* Speedometer-like indicator */}
                      <motion.div
                        className="absolute top-0 right-0 w-2 h-2 bg-electric-green rounded-full"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1.5,
                        }}
                        style={{
                          right: `${100 - skill.level}%`,
                          transform: "translateX(50%)",
                          boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-racing font-bold mb-8 text-chrome-silver">
            {t("skills.additionalTitle")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL",
              "Redis",
              "Prisma",
              "Stripe",
              "Firebase",
              "Vercel",
              "Netlify",
              "Framer Motion",
              "Three.js",
              "Socket.io",
              "Jest",
              "Cypress",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-carbon-gray/30 rounded-full text-gray-300 text-sm font-medium hover:bg-racing-red/20 hover:text-racing-red transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
