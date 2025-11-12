"use client";

import Link from "next/link";
import Image from "next/image";
import { desktopMenu } from "@/app/data/menuData";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState, useEffect } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full overflow-visible">
        <div className="flex justify-between items-center w-full bg-off-black h-fit p-4">
          <div className="w-[120px]">
            <a
              href="https://instagram.com/pierro_mma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/instagram.png"
                alt="Staten Island MMA & BJJ Training"
                width={96}
                height={96}
                className="size-8 lg:size-10 hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
          <div className="w-[315px] text-right pr-4">
            <span className="text-5xl text-white font-bangers">pierro mma</span>
          </div>
          <div className="flex flex-col items-start pl-4">
            <p>+1 718 777-7777</p>
            <p>3801 Victory Blvd, suite G, Staten Island, NY 10314</p>
          </div>
          <div>
            <PrimaryButton text="Contact" link="#contact" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 w-full bg-white h-10 py-1 overflow-visible">
          <div className="grid grid-cols-[1fr_0.5fr_1fr] w-full font-oswald text-2xl items-center">
            <div className="flex justify-end gap-32">
              <Link
                href={desktopMenu[0].href}
                className={
                  activeSection === desktopMenu[0].href.replace("#", "")
                    ? "text-primary"
                    : "text-black"
                }
              >
                {desktopMenu[0].name}
              </Link>
              <Link
                href={desktopMenu[1].href}
                className={
                  activeSection === desktopMenu[1].href.replace("#", "")
                    ? "text-primary"
                    : "text-black"
                }
              >
                {desktopMenu[1].name}
              </Link>
            </div>

            <div className="flex justify-center">
              <Link href="#">
                <Image
                  src="/logo-white-bg.svg"
                  alt="Staten Island MMA & BJJ training"
                  width={550}
                  height={770}
                  className="h-36 w-auto"
                />
              </Link>
            </div>

            <div className="flex justify-start gap-32">
              <Link
                href={desktopMenu[2].href}
                className={
                  activeSection === desktopMenu[2].href.replace("#", "")
                    ? "text-primary"
                    : "text-black"
                }
              >
                {desktopMenu[2].name}
              </Link>
              <Link
                href={desktopMenu[3].href}
                className={
                  activeSection === desktopMenu[3].href.replace("#", "")
                    ? "text-primary"
                    : "text-black"
                }
              >
                {desktopMenu[3].name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
