export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-red-500">Farhan</span> Dev
        </h1>

        <ul className="flex gap-6 text-sm">
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
          <li><a href="#about" className="hover:text-white/70">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
