const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const PageTransition = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: pageTransitionVariants,
  transition: { duration: 0.6 },  
};