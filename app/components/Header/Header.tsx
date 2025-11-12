import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Nav from "./DesktopNav";

export default function Header() {
  return (
    <div className="fixed w-full top-0 h-[90px] z-50 py-4 lg:py-4 px-3 lg:px-6 xl:px-0 xl:py-0">
      <div className="xl:hidden flex items-center justify-between">
        <div>
          <Link href="#">
            <Image
              src="/logo-white-bg.svg"
              alt="Staten Island MMA & BJJ training"
              width={550}
              height={770}
              className="h-18 w-auto"
            />
          </Link>
        </div>
        <MobileMenu />
      </div>
      <div className="hidden xl:flex">
        <Nav />
      </div>
    </div>
  );
}
