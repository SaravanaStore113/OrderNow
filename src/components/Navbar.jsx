import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-black text-stone-800 tracking-tight">
              Saravana Stores
            </span>
            <span className="ml-2 text-xs uppercase tracking-widest text-stone-500 font-medium hidden sm:block"></span>
          </a>

          {/* Mobile menu button */}
          <button
            className="w-8 h-8 relative cursor-pointer z-40 md:hidden focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-stone-800 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-stone-800 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-stone-800 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-stone-600 hover:text-amber-600 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#LuckyDraw"
              className="text-stone-600 hover:text-amber-600 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Lucky Draw
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-stone-600 hover:text-amber-600 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-30 flex flex-col items-center justify-center space-y-8 pt-20">
          <a
            href="#home"
            className="text-2xl font-medium text-stone-800 hover:text-amber-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#LuckyDraw"
            className="text-2xl font-medium text-stone-800 hover:text-amber-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Lucky Draw
          </a>
          <a
            href="#contact"
            className="text-2xl font-medium text-stone-800 hover:text-amber-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
