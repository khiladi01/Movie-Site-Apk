import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch(
          "https://cineflow-backend.onrender.com/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Navbar user fetch error:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold tracking-wide">
          CineFlow
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white text-sm items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">TV</Link>
          </li>

          {user ? (
            <>
              <li className="hover:text-gray-300">
                <Link to="/profile" className="font-medium">
                  Hi, {user.name}
                </Link>
              </li>
              <li
                onClick={handleLogout}
                className="cursor-pointer text-red-400 hover:text-red-500"
              >
                Logout
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block bg-white/10 text-white text-sm px-3 py-1.5 rounded-md outline-none"
          />

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            🔍
          </button>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li onClick={() => setOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/">About</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/">Contact</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/">TV</Link>
            </li>

            {user ? (
              <>
                <li onClick={() => setOpen(false)}>
                  <Link to="/profile">Hi, {user.name}</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                  className="text-red-400"
                >
                  Logout
                </li>
              </>
            ) : (
              <li onClick={() => setOpen(false)}>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
