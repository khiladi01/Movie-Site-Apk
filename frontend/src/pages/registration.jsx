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
        <Box component="form">
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Role"
            type="text"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
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
