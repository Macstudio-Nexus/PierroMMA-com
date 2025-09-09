import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 font-cinzel">
      <Image src="/LogoWords.png" alt="Pierro MMA Logo" width={503} height={269} className="h-40"/>
      <h2 className="text-2xl text-white text-center mt-4">Site coming soon!</h2>
    </div>
  );
}
