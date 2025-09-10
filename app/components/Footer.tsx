export default function Footer() {
  return (
    <div className="bg-white border-t text-black py-2 md:py-4 font-cinzel font-bold text-center">
      <p className="text-sm sm:text-lg">&copy; {new Date().getFullYear()} Pierro MMA. All rights reserved.</p>
      <a href="https://macstudionexus.com" className="cursor-pointer text-xs md:text-sm font-schibsted hover:text-primary hover:underline">Managed by Macstudio Nexus</a>
    </div>
  );
}
