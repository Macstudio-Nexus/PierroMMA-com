"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-between items-start py-10 gap-6 lg:gap-10 xl:gap-14">
      {menu.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`font-pirata text-4xl lg:text-5xl 2xl:text-6xl hover:drop-shadow-[0px_0px_9px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer ${
            pathname === item.href ? "text-black drop-shadow-[0px_0px_9px_rgba(0,0,0,0.3)]" : "text-secondary"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
