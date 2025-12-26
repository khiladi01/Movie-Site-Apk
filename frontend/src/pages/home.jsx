import { Button, Typography, Box, Stack } from "@mui/material";

function Home() {
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
            
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              Experience Cinema Like Never Before
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: "gray" }}
            >
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
           
      </div>
    </>
  );
}

export default Home;
