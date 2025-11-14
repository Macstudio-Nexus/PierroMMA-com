import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-4 border border-primary rounded-md font-oswald text-white text-lg w-full">
      <div className="flex items-center gap-3">
        <Mail />
        <a href="mailto:info@pierromma.com">info@pierromma.com</a>
      </div>
      <div className="flex items-center gap-3">
        <Phone />
        <a href="tel:6469232215">+1 646-923-2215</a>
      </div>
      <div className="flex items-center gap-3">
        <MapPin />
        <a href="mailto:info@pierromma.com">info@pierromma.com</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://instagram.com/pierro_mma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <Image
            src="/instagram.png"
            alt="Staten Island MMA & BJJ Training"
            width={96}
            height={96}
            className="size-6 lg:size-8 hover:scale-105 transition-all duration-300"
          />
          @pierro_mma
        </a>
      </div>
    </div>
  );
}
