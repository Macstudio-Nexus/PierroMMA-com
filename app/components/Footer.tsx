import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const apiKey = process.env.MAPS_API_KEY;
  const address = "3801 Victory Blvd Suite G, Staten Island, NY 10314";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="bg-secondary/30 text-white text-center font-oswald flex flex-col items-center justify-center gap-1 px-2">
      <div className="flex flex-col md:flex-row items-center lg:justify-around w-full md:px-6 lg:px-30 py-20">
        <div className="flex flex-col items-center md:items-start w-full gap-2 pb-10">
          <div className="flex justify-center">
            <Link href="#">
              <Image
                src="/logo-white-bg.svg"
                alt="Staten Island MMA & BJJ training"
                width={550}
                height={770}
                className="h-40 lg:h-50 w-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-bangers text-5xl tracking-wide">
              pierro mma
            </span>
            <p>Staten Island&apos;s premier mixed martial arts team</p>
            <div className="flex items-center justify-center gap-3">
              <Phone className="size-5" />
              <a
                href="tel:+16469232215"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                +1 646-923-2215
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="size-5" />
              <a
                href="mailto:jophnnypierro7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                johnnypierro7@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="size-5" />
              <a
                href="https://www.google.com/maps/dir//Pierro+MMA,+3801+Victory+Blvd+Suite+G,+Staten+Island,+NY+10314/@40.5633014,-74.2322601,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c24d77f05f374f:0x5994e066c6144d0e!2m2!1d-74.1828036!2d40.5973185!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D"
                className="font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                3810 Victory blvd ste G, Staten Island, NY 10314
              </a>
            </div>
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
                className="size-6 lg:size-8 hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:max-w-4xl h-full">
          <iframe
            title="Pierro MMA Location"
            width="100%"
            height="400"
            className="rounded-md"
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary" />
      <div className="flex items-center justify-between w-full px-3 pb-2 pt-1">
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
