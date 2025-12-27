import { Button, Typography, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setMovies(data); 
        console.log("Api Data:" , data , Array.isArray(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* hero section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="clip.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark background */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <Box maxWidth="md" textAlign="center" color="white">
            <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
              Experience Cinema Like Never Before
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
              Discover movies, trailers, and stories crafted for true cinema lovers.
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
              >
                Watch Trailer
              </Button>
            </Stack>
          </Box>
        </div>
      </div>

      {/* movie section */}
      <div className="relative w-full p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div key={movie.id || index} className="bg-gray-800 p-4 rounded-lg text-white hover:scale-110 transition-transform duration-800 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-sm mb-1">Description: {movie.description}</p>
              <p className="text-sm mb-1">Rating: {movie.rating}</p>
              <p className="text-sm mb-1">Release Date: {movie.releaseDate}</p>
              <p className="text-sm mb-1">Duration: {movie.duration}</p>
              <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
