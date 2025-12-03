"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-off-black flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-primary font-bangers text-6xl md:text-8xl mb-4">
          oops!
        </h1>
        <h2 className="text-white font-oswald text-2xl md:text-4xl mb-6">
          Something went wrong
        </h2>
        <p className="text-white/80 font-oswald text-lg mb-8 max-w-md mx-auto">
          Don&apos;t worry, even champions stumble. Let&apos;s get you back in
          the ring.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="bg-primary font-oswald text-xl px-8 py-3 rounded-md text-white hover:bg-secondary transition-colors min-w-[200px]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-white font-oswald text-xl px-8 py-3 rounded-md text-off-black hover:bg-gray-200 transition-colors min-w-[200px] flex items-center justify-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
