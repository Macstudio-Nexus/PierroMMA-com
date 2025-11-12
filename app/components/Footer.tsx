import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const apiKey = process.env.MAPS_API_KEY;
  const address = "3801 Victory Blvd Suite G, Staten Island, NY 10314";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="bg-secondary/30 text-white py-2 text-center font-oswald flex flex-col items-center justify-center gap-1">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-around w-full">
        <div className="flex items-center justify-center w-9/10 lg:w-3/5 2xl:w-2/5 py-4">
          <iframe
            title="Pierro MMA Location"
            width="100%"
            height="400"
            className=""
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          />
        </div>
        <div className="flex justify-center">
          <Link href="#">
            <Image
              src="/logo-white-bg.svg"
              alt="Staten Island MMA & BJJ training"
              width={550}
              height={770}
              className="h-50 lg:h-70 w-auto"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary" />
      <div className="flex items-center justify-between w-full px-3">
        <p className="!text-sm">
          &copy; {new Date().getFullYear()} Pierro MMA. All rights reserved.
        </p>
        <a
          href="https://craigsampson.com"
          target="_blank"
          rel="noopener noreferrer author nofollow"
          className="cursor-pointer !text-sm font-light hover:text-primary hover:underline"
        >
          Managed by CS
        </a>
      </div>
    </div>
  );
}
