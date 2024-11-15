import { motion } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
};

const Transition: React.FC<TransitionProps> = ({
  children,
}: TransitionProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
