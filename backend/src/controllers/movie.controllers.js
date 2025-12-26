import Movie from "../models/movie.model.js";

export const addMovie = async (req, res) => {
  const movie = await Movie.create({
    ...req.body,
    createdBy: req.user._id,
  });

  res.status(201).json(movie);
};

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(movie);
};

export const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};

// Get movie by name
export const getMovieByName = async (req, res) => {
  const movie = await Movie.findByName(req.params.id);
    if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
};