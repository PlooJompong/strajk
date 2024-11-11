import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Loading = () => {
  const text: string[] = "STRAJK".split("");

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full flex-col items-center justify-center bg-lightBackgroundColor tracking-[0.03em]">
      <Link to="/booking">
        <img src={logo} alt="logo" />
      </Link>

      <h1 className="font-primary text-[80px] leading-[96px] tracking-[0.03em] text-primary">
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.05,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <p className="font-secondary text-xl leading-[23.46px] tracking-[0.43em] text-secondary">
        BOWLING
      </p>
    </div>
  );
};

export default Loading;
