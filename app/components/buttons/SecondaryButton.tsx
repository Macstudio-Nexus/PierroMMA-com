import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  link: string;
}

export default function PrimaryButton({ text, link }: PrimaryButtonProps) {
  return (
    <Link
      href={link}
      className="bg-off-black text-white border border-primary/80 font-oswald text-xl px-8 py-2 rounded-md hover:scale-105 transition duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
}
