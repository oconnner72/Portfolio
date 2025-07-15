import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language;

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 bg-carbon-gray/20 rounded-lg hover:bg-racing-red/20 transition-colors duration-300 border border-carbon-gray/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-4 h-4 text-chrome-silver" />
      <span className="text-sm font-medium text-white">
        {currentLang === "en" ? "EN" : "ES"}
      </span>
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-electric-green rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
};

export default LanguageToggle;
