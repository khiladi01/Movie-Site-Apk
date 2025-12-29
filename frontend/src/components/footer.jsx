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
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a href="tel:9142158588" className="hover:text-white transition">
                📞 9142158588
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/919142158588"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                💬 WhatsApp
              </a>
            </li>

            <li>
              <a
                href="mailto:itzdeveloper786@gmail.com"
                className="hover:text-white transition"
              >
                📧 Email
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/itzdeveloper786/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                📸 Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/itzdeveloper786/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                🐦 Twitter
              </a>
            </li>
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
