const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <h2 className="text-white text-lg font-semibold tracking-wide">
            CineFlow
          </h2>

          {/* Links */}
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10"></div>

        {/* Bottom */}
        <p className="text-center text-xs">
          © {new Date().getFullYear()} CineFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
