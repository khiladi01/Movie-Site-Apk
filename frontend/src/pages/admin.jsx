import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Container,
  Stack,
} from "@mui/material";

function Admin() {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    releaseDate: "",
    duration: "",
    poster: "",
  });

  // Fetch Movies
  const fetchMovies = async () => {
    try {
      const res = await fetch(
        "https://cineflow-backend.onrender.com/api/movies"
      );
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ➕ Add Movie
  const handleAddMovie = async () => {
    if (!formData.title || !formData.poster) {
      alert("Title and Poster are required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://cineflow-backend.onrender.com/api/movies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Movie added successfully!");
        setFormData({
          title: "",
          description: "",
          rating: "",
          releaseDate: "",
          duration: "",
          poster: "",
        });
        fetchMovies(); // Refresh the movie list
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to add movie.");
      }
    } catch (err) {
      console.error("Add movie error:", err);
      alert("An error occurred while adding the movie.");
    }
  };

  // Delete Movie
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://cineflow-backend.onrender.com/api/movies/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Movie deleted successfully!");
        setMovies((prev) => prev.filter((m) => m._id !== id));
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to delete movie.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting the movie.");
    }
  };

  // Update Movie
  const handleUpdate = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://cineflow-backend.onrender.com/api/movies/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        alert("Movie updated successfully!");
        fetchMovies(); // Refresh the movie list
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update movie.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("An error occurred while updating the movie.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0b0b0f", py: 10 }}>
      <Container maxWidth="xl">
        {/* HEADER */}
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          CineFlow Admin Dashboard
        </Typography>
        <Typography sx={{ color: "#9ca3af", mb: 5, textAlign: "center" }}>
          From frame to feeling Cineflow
        </Typography>

        {/* ADD MOVIE FORM */}
        <Card
          sx={{
            mb: 7,
            p: 4,
            background: "linear-gradient(145deg, #111827, #020617)",
            border: "1px solid #1f2937",
            borderRadius: 3,
          }}
        >
          <Typography sx={{ color: "#f9fafb", mb: 3 }} variant="h6">
            🎞️ Add New Movie
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DarkInput
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <DarkInput
                label="Rating (8.5)"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <DarkInput
                label="Duration (2h 30m)"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <DarkInput
                type="date"
                label="Release Date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <DarkInput
                label="Poster Image URL"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <DarkInput
                multiline
                rows={3}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={handleAddMovie}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#dc2626",
                  ":hover": { backgroundColor: "#b91c1c" },
                  px: 5,
                }}
              >
                Add Movie
              </Button>
            </Grid>
          </Grid>
        </Card>

        {/* MOVIE LIST — CENTERED & SPACED */}
        <Grid container spacing={5} justifyContent="center">
          {movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.5}
              key={movie._id}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: "#020617",
                  border: "1px solid #1f2937",
                  borderRadius: 3,
                }}
                className="hover:scale-110 transition-all ease-in-out duration-500"
              >
                <CardMedia
                  component="img"
                  height="320"
                  image={movie.poster}
                  alt={movie.title}
                />

                <CardContent>
                  <Typography sx={{ color: "#f9fafb", fontWeight: 600 }}>
                    {movie.title}
                  </Typography>

                  <Typography sx={{ color: "#9ca3af", fontSize: 14 }}>
                    ⭐ {movie.rating} · ⏱ {movie.duration}
                  </Typography>

                  <Typography sx={{ color: "#9ca3af", fontSize: 13, mt: 1 }}>
                    📅 {movie.releaseDate}
                  </Typography>

                  <Typography sx={{ color: "#d1d5db", mt: 1, fontSize: 14 }}>
                    {movie.description}
                  </Typography>

                  <Stack mt={2} direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(movie._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        const updatedData = {
                          title: prompt("Enter new title", movie.title),
                          description: prompt(
                            "Enter new description",
                            movie.description
                          ),
                          rating: prompt("Enter new rating", movie.rating),
                          releaseDate: prompt(
                            "Enter new release date",
                            movie.releaseDate
                          ),
                          duration: prompt(
                            "Enter new duration",
                            movie.duration
                          ),
                          poster: prompt("Enter new poster URL", movie.poster),
                        };
                        handleUpdate(movie._id, updatedData);
                      }}
                    >
                      Update
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* 🎨 Dark Input Component */
const DarkInput = (props) => (
  <TextField
    fullWidth
    {...props}
    InputLabelProps={{ style: { color: "#9ca3af" } }}
    InputProps={{ style: { color: "#f9fafb" } }}
    sx={{
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#020617",
        "& fieldset": { borderColor: "#1f2937" },
        "&:hover fieldset": { borderColor: "#374151" },
        "&.Mui-focused fieldset": { borderColor: "#dc2626" },
      },
    }}
  />
);

export default Admin;
