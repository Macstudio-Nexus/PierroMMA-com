"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const menu = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Schedule", href: "/schedule" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [isShowing, setIsShowing] = useState(true);
  const pathname = usePathname();

  const onClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 bg-gradient-to-r from-off-black to-secondary/70 border-r px-4 pt-2 sm:pl-24 border-gray-400/30 h-full w-7/8 shadow-lg flex flex-col"
          >
            <div className="flex flex-col justify-between items-start pt-2 pb-12 gap-10">
              <div className="flex items-center justify-between w-full">
                <Link href="/">
                  <Image
                    src="/logo-white-bg.svg"
                    alt="Staten Island MMA & BJJ training"
                    width={550}
                    height={770}
                    className="h-18 w-auto"
                  />
                </Link>
                <button onClick={onClick} className="">
                  <X className="size-10 hover:scale-110 transition-transform duration-200 cursor-pointer text-white" />
                </button>
              </div>
              <div className="flex flex-col items-start gap-3 pl-10">
                {menu.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={`font-oswald text-3xl sm:text-6xl hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)] cursor-pointer text-white`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 pb-4">
              <a
                href="https://instagram.com/pierro_mma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.png"
                  alt="Staten Island MMA & BJJ Training"
                  width={96}
                  height={96}
                  className="size-12 sm:size-16 hover:scale-105 transition-all duration-300"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isShowing && (
        <button
          onClick={onClick}
          className="hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          <Menu className="size-12 text-gray-400/70" />
        </button>
      )}
    </div>
  );
}
