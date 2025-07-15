import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: t("projects.list.speedDash.title"),
      description: t("projects.list.speedDash.description"),
      image: "/api/placeholder/600/400",
      tech: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js"],
      github: "https://github.com/brian/speeddash",
      demo: "https://speeddash.vercel.app",
      featured: true,
      category: t("projects.list.speedDash.category"),
    },
    {
      id: 2,
      title: t("projects.list.racingCRM.title"),
      description: t("projects.list.racingCRM.description"),
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe"],
      github: "https://github.com/brian/racingcrm",
      demo: "https://racingcrm.vercel.app",
      featured: true,
      category: t("projects.list.racingCRM.category"),
    },
    {
      id: 3,
      title: t("projects.list.motoMeet.title"),
      description: t("projects.list.motoMeet.description"),
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Firebase", "Google Maps", "Redux", "Expo"],
      github: "https://github.com/brian/motomeet",
      demo: "https://motomeet.app",
      featured: false,
      category: t("projects.list.motoMeet.category"),
    },
    {
      id: 4,
      title: t("projects.list.turboChat.title"),
      description: t("projects.list.turboChat.description"),
      image: "/api/placeholder/600/400",
      tech: ["React", "Socket.io", "WebRTC", "Express.js", "MongoDB"],
      github: "https://github.com/brian/turbochat",
      demo: "https://turbochat.vercel.app",
      featured: false,
      category: t("projects.list.turboChat.category"),
    },
    {
      id: 5,
      title: t("projects.list.gearShift.title"),
      description: t("projects.list.gearShift.description"),
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "Nuxt.js", "Shopify API", "Algolia", "Stripe"],
      github: "https://github.com/brian/gearshift",
      demo: "https://gearshift.shop",
      featured: false,
      category: t("projects.list.gearShift.category"),
    },
    {
      id: 6,
      title: t("projects.list.pitStop.title"),
      description: t("projects.list.pitStop.description"),
      image: "/api/placeholder/600/400",
      tech: ["React", "GraphQL", "Apollo", "Node.js", "PostgreSQL"],
      github: "https://github.com/brian/pitstop",
      demo: "https://pitstop.app",
      featured: false,
      category: t("projects.list.pitStop.category"),
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-transparent to-carbon-gray/20"
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
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-racing font-bold mb-8 text-center text-chrome-silver">
            {t("projects.featured")}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative card-glow rounded-2xl overflow-hidden hover:shadow-neon transition-all duration-500"
              >
                <div className="aspect-video bg-gradient-to-br from-racing-red/20 to-engine-orange/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-racing-red/30 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-racing-red" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-racing font-bold text-white">
                      {project.title}
                    </h4>
                    <span className="text-xs font-medium px-3 py-1 bg-racing-red/20 text-racing-red rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-carbon-gray/50 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-racing-red transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      {t("projects.buttons.code")}
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-electric-green transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.buttons.demo")}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-racing font-bold mb-8 text-center text-chrome-silver">
            {t("projects.other")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glow rounded-xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-racing font-bold text-white">
                    {project.title}
                  </h4>
                  <span className="text-xs font-medium px-2 py-1 bg-engine-orange/20 text-engine-orange rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-carbon-gray/30 text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-carbon-gray/30 text-gray-400 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-racing-red transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-electric-green transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            {t("projects.viewAllDescription")}
          </p>
          <motion.a
            href="https://github.com/brian"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-racing-red to-engine-orange text-white rounded-full font-semibold shadow-lg hover:shadow-neon transition-shadow duration-300"
          >
            <Github className="w-5 h-5" />
            {t("projects.viewAll")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
