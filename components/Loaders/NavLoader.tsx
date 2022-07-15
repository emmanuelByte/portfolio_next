import React from 'react';
import { useLoader } from '../../context/loadingContext';
import { AnimatePresence, motion } from 'framer-motion';
import useControls from '../../hooks/useControls';
import useInView from '../../hooks/useInView';
const NavLoader = () => {
  const { isLoading, toggleIsLoading } = useLoader();
  // const isLoading = true;
  const { ref, inView } = useInView();
  const controls = useControls(isLoading!);
  const variants = {
    visible: {
      opacity: 1,
      scaleY: [0.9, 1.05, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      scaleY: 0,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {(isLoading || isLoading == undefined) && (
        <motion.div
          className={`absolute inset-0 w-full h-full z-20 bg-secondary text-white flex items-center justify-center ${
            isLoading === undefined || isLoading ? 'fixed' : 'h-0'
          } transition-all page-nav`}
          ref={ref}
          animate={controls}
          variants={variants}
          exit="hidden"
        >
          {isLoading === undefined || (isLoading && <p>Loading...</p>)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavLoader;
