/**
 * @Author Teemu Tirkkonen
 * Card component for displaying weather info every three hours. Used in CityCard.js
 */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
/**
 * @param {number} lat latitude of the city
 * @param {number} lng longitude of the city
 * @returns city card component
 */
const DayCard = ({ lat, lng }) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
  const [wList, setWlist] = useState([]);
  const weatherList = [];
  // Gets the data from OpenWeatherMap API based on lat & lng
  const getCurrentWeather = async () => {
    await fetch(
      baseUrl +
        `?lat=${lat.toString()}&lon=${lng.toString()}&appid=${
          process.env.REACT_APP_WEATHER_API_KEY
        }`
    )
      .then((response) => response.json())
      .then((data) => createWeatherList(data));
  };
  // If weather list is empty runs fetch function
  if (wList.length === 0) {
    getCurrentWeather();
  }
  // Creates 3 hour weather list of the cities and sets them to a variable
  // Only takes first 5 values
  const createWeatherList = (weather) => {
    weatherList.push(weather);
    weatherList[0].list.splice(5, 35);
    setWlist(weatherList);
  };

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
      {wList[0]?.list !== undefined &&
        wList[0]?.list.length >= 5 &&
        wList[0]?.list.map(function (results) {
          return (
            <Card
              key={results.dt}
              sx={{
                width: {
                  xs: "90%",
                  sm: "65%",
                  md: "50%",
                  lg: "40%",
                  margin: 3,
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    padding: 1,
                    fontSize: "13px",
                  }}
                >
                  {results.dt_txt.substr(11, 5)}
                </Typography>
                <CardMedia
                  component="img"
                  height="50"
                  image={`https://openweathermap.org/img/w/${results.weather[0].icon}.png`}
                  alt="Weather icon"
                />
                <Typography
                  sx={{
                    padding: 1,
                    fontSize: "15x",
                    color: "#70757A",
                  }}
                >
                  {(results.main.temp - 273.15).toLocaleString("fi-EU", {
                    maximumSignificantDigits: 1,
                  }) + "°C"}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#E5F6FD",
                }}
              >
                <Typography sx={{ fontSize: "10px" }}>
                  {"Wind: " + results.wind.speed + " m/s"}
                </Typography>

                <Typography sx={{ fontSize: "10px" }}>
                  {"Humidity: " + results.main.humidity + " %"}
                </Typography>

                <Typography sx={{ fontSize: "10px" }}>
                  {"Precipitation (3 h): "}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </Box>
  );
};
// Proptypes for component
DayCard.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default DayCard;
