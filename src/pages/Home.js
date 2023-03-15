import {
  Box,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import CityCard from "../components/CityCard";

const Home = () => {
  const [city, setCity] = useState(0);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container
      disableGutters
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#F8F9FA",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          pt: "12px",
          pb: "12px",
          backgroundColor: "#FFFFFF",
          fontSize: "23px",
        }}
      >
        Säätutka
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          pt: "12px",
          pb: "12px",
        }}
      >
        <FormControl
          sx={{
            width: { xs: "90%", sm: "65%", md: "50%", lg: "40%" },
            backgroundColor: "#FFFFFF",
          }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Kaupunki
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={city}
            onChange={handleChange}
            autoWidth
            label="Kaupunki"
          >
            <MenuItem value={0}>Kaikki kaupungit</MenuItem>
            <MenuItem value={1}>Tampere</MenuItem>
            <MenuItem value={2}>Jyväskylä</MenuItem>
            <MenuItem value={3}>Kuopio</MenuItem>
            <MenuItem value={4}>Espoo</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <CityCard />
    </Container>
  );
};

export default Home;
