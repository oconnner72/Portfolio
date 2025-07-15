import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Car, Bike, Code, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            {t("about.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-racing font-bold mb-4 text-racing-red">
                {t("about.sectionTitle")}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t("about.description1")}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t("about.description2")}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Passion Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-glow rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-racing-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6 text-racing-red" />
                </div>
                <h4 className="font-racing font-bold text-lg mb-2">
                  {t("about.passions.cars")}
                </h4>
                <p className="text-gray-400 text-sm">
                  {t("about.passions.carsDesc")}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-glow rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-engine-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bike className="w-6 h-6 text-engine-orange" />
                </div>
                <h4 className="font-racing font-bold text-lg mb-2">
                  {t("about.passions.motorcycles")}
                </h4>
                <p className="text-gray-400 text-sm">
                  {t("about.passions.motorcyclesDesc")}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-glow rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-electric-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-electric-green" />
                </div>
                <h4 className="font-racing font-bold text-lg mb-2">
                  {t("about.passions.coding")}
                </h4>
                <p className="text-gray-400 text-sm">
                  {t("about.passions.codingDesc")}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-glow rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-neon-yellow" />
                </div>
                <h4 className="font-racing font-bold text-lg mb-2">
                  {t("about.passions.innovation")}
                </h4>
                <p className="text-gray-400 text-sm">
                  {t("about.passions.innovationDesc")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "2+", label: t("about.stats.experience") },
            { number: "15+", label: t("about.stats.projects") },
            { number: "10+", label: t("about.stats.technologies") },
            { number: "∞", label: t("about.stats.passion") },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-racing font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
