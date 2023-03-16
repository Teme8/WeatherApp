import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const DayCard = ({lat, lng}) => {
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

  const getCurrentWeather = async () => {
    await fetch(
      baseUrl + `?lat=${lat.toString()}&lon=${lng.toString()}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => (createWeatherList(data)));
  };

  if (wList.length === 0) {
    getCurrentWeather();
  }

  const createWeatherList = (weather) => {
    weatherList.push(weather);
    weatherList[0].list.splice(5, 35)
    console.log(weatherList);
    setWlist(weatherList) 
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
      {wList[0]?.list !== undefined && wList[0]?.list.length >= 5 &&
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
                  margin: 3
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
                  {(results.main.temp - 273.15).toLocaleString('fi-EU', {maximumSignificantDigits: 1}) + "°C"}
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
                <Typography  sx={{fontSize: "10px"}}>{"Wind: " + results.wind.speed + " m/s"}</Typography>
                
                
                <Typography sx={{fontSize: "10px"}}>{"Humidity: " + results.main.humidity + " %"}</Typography>
                    
                        
               <Typography sx={{fontSize: "10px"}}>{"Precipitation (3 h): "}</Typography> 
              </CardContent>
            </Card>
          );
        })}
    </Box>
  );
};

DayCard.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }

export default DayCard;
