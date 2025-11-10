import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Nav from "./DesktopNav"

export default function Header() {
  return (
    <div className="sticky top-0 h-fit py-4 lg:py-4 px-3 lg:px-6 xl:px-12 2xl:px-24">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logo-white-bg.svg"
              alt="Staten Island MMA & BJJ training"
              width={550}
              height={770}
              className="h-18 w-auto"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
    </div>
  );
}
