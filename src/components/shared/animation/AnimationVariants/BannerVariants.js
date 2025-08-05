// ✅ Just a function — not a component
const BannerVariants = (shouldReduceMotion = false) => {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0.3 }
          : {
              staggerChildren: 0.12,
              delayChildren: 0.2,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 40,
        scale: shouldReduceMotion ? 1 : 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0.3 : 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    glow: {
      animate: {
        opacity: shouldReduceMotion ? 0.1 : [0.05, 0.15, 0.05],
        scale: shouldReduceMotion ? 1 : [1, 1.1, 1],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };
};

export default BannerVariants;

export const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  item: {
    hidden: {
      opacity: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  glow: {
    animate: {
      opacity: [0.05, 0.15, 0.05],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};
