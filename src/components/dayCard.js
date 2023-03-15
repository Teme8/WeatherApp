import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const DayCard = () => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
    const [wList, setWlist] = useState([]);
    const cities = [
      {
        lat: "61.4991",
        lng: "23.7871",
      },
      { lat: "62.2415", lng: "25.7209" },
      { lat: "62.8924", lng: "27.677" },
      { lat: "60.25", lng: "24.6667" },
    ];
    const weatherList = [];
    const tempData = [
      {
        temperature: "2",
        time: "19:12",
        wind: "3.1 m/s",
        humidity: "86 %",
        precipitation: "10 mm",
      },
      {
        temperature: "2",
        time: "21:12",
        wind: "3.1 m/s",
        humidity: "86 %",
        precipitation: "10 mm",
      },
      {
        temperature: "2",
        time: "20:12",
        wind: "3.1 m/s",
        humidity: "86 %",
        precipitation: "10 mm",
      },
      {
        temperature: "2",
        time: "18:12",
        wind: "3.1 m/s",
        humidity: "86 %",
        precipitation: "10 mm",
      },
      {
        temperature: "2",
        time: "18:12",
        wind: "3.1 m/s",
        humidity: "86 %",
        precipitation: "10 mm",
      },
    ];
  
    /* const getCurrentWeather = async () => {
          cities.map(async function (results) {
              await fetch(baseUrl + `?lat=${results.lat}&lon=${results.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
              .then((response) => response.json())
              .then((data) => createWeatherList(data))
          })
      }
  
      if (wList.length === 0) {
          getCurrentWeather()
      }
      const createWeatherList = (weather) => {
          weatherList.push(weather)
          if (weatherList.length === 3) {
          setWlist(weatherList)
      }
      }*/
  
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          mb: 0.5,
        }}
      >
        {tempData.length >= 3 &&
          tempData.map(function (results) {
            return (
              <Card
                key={results.name}
                sx={{
                  width: {
                    xs: "90%",
                    sm: "65%",
                    md: "50%",
                    lg: "40%",
                  }
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography
                    sx={{
                      padding: 1,
                      fontSize: "13px",
                    }}
                  >
                    {results.time}
                  </Typography>
                  <CardMedia
                      component="img"
                      height="70"
                      image="https://i.ibb.co/M2NLtMx/image-not-available-wide3.png"
                      alt="Weather icon"
                    />
                  <Typography
                    sx={{
                      padding: 1,
                      fontSize: "15x",
                      color: "#70757A"
                    }}
                  >
                    {results.temperature + "°C"}
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#70757A",
                      backgroundColor: "#E5F6FD"
                    }}
                  >
                    {"Wind: " + results.wind}
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#70757A",
                        backgroundColor: "#E5F6FD"
                      }}
                    >
                      {"Humidity: " + results.humidity}
                      <Typography
                        sx={{
                          fontSize: "10px",
                          color: "#70757A",
                          backgroundColor: "#E5F6FD"
                        }}
                      >
                        {"Precipitation (3 h): " + results.precipitation}
                      </Typography>
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </Box>
    );
  };
  
  export default DayCard;
  