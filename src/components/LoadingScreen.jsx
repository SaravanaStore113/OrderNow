import { useEffect, useState } from "react";
import {
  FaShoppingBasket,
  FaUtensils,
  FaLeaf,
  FaCookieBite,
  FaSmileBeam,
} from "react-icons/fa";
import { motion} from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const steps = [
    {
      icon: (
        <motion.div
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-black/10 flex items-center justify-center text-3xl md:text-5xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <span role="img" aria-label="folded hands">🙏</span>
        </motion.div>
      ),
      message: (
        <motion.p 
          className="text-base md:text-xl font-medium text-amber-100 text-center px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          வணக்கம்! அன்புடன் வரவேற்கிறோம்...
        </motion.p>
      ),
      color: "from-amber-300 to-yellow-400",
      bg: "bg-gradient-to-br from-amber-900/30 to-yellow-900/20",
      emoji: "🙏"
    },
    {
      icon: (
        <motion.div
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-black/10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <FaUtensils className="text-orange-400 w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)] stroke-black stroke-[15px]" />
        </motion.div>
      ),
      message: (
        <motion.p 
          className="text-base md:text-xl font-medium text-orange-100 text-center px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          இன்று புது சுவையான காய்கறிகள்!{" "}
          <span className="inline-block animate-bounce">🍅</span>{" "}
          <span className="inline-block animate-bounce delay-100">🧅</span>{" "}
          <span className="inline-block animate-bounce delay-200">🥕</span>
        </motion.p>
      ),
      color: "from-orange-400 to-red-400",
      bg: "bg-gradient-to-br from-orange-900/30 to-red-900/20",
      emoji: "🥬"
    },
    {
      icon: (
        <motion.div
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-black/10"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut"
          }}
        >
          <FaLeaf className="text-emerald-400 w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] stroke-black stroke-[18px]" />
        </motion.div>
      ),
      message: (
        <motion.p 
          className="text-base md:text-xl font-medium text-emerald-100 text-center px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          கருவேப்பிலை இலவசம்!{" "}
          <span className="inline-block animate-pulse">✨</span>
        </motion.p>
      ),
      color: "from-emerald-400 to-green-500",
      bg: "bg-gradient-to-br from-emerald-900/30 to-green-900/20",
      emoji: "🌿"
    },
    {
      icon: (
        <motion.div
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-black/10"
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 8, -8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "easeInOut"
          }}
        >
          <FaCookieBite className="text-rose-400 w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)] stroke-black stroke-[15px]" />
        </motion.div>
      ),
      message: (
        <motion.p 
          className="text-base md:text-xl font-medium text-rose-100 text-center px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          சிறந்த தரமான அரிசி வந்துவிட்டது!{" "}
          <span className="inline-block animate-wiggle">🍚</span>
        </motion.p>
      ),
      color: "from-rose-400 to-pink-500",
      bg: "bg-gradient-to-br from-rose-900/30 to-pink-900/20",
      emoji: "🍚"
    },
    {
      icon: (
        <motion.div
          className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-black/10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "easeInOut"
          }}
        >
          <FaShoppingBasket className="text-violet-400 w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)] stroke-black stroke-[20px]" />
        </motion.div>
      ),
      message: (
        <motion.p 
          className="text-base md:text-xl font-medium text-violet-100 text-center px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          மகிழ்ச்சியான ஷாப்பிங்! நன்றி{" "}
          <span className="inline-block animate-heartbeat">❤️</span>
        </motion.p>
      ),
      color: "from-violet-400 to-purple-500",
      bg: "bg-gradient-to-br from-violet-900/30 to-purple-900/20",
      emoji: "🛒"
    }
  ];

  useEffect(() => {
    if (shutterOpen) {
      if (activeStep < steps.length - 1) {
        const timer = setTimeout(() => {
          setActiveStep((prev) => prev + 1);
        }, isMobile ? 1800 : 2200); // Shorter duration on mobile
        return () => clearTimeout(timer);
      } else {
        const finishTimer = setTimeout(() => {
          setShowWelcome(true);
          setTimeout(onComplete, isMobile ? 1500 : 1800); // Shorter duration on mobile
        }, isMobile ? 1000 : 1200);
        return () => clearTimeout(finishTimer);
      }
    }
  }, [activeStep, steps.length, shutterOpen, onComplete, isMobile]);

  const { icon, message, color } = steps[activeStep] || steps[steps.length - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background elements - reduced on mobile */}
      {[...Array(isMobile ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * (isMobile ? 3 : 5) + 2 + 'px',
            height: Math.random() * (isMobile ? 3 : 5) + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Floating icons - reduced size and quantity on mobile */}
      {[FaLeaf, FaUtensils, FaCookieBite, FaShoppingBasket].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-2xl md:text-4xl"
          style={{
            top: `${10 + i * 20}%`,
            left: `${5 + i * 25}%`,
          }}
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8 + i * 2,
            ease: "easeInOut"
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main content */}
      {!showWelcome ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10 text-center p-4 md:p-8 w-full max-w-xs md:max-w-md bg-white/30 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 mx-4"
        >
          {/* Logo animation - smaller on mobile */}
          <div 
            className="mx-auto mb-4 md:mb-6 w-16 h-16 md:w-24 md:h-24 rounded-full p-2 bg-gradient-to-br from-amber-300 via-orange-200 to-rose-200 shadow-xl border-4 border-white/30 flex items-center justify-center"
            style={{ boxShadow: '0 8px 32px 0 rgba(251,191,36,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.12)' }}
          >
            <div className="w-full h-full rounded-full bg-white/60 flex items-center justify-center">
              <FaShoppingBasket className="w-8 h-8 md:w-14 md:h-14 text-amber-400 drop-shadow-lg" />
            </div>
          </div>

          {/* Store name - smaller on mobile */}
          <h1
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent"
          >
            உங்கள் கடை
          </h1>

          {/* Step content */}
          <div className="min-h-[120px] md:min-h-[180px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <div
                className={`p-3 md:p-4 mb-2 md:mb-4 rounded-full bg-gradient-to-br ${color} shadow-lg border-2 border-white/30 flex items-center justify-center`}
              >
                {/* Static icon, no animation */}
                {icon}
              </div>
              <div className="text-sm md:text-lg text-slate-100 font-medium leading-relaxed">
                {message}
              </div>
            </div>
          </div>

          {/* Progress indicators - smaller on mobile */}
          <div className="mt-4 md:mt-8">
            <div className="flex justify-center gap-1 md:gap-2 mb-2 md:mb-4">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    idx === activeStep 
                      ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)] scale-125" 
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            {/* Progress bar - thinner on mobile */}
            <div className="h-1 md:h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome screen content - adjusted for mobile */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            className="mb-4 md:mb-8 p-4 md:p-6 rounded-full bg-white shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-16 md:h-16 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.5l1.5 12h13.5l1.5-8.25H6.75M16.5 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </motion.div>

          <motion.div className="text-center px-4">
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-slate-800 mb-1 md:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              உங்கள் கடைக்கு வரவேற்கிறோம்
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              உங்கள் ஷாப்பிங் அனுபவத்தை தயார் செய்கிறோம்...
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-6 md:mt-12 w-48 md:w-64 h-1.5 md:h-2 bg-slate-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1.8, 
                ease: [0.65, 0, 0.35, 1] 
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Shutter animation - simplified on mobile */}
      {!shutterOpen && (
        <motion.div
          className="absolute inset-0 z-[100] origin-top flex items-center justify-center overflow-hidden"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.34, 1.56, 0.64, 1],
            onComplete: () => setShutterOpen(true)
          }}
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                #4a4a4a 0px,
                #4a4a4a ${isMobile ? '3px' : '5px'},
                #3a3a3a ${isMobile ? '3px' : '5px'},
                #3a3a3a ${isMobile ? '6px' : '10px'}
              ),
              linear-gradient(to bottom, #555555, #2a2a2a)
            `,
            backgroundBlendMode: "hard-light",
            boxShadow: `
              inset 0 -15px 20px rgba(0,0,0,0.8),
              inset 0 5px 10px rgba(255,255,255,0.1),
              0 3px 20px rgba(0,0,0,0.9)
            `,
            borderBottom: `${isMobile ? '3px' : '6px'} solid #1a1a1a`
          }}
        >
          {/* Simplified metallic texture for mobile */}
          <div 
            className="absolute inset-0 opacity-20 md:opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, 
                rgba(255,255,255,0.1) 0%, 
                transparent 70%),
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.05) 0%,
                  rgba(255,255,255,0) 20%,
                  rgba(255,255,255,0.05) 40%,
                  rgba(255,255,255,0) 60%,
                  rgba(255,255,255,0.05) 80%,
                  rgba(255,255,255,0) 100%
                )`
            }}
          />
          
          {/* Handle Assembly - simplified on mobile */}
          <motion.div
            className="flex flex-col items-center absolute bottom-0"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            {/* Handle mounting plate */}
            <div className={`${isMobile ? 'w-16 h-2' : 'w-24 h-3'} rounded-t-sm mb-1 bg-gray-700 border border-gray-600 border-b-0`} />
            
            {/* Main handle */}
            <div
              className={`${isMobile ? 'w-16 h-6' : 'w-24 h-8'} rounded-md bg-gradient-to-b from-gray-400 to-gray-600 border border-gray-700 flex items-center justify-center relative`}
              style={{
                boxShadow: `
                  0px 3px 6px rgba(0,0,0,0.5),
                  inset 0px 1px 2px rgba(255,255,255,0.3),
                  inset 0px -2px 3px rgba(0,0,0,0.4)
                `
              }}
            >
              {/* Handle grip */}
              <div
                className={`${isMobile ? 'w-12 h-2' : 'w-16 h-3'} rounded-full bg-gradient-to-b from-gray-700 to-gray-800`}
                style={{
                  boxShadow: `
                    inset 0px -1px 2px rgba(255,255,255,0.1),
                    inset 0px 1px 2px rgba(0,0,0,0.5)
                  `
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};