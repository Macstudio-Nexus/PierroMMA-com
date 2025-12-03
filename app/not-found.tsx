import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-black flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-primary font-bangers text-8xl md:text-9xl mb-4">
          404
        </h1>
        <h2 className="text-white font-oswald text-2xl md:text-4xl mb-6">
          Page Not Found
        </h2>
        <p className="text-white/80 font-oswald text-lg mb-8 max-w-md mx-auto">
          Looks like you wandered into the wrong corner. Let&apos;s get you back
          to the gym.
        </p>
        <Link
          href="/"
          className="bg-primary font-oswald text-xl px-8 py-3 rounded-md text-white hover:bg-secondary transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
