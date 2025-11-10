import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  link: string;
}

export default function PrimaryButton({ text, link }: PrimaryButtonProps) {
  return (
    <Link
      href={link}
      className="bg-primary font-oswald text-xl px-8 py-2 rounded-md"
    >
      {text}
    </Link>
  );
}
