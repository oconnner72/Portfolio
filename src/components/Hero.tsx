import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open('https://www.canva.com/design/DAGtQ-szjz8/ThwZR2cRa-1abJafGA_H5A/view?utm_content=DAGtQ-szjz8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd8688eabee')
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-racing-red/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-engine-orange/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-racing font-bold mb-6">
              <span className="gradient-text">{t("hero.name")}</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-chrome-silver font-medium mb-4">
              {t("hero.title")}
            </div>
            <div className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t("hero.description")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(220, 20, 60, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openResume}
              className="racing-gradient text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              {t("hero.downloadResume")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-racing-red text-racing-red px-8 py-4 rounded-full font-semibold hover:bg-racing-red hover:text-white transition-colors duration-300"
            >
              {t("hero.viewWork")}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com/oconnner72"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#DC143C" }}
              whileTap={{ scale: 0.9 }}
              className="text-chrome-silver hover:text-racing-red transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/brian-ramírez-ávila-822ab534a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#DC143C" }}
              whileTap={{ scale: 0.9 }}
              className="text-chrome-silver hover:text-racing-red transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:brian.ramirez.a@outlook.com"
              whileHover={{ scale: 1.2, color: "#DC143C" }}
              whileTap={{ scale: 0.9 }}
              className="text-chrome-silver hover:text-racing-red transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-chrome-silver hover:text-racing-red transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
