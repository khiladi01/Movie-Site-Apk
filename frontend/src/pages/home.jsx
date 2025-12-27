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
        setMovies(data); // Correct state update
        console.log(data);
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
      <div className="relative h-screen w-full overflow-hidden">
        {movies.map((item, index) => (
          <div key={index} className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Movie: {item.title}</h2>
            <p className="mb-2">Description: {item.description}</p>
            <p className="mb-2">Rating: {item.rating}</p>
            <p className="mb-2">Release Date: {item.releaseDate}</p>
            <p className="mb-2">Duration: {item.duration}</p>
            <p className="mb-2">Poster: {item.poster}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
