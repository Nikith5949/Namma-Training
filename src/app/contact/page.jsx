"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim() || !nameRegex.test(value)) {
        error =
          "Name should only contain alphabets and spaces (no numbers/special characters).";
      }
    }

    if (name === "email") {
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    }

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        error =
          "Enter a valid Indian phone number (10 digits, starts with 6-9).";
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message cannot be empty.";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // validate live while typing
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = (e) => {
    // if any error exists, stop form submit
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      tempErrors[field] = validateField(field, formData[field]);
    });
    setErrors(tempErrors);

    if (Object.values(tempErrors).some((err) => err)) {
      e.preventDefault();
      return;
    }

    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        overflow: "hidden",
        p: 3,
      }}
    >
      {/* Ambient blurred circles for Apple-like effect */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          top: "10%",
          left: "15%",
          filter: "blur(80px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          bottom: "10%",
          right: "10%",
          filter: "blur(100px)",
        }}
      />

      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 4,
          borderRadius: 6,
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          color: "#fff",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}
          >
            📞 Reach us at{" "}
            <Typography component="span" fontWeight="bold">
              9000000000
            </Typography>
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>
              ✅ Your form is valid and ready to submit!
            </Alert>
          )}

          <form
            action="https://formsubmit.co/fitnessmandnquest@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you"
            />

            <TextField
              label="Full Name"
              name="name"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                sx: {
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.2)",
                  input: { color: "#fff" },
                },
              }}
              InputLabelProps={{ style: { color: "#ddd" } }}
            />
            <TextField
              label="Email Address"
              type="email"
              name="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                sx: {
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.2)",
                  input: { color: "#fff" },
                },
              }}
              InputLabelProps={{ style: { color: "#ddd" } }}
            />
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              fullWidth
              required
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              InputProps={{
                sx: {
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.2)",
                  input: { color: "#fff" },
                },
              }}
              InputLabelProps={{ style: { color: "#ddd" } }}
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              margin="normal"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{
                sx: {
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.2)",
                  textarea: { color: "#fff" },
                },
              }}
              InputLabelProps={{ style: { color: "#ddd" } }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 4,
                fontSize: "1rem",
                textTransform: "none",
                background: "linear-gradient(135deg, #ff9966, #ff5e62)",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff5e62, #ff9966)",
                },
              }}
            >
              ✉️ Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
