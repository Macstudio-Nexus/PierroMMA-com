import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Nav from "./DesktopNav";

export default function Header() {
  return (
    <div className="z-100 w-full h-[90px] py-4 lg:py-4 px-3 lg:px-6 xl:px-0 xl:py-0 bg-secondary/25">
      <div className="xl:hidden flex items-center justify-between">
        <div>
          <Link href="#">
            <Image
              src="/logo-white-bg.webp"
              alt="Staten Island MMA & BJJ training"
              width={279}
              height={397}
              className="h-20 w-auto"
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
