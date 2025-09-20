"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu() {
  const [isShowing, setIsShowing] = useState(false);
  const pathname = usePathname();

  const onClick = () => {
    setIsShowing(!isShowing);
  };

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bg-white border-l pl-6 sm:pl-24 py-8 border-b border-secondary h-fit w-5/8 shadow-lg flex flex-col"
          >
            <button onClick={onClick} className="self-end pt-1 pr-3">
              <X
                className="size-14 sm:size-18 hover:scale-110 transition-transform duration-200 cursor-pointer"
              />
            </button>
            <div className="flex flex-col justify-between items-start pt-6 pb-12 gap-7">
              {menu.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`font-kaushan text-5xl sm:text-6xl hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)] cursor-pointer ${
                    pathname === item.href ? "text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]" : "text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-xl sm:text-2xl">
              <p className="font-montserrat">Johnny Pierro</p>
              <p className="font-montserrat font-bold">+1 (646) 923-2215</p>
            </div>
            <div className="pt-8 pb-4">
              <a href="https://instagram.com/pierro_mma" target="_blank" rel="noopener noreferrer">
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
          <Menu className="size-14 sm:size-18 " />
        </button>
      )}
    </div>
  );
}
