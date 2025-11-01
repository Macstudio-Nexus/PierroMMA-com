export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-off-black to-secondary text-white py-2 text-center">
      <p className="text-sm sm:text-lg">
        &copy; {new Date().getFullYear()} Pierro MMA. All rights reserved.
      </p>
      <a
        href="https://macstudionexus.com"
        target="_blank"
        rel="noopener noreferrer author nofollow"
        className="cursor-pointer text-xs md:text-sm font-schibsted hover:text-primary hover:underline"
      >
        Managed by Macstudio Nexus
      </a>
    </div>
  );
}
