import { motion } from 'framer-motion';

const overlayVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 1 },
};

const TransitionOverlay = () => {
  return (
    <motion.div
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0c1650',
        zIndex: 999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default TransitionOverlay;
