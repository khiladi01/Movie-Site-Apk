import { Button, Typography, Box, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import dhuback from "../assets/video/dhuback.mp4";
import rajababuvideo from "../assets/video/rajababu.mp4";
import bordervideo from "../assets/video/Border2.mp4";
import ramayanavideo from "../assets/video/Ramayana.mp4";
import toxicvideo from "../assets/video/Toxic.mp4";

function User() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cineflow-backend.onrender.com/api/movies",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setMovies(data);
        console.log("Api Data:", data, Array.isArray(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlers = () => {
    alert("Movie cannot be played yet. Coming soon");
  }

  return (
    <>
      {/* hero section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}

        <video
          src={dhuback}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark background */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <Box maxWidth="md" textAlign="center" color="white">
            <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
              Experience Cinema Like Never Before
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
              Browse movies watch teasers and book tickets in one place CineFlow
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#000",
                  "&:hover": { backgroundColor: "#e5e5e5" },
                }}
                onClick={() => {
                  const element = document.getElementById("movie-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Movies
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#ccc",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() => {
                  const element = document.getElementById("tv-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Watch Trailer
              </Button>
            </Stack>
          </Box>
        </div>
      </div>

      {/* movie section */}
      <div id="movie-section" className="relative w-full p-8 bg-black">
        <div onClick={handlers} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={movie.id || index}
              className="bg-gray-800 p-4 rounded-lg text-white hover:scale-110 transition-transform duration-800 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-sm mb-1">Description: {movie.description}</p>
              <p className="text-sm mb-1">Rating: {movie.rating}</p>
              <p className="text-sm mb-1">Release Date: {movie.releaseDate}</p>
              <p className="text-sm mb-1">Duration: {movie.duration}</p>
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-auto rounded mt-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* tv section */}
      <div id="tv-section" className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black z-0" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/grain.png')] pointer-events-none z-10" />

        {/* Section Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          className="relative z-20"
          sx={{
            mb: 6,
            color: "white",
            textAlign: "center",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Next Big Release
        </Typography>

        {/* TV Frame */}
        <div className="relative z-20 h-screen w-[65%] rounded-xl overflow-hidden bg-black">
          {/* Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 blur-lg opacity-40 animate-pulse z-0" />

          {/* TV Body */}
          <div
            className="relative z-10 w-full h-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-xl overflow-hidden flex items-center justify-center"
            style={{
              border: "12px solid #1f1f1f",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.9), inset 0 0 40px rgba(0,0,0,0.8)",
            }}
          >
            {/* Back Video */}
            <video
              src={rajababuvideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-230 h-132 rounded-lg object-cover scale-[1.02]"
            />

            {/* Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none z-20" />
          </div>
        </div>

        {/* Sub text */}
        <p className="relative z-20 mt-6 text-gray-400 tracking-widest text-sm uppercase">
          Experience it first • Only in cinemas
        </p>
      </div>

      {/* Upcoming movie section */}
      <div className="relative w-full p-6 md:p-8 bg-black">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "white", textAlign: "center" }}
        >
          Coming Soon to the Big Screen
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, color: "white", textAlign: "center" }}
        >
          1/4
        </Typography>

        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
          {/* image */}
          <div className="w-full lg:w-[500px] shadow-lg shadow-red-400">
            <video
              src={bordervideo}
              autoPlay
              loop
              muted
              className="w-full h-auto lg:h-[400px] rounded-lg"
              style={{
                border: "10px solid #333",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* text */}
          <div className="w-full lg:w-[500px] grid gap-6 text-center lg:text-left">
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-white">
              border 2
            </h1>
            <p className="text-base md:text-lg text-white">
              Decades after the legendary battle, Border 2 returns with a
              powerful story of modern warfare, brotherhood, and sacrifice.
              Inspired by real events, the film blends intense action with deep
              emotion, honoring the bravery of Indian soldiers who stand
              fearless at the nation’s edge. The legacy continues — louder,
              stronger, and more personal than ever
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e5e5e5", color: "#000" },
                }}
              >
                Book Your Tickets Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 2/4 */}

      <div className="relative w-full p-6 md:p-8 bg-black">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, color: "white", textAlign: "center" }}
        >
          2/4
        </Typography>

        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
          {/* text */}
          <div className="w-full lg:w-[500px] grid gap-6 text-center lg:text-left">
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-white">
              ramayana
            </h1>
            <p className="text-base md:text-lg text-white">
              Ramayana brings the timeless story of duty, devotion, and
              righteousness to life on the big screen. Inspired by ancient
              tradition and presented with modern cinematic visuals, the film
              follows the journey of Lord Rama, Sita, and Lakshman as they face
              darkness with courage, faith, and unwavering belief. More than
              just a film, Ramayana is a powerful retelling of a story that
              lives in history, culture, and the hearts of millions
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e5e5e5", color: "#000" },
                }}
              >
                Book Your Tickets Now
              </Button>
            </div>
          </div>

          {/* image */}
          <div className="w-full lg:w-[500px] shadow-lg shadow-red-400">
            <video
              src={ramayanavideo}
              autoPlay
              loop
              muted
              className="w-full h-auto lg:h-[400px] rounded-lg"
              style={{
                border: "10px solid #333",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* 3/4 */}

      <div className="relative w-full p-6 md:p-8 bg-black">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, color: "white", textAlign: "center" }}
        >
          3/4
        </Typography>

        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
          {/* image */}
          <div className="w-full lg:w-[500px] shadow-lg shadow-red-400">
            <video
              src={toxicvideo}
              autoPlay
              loop
              muted
              className="w-full h-auto lg:h-[400px] rounded-lg"
              style={{
                border: "10px solid #333",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* text */}
          <div className="w-full lg:w-[500px] grid gap-6 text-center lg:text-left">
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-white">
              toxic
            </h1>
            <p className="text-base md:text-lg text-white">
              Toxic is a gritty and powerful story that dives into the dark side
              of ambition, power, and broken relationships. Set in a harsh and
              unforgiving world, the film follows a man caught in a cycle of
              violence, obsession, and emotional chaos, where every choice comes
              at a cost. With raw performances and a tense atmosphere, Toxic
              promises a bold cinematic experience that explores how far a
              person can fall when their world turns poisonous
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e5e5e5", color: "#000" },
                }}
              >
                Book Your Tickets Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 4/4 */}

      <div className="relative w-full p-6 md:p-8 bg-black">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 4, color: "white", textAlign: "center" }}
        >
          4/4
        </Typography>

        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
          {/* text */}
          <div className="w-full lg:w-[500px] grid gap-6 text-center lg:text-left">
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-white">
              the raja saab
            </h1>
            <p className="text-base md:text-lg text-white">
              The Raja Saab is an entertaining mix of romance, comedy, and
              mystery set against a grand backdrop. The film follows a charming
              and carefree man whose life takes an unexpected turn when he steps
              into a world filled with secrets, emotions, and surprising twists.
              With humor, heart, and a touch of the supernatural, The Raja Saab
              promises a colorful cinematic ride that blends fun moments with
              engaging storytelling
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e5e5e5", color: "#000" },
                }}
              >
                Book Your Tickets Now
              </Button>
            </div>
          </div>

          {/* image */}
          <div className="w-full lg:w-[500px] shadow-lg shadow-red-400">
            <video
              src={rajababuvideo}
              autoPlay
              loop
              muted
              className="w-full h-auto lg:h-[400px] rounded-lg"
              style={{
                border: "10px solid #333",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* connect with us */}
      <div>
        <Box
          sx={{
            width: "100%",
            py: { xs: 6, md: 10 },
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: "600px",
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#fff", letterSpacing: "2px" }}
            >
              CONNECT WITH US
            </Typography>

            {/* Subtitle */}
            <Typography sx={{ color: "#aaa" }}>
              Subscribe to get notifications about upcoming movies, trailers,
              and exclusive updates
            </Typography>

            {/* Email + Button */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  backgroundColor: "#111",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#333",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  px: 4,
                  backgroundColor: "red",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: "#e5e5e5",
                    color: "#000",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default User;
