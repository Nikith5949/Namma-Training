"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
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

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      tempErrors[field] = validateField(field, formData[field]);
    });
    setErrors(tempErrors);

    if (Object.values(tempErrors).some((err) => err)) {
      return;
    }

    const form = e.target;
    const submitData = new FormData(form);

    fetch("https://formsubmit.co/fitnessmandnquest@gmail.com", {
      method: "POST",
      body: submitData,
      headers: { Accept: "application/json" },
    })
      .then(() => {
        alert("Thank you! The staff will be with you shortly.");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Form submission error:", error);
        alert("Thank you! The staff will be with you shortly.");
        window.location.reload();
      });
  };

  return (
    <div className="bg-[var(--theme-bgcolor)] text-[var(--theme-color)] min-h-screen w-full pt-25">
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Contact Stryv Fit
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "var(--theme-color)",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              Ready to transform your fitness journey? Get in touch with us
              today!
            </Typography>
          </Box>

          {/* Main Content Grid */}
          <Grid
            container
            spacing={4}
            sx={{ mb: 4, justifyContent: "center", alignItems: "center" }}
          >
            {/* Location & Info Section */}
            <Grid item xs={12} lg={6} sx={{ px: 2 }}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  color: "var(--theme-color)",
                  height: "fit-content",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    textAlign: "center",
                  }}
                >
                  Visit Our Gym
                </Typography>

                <Box sx={{ mb: 3, borderRadius: 3, overflow: "hidden" }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=12.99847575274743,77.71763229703619"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.87544270778!2d77.71763229703619!3d12.99847575274743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzU0LjUiTiA3N8KwNDMnMDMuNSJF!5e0!3m2!1sen!2sin!4v1698843982342!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0, pointerEvents: "none" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </a>
                </Box>

                <Box sx={{ mb: 3, textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    📍 Our Location
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    📞 Quick Contact
                  </Typography>
                  <Typography sx={{ color: "var(--theme-color)", mb: 1 }}>
                    <strong>Phone:</strong> 9000000000
                  </Typography>
                  <Typography sx={{ color: "var(--theme-color)", mb: 1 }}>
                    <strong>Email:</strong> fitnessmandnquest@gmail.com
                  </Typography>
                  <Typography sx={{ color: "var(--theme-color)" }}>
                    <strong>Hours:</strong> Mon-Sat 6:00 AM - 11:00 PM | Sun
                    7:00 AM - 9:00 PM
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Contact Form Section */}
            <Grid item xs={12} lg={6} sx={{ px: 2 }}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  color: "#fff",
                  width: "100%",
                }}
              >
                <CardContent sx={{ p: 0, textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      mb: 3,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      mx: 0,
                      color: "var(--theme-color)",
                    }}
                  >
                    Send us a Message
                  </Typography>

                  <Typography
                    variant="body1"
                    align="center"
                    sx={{
                      mb: 4,
                      color: "var(--theme-color)",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Have questions about memberships, personal training, or
                    group classes? We'd love to hear from you!
                  </Typography>

                  <form onSubmit={handleSubmit}>
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
                        py: { xs: 1.5, md: 2 },
                        borderRadius: 4,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        textTransform: "none",
                        background: "linear-gradient(135deg, #ff9966, #ff5e62)",
                        color: "#fff",
                        fontWeight: "bold",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #ff5e62, #ff9966)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      ✉️ Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Ambient background effects */}
          <Box
            sx={{
              position: "fixed",
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              top: "10%",
              left: "15%",
              filter: "blur(80px)",
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: "fixed",
              width: { xs: 250, md: 400 },
              height: { xs: 250, md: 400 },
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              bottom: "10%",
              right: "10%",
              filter: "blur(100px)",
              zIndex: -1,
            }}
          />
        </Box>
      </Container>
    </div>
  );
}
