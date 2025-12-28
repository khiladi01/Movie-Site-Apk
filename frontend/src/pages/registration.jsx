import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User Registration Successful!");
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
      } else {
        alert(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration POST error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #000000, #1c1c1c)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 450,
          p: 4,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: 3,
          color: "#fff",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Join CineFlow 🎥
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "gray", mb: 3 }}
        >
          Create your account and step into cinema
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Role"
            type="text"
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sx={{
              mt: 3,
              py: 1.2,
              backgroundColor: "#e50914",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#b20710",
              },
            }}
          >
            Register
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ mt: 3, color: "gray" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#e50914", textDecoration: "none" }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
