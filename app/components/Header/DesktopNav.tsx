"use client";

import Link from "next/link";
import { menu } from "./MobileMenu";

export default function Nav() {
  return (
    <div className="flex justify-between items-start py-10 pr-2 gap-6 lg:gap-10 xl:gap-14">
      {menu.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`font-kaushan text-[2rem] lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)] cursor-pointer }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
