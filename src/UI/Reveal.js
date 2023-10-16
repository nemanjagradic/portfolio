import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, hidden, visible, delay, className }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: hidden,
        visible: visible,
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
