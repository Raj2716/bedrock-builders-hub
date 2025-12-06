import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// Fade up animation
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Scale up animation
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

// Bounce in animation
export const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

// Stagger children container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Image reveal animation
export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Hero text animation
export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const FadeUp = ({ children, className, delay = 0, duration = 0.6 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUpVariants}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className, delay = 0, duration = 0.5 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInVariants}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

export const ScaleUp = ({ children, className, delay = 0, duration = 0.5 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={scaleUpVariants}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className, delay = 0, duration = 0.6 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={slideInLeftVariants}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className, delay = 0, duration = 0.6 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={slideInRightVariants}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const BounceIn = ({ children, className, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={bounceInVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainerVariants}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={fadeUpVariants}
  >
    {children}
  </motion.div>
);

export const HoverScale = ({ children, className, scale = 1.05 }: { children: ReactNode; className?: string; scale?: number }) => (
  <motion.div
    className={className}
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

export const ImageReveal = ({ children, className, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={imageRevealVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const HeroText = ({ children, className, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={heroTextVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    initial={{ scale: 1.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />
);

// Button with press animation
export const AnimatedButton = ({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <motion.button
    className={className}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// Counter animation for stats
export const CounterAnimation = ({ value, suffix = "", className }: { value: string; suffix?: string; className?: string }) => (
  <motion.span
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {value}{suffix}
  </motion.span>
);
