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
          className={`font-pirata text-4xl lg:text-5xl 2xl:text-6xl hover:scale-110 transition-transform duration-200 cursor-pointer ${
            pathname === item.href ? "text-primary" : "text-secondary"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
