import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("POST Response Data:", data);

      if (response.ok) {
        alert("Login successful!");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login POST error:", error);
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
          maxWidth: 420,
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
          Welcome Back 🎬
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "gray", mb: 3 }}
        >
          Login to continue your cinema journey
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleLogin}>
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
            Login
          </Button>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Registration Links */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
            New here?
          </Typography>

          <Box display="flex" justifyContent="center" gap={2}>
            <Link to="/registration" style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                sx={{ color: "#e50914", fontWeight: 500 }}
              >
                Registration
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ mt: 3, color: "gray" }}
        >
          Lights. Camera. Login.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
