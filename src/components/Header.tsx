import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../assets/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const backgroundAnimation = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1,
    },
  };

  const toggleOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-lightBackgroundColor">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-[0.875rem]">
                <li>
                  <Link
                    to="/booking"
                    className="font-primary text-[1.875rem] tracking-wider text-primary transition hover:text-primary/60"
                  >
                    Booking
                  </Link>
                </li>

                <li>
                  <Link
                    to="/confirmation"
                    className="font-primary text-[1.875rem] tracking-wider text-primary transition hover:text-primary/60"
                  >
                    Confirmation
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="z-20 block md:hidden">
              <button onClick={toggleOpen}>
                <img src={menu} alt="menu" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-8 bg-darkBackgroundColor font-primary text-4xl font-bold tracking-wider text-primary md:hidden"
            variants={backgroundAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/booking"
              className="cursor-pointer transition-all hover:scale-110"
              onClick={toggleOpen}
            >
              BOOKING
            </Link>

            <Link
              to="/confirmation"
              className="cursor-pointer transition-all hover:scale-110"
              onClick={toggleOpen}
            >
              CONFIRMATION
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
