import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Cog, Zap, Settings } from "lucide-react";

interface EngineLoaderProps {
  progress: number;
}

const EngineLoader: React.FC<EngineLoaderProps> = ({ progress }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-midnight-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-racing-red/20 via-transparent to-speed-blue/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.05)_100%)]"></div>
      </div>

      {/* Main Engine Container */}
      <div className="relative z-10 text-center">
        {/* Engine Block */}
        <div className="relative mb-8">
          {/* Central Engine */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-chrome-silver to-carbon-gray rounded-xl shadow-2xl border-2 border-racing-red/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(220, 38, 38, 0.3)",
                "0 0 30px rgba(220, 38, 38, 0.6)",
                "0 0 20px rgba(220, 38, 38, 0.3)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Engine Pistons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-3 h-8 bg-racing-red rounded-full mx-1"
                animate={{
                  y: [0, -8, 0],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-3 h-8 bg-racing-red rounded-full mx-1"
                animate={{
                  y: [0, -8, 0],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
              />
              <motion.div
                className="w-3 h-8 bg-racing-red rounded-full mx-1"
                animate={{
                  y: [0, -8, 0],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="w-3 h-8 bg-racing-red rounded-full mx-1"
                animate={{
                  y: [0, -8, 0],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.45 }}
              />
            </div>
          </motion.div>

          {/* Rotating Gears */}
          <motion.div
            className="absolute -top-4 -left-4 text-racing-red"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Cog size={24} />
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 text-engine-orange"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Settings size={20} />
          </motion.div>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-speed-blue"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          >
            <Cog size={28} />
          </motion.div>

          {/* Spark Effects */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-neon-yellow"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={20} />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-chrome-silver text-2xl font-bold mb-8"
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          {t("loading")}
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-carbon-gray rounded-full h-3 overflow-hidden border border-racing-red/30">
            <motion.div
              className="h-full bg-gradient-to-r from-racing-red via-engine-orange to-neon-yellow rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="text-chrome-silver text-sm mt-2 font-mono"
            animate={{
              opacity: [1, 0.6, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* RPM Counter */}
        <motion.div
          className="mt-6 text-racing-red text-lg font-mono"
          animate={{
            color: ["#dc2626", "#ea580c", "#dc2626"],
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          RPM: {Math.round(progress * 50 + 1000)}
        </motion.div>
      </div>

      {/* Exhaust Smoke Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-2 h-16 bg-gradient-to-t from-gray-500/20 to-transparent rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scaleX: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-2 h-16 bg-gradient-to-t from-gray-500/20 to-transparent rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};

export default EngineLoader;
