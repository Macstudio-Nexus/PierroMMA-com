import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-4 border border-primary rounded-md font-oswald text-white text-lg w-full">
      <div className="flex items-center gap-3">
        <Phone className="shrink-0" />
        <a href="tel:6469232215">+1 646-923-2215</a>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="shrink-0" />
        <a href="mailto:info@pierromma.com">info@pierromma.com</a>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="shrink-0" />
        <a
          target="_blank"
          href="https://www.google.com/maps/dir//3801+Victory+Blvd+Suite+G+Staten+Island,+NY+10314/@40.5973185,-74.1828036,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c24c9029eaaaab:0x9bf868165dc96954"
        >
          3801 Victory blvd ste G, Staten Island, NY 10314
        </a>
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
            className="size-6 hover:scale-105 transition-all duration-300"
          />
          @pierro_mma
        </a>
      </div>
    </div>
  );
}
