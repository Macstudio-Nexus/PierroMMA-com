import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./Menu";
import Nav from "./Nav"

export default function Header() {
  return (
    <div className="h-fit border-b-1 border-secondary shadow-lg py-2 lg:py-4 px-3 lg:px-6 xl:px-12 2xl:px-24">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Staten Island MMA & BJJ training"
              width={550}
              height={770}
              className="h-20 sm:h-22 lg:h-28 xl:h-34 2xl:h-38 w-auto"
            />
          </Link>
        </div>
        <div className="mr-auto">
          <span className="font-kaushan text-3xl lg:text-4xl xl:text-5xl drop-shadow-[1px_2px_0px_rgba(208,65,64,0.3)]">Pierro MMA</span>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:flex">
          <Nav />
        </div>
      </div>
    </div>
  );
}
