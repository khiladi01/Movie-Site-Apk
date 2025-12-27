import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-xl font-semibold tracking-wide">
          CineFlow
        </h1>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/">About</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/">Contact</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/">TV</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/login">Login</Link></li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search Bar (Desktop) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block bg-white/10 text-white text-sm px-3 py-1.5 rounded-md outline-none placeholder:text-gray-400"
          />

          {/* Search Icon (Mobile) */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            🔍
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden px-6 pb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/10 text-white px-3 py-2 rounded-md outline-none placeholder:text-gray-400"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/">About</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/">Contact</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/">TV</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/login">Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
