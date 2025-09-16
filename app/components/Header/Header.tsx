import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./Menu";
import Nav from "./Nav"

export default function Header() {
  return (
    <div className="h-fit border-b-1 border-secondary shadow-lg py-6 px-3 lg:px-6 xl:px-12 2xl:px-24">
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
          <Image
            src="/words-horizontal.png"
            alt="Staten Island MMA & BJJ training"
            width={923}
            height={163}
            className="h-9 sm:h-11 lg:h-12 xl:h-13 2xl:h-15 w-auto"
          />
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
