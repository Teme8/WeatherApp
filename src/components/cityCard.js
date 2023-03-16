/**
 * @Author Teemu Tirkkonen
 * Card component displaying weather of the specific city. Used in Home.js
 */

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import DayCard from "./DayCard";
import PropTypes from "prop-types";

/**
 * @param {number} filterVal number value of the filter that is chosen
 * @returns city card component
 */
const CityCard = ({ filterVal }) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const [wList, setWlist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const date = new Date();
  // Coordinates for the cities in order
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
  // Gets the data from OpenWeatherMap API
  const getCurrentWeather = async () => {
    cities.map(async function (results) {
      await fetch(
        baseUrl +
          `?lat=${results.lat}&lon=${results.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => createWeatherList(data));
    });
  };
  // If weather list is empty runs fetch function
  if (wList.length === 0) {
    getCurrentWeather();
  }
  // Creates a weather list of the cities and sets them to a variable
  const createWeatherList = (weather) => {
    weatherList.push(weather);
    if (weatherList.length === 4) {
      setWlist(weatherList);
    }
  };
  // Checks if there's a filter chosen and filters data based on it
  useEffect(() => {
    if (filterVal === 1) {
      setFilteredList(wList?.filter((el) => el.name.includes("Tampere")));
    } else if (filterVal === 2) {
      setFilteredList(wList?.filter((el) => el.name.includes("Jyvaskyla")));
    } else if (filterVal === 3) {
      setFilteredList(wList?.filter((el) => el.name.includes("Kuopio")));
    } else if (filterVal === 4) {
      setFilteredList(wList?.filter((el) => el.name.includes("Espoo")));
    }
  }, [filterVal, wList]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mb: 5,
      }}
    >
      {wList.length >= 3 && filterVal === 0
        ? wList.map(function (results) {
            return (
              <>
                <Card
                  key={results.id}
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "50%",
                      lg: "40%",
                      marginBottom: "2%",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: 1,
                        fontSize: "19px",
                      }}
                    >
                      {results.name}
                      <Typography
                        sx={{ fontSize: "13px", color: "#70757A", mb: 10 }}
                      >
                        {String(results.weather[0].description)
                          .charAt(0)
                          .toUpperCase() +
                          results.weather[0].description.slice(1)}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        padding: 1,
                        fontSize: "26px",
                        color: "#262626",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="70"
                        image={`https://openweathermap.org/img/w/${results.weather[0].icon}.png`}
                        alt="Weather icon"
                      />
                      {(results.main.temp - 273.15).toLocaleString("fi-EU", {
                        maximumSignificantDigits: 1,
                      }) + "°C"}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "15px", color: "#262626", padding: 1 }}
                    >
                      {moment(date).format("Do MMMM")}
                      <Typography sx={{ fontSize: "13px", color: "#70757A" }}>
                        {date.getHours() +
                          ":" +
                          String(date.getMinutes()).padStart(2, "0")}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#70757A",
                        ml: "45%",
                      }}
                    >
                      {"Wind: " + results.wind.speed + " m/s"}
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: "#70757A",
                        }}
                      >
                        {"Humidity: " + results.main.humidity + " %"}
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#70757A",
                          }}
                        >
                          {"Precipitation (3 h): "}
                        </Typography>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
                <Box
                  key={results.id + 1}
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "50%",
                      lg: "40%",
                      marginBottom: "2%",
                    },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <DayCard
                    key={results.id}
                    lat={results.coord.lat}
                    lng={results.coord.lon}
                  />
                </Box>
              </>
            );
          })
        : filteredList.map(function (results) {
            return (
              <>
                <Card
                  key={results.id}
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "50%",
                      lg: "40%",
                      marginBottom: "2%",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        padding: 1,
                        fontSize: "19px",
                      }}
                    >
                      {results.name}
                      <Typography
                        sx={{ fontSize: "13px", color: "#70757A", mb: 10 }}
                      >
                        {String(results.weather[0].description)
                          .charAt(0)
                          .toUpperCase() +
                          results.weather[0].description.slice(1)}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        padding: 1,
                        fontSize: "26px",
                        color: "#262626",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="70"
                        image={`https://openweathermap.org/img/w/${results.weather[0].icon}.png`}
                        alt="Weather icon"
                      />
                      {(results.main.temp - 273.15).toLocaleString("fi-EU", {
                        maximumSignificantDigits: 1,
                      }) + "°C"}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "15px", color: "#262626", padding: 1 }}
                    >
                      {moment(date).format("Do MMMM")}
                      <Typography sx={{ fontSize: "13px", color: "#70757A" }}>
                        {date.getHours() +
                          ":" +
                          String(date.getMinutes()).padStart(2, "0")}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#70757A",
                        ml: "45%",
                      }}
                    >
                      {"Wind: " + results.wind.speed + " m/s"}
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: "#70757A",
                        }}
                      >
                        {"Humidity: " + results.main.humidity + " %"}
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#70757A",
                          }}
                        >
                          {"Precipitation (3 h): "}
                        </Typography>
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
                <Box
                  key={results.id + 1}
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "50%",
                      lg: "40%",
                      marginBottom: "2%",
                    },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <DayCard
                    key={results.id}
                    lat={results.coord.lat}
                    lng={results.coord.lon}
                  />
                </Box>
              </>
            );
          })}
    </Box>
  );
};
// Proptypes for component
CityCard.propTypes = {
  filterVal: PropTypes.number.isRequired,
};

export default CityCard;
