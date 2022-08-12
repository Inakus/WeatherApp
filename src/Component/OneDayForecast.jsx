import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiKey } from "../App";
import WeatherCard from "./WeatherCard";

export default function OneDayForecast({citySearch}){

    const [post, setPost] = useState({});
    const [units, setUnits] = useState("metric");

    const weather = axios.create({
        baseURL:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          citySearch +
          "&units=" +
          units +
          "&appid=" +
          apiKey,
      });
    
      useEffect(() => {
        async function getPost() {
          const response = await weather.get("");
          setPost(response.data);
        }
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [citySearch, units]);
    
      if (!post.weather || !post.main) return "No Post!!";

      return (
        <Box>
            <Typography variant="h4" color="text.secondary">One day Forecast</Typography>
            <WeatherCard
              img={
                "http://openweathermap.org/img/wn/" +
                post.weather[0].icon +
                "@4x.png"
              }
              temp={post.main.temp}
              cityName={post.name}
              weather={post.weather[0].main}
              description={post.weather[0].description}
              unit={(newUnit) => setUnits(newUnit)}
            ></WeatherCard>
          </Box>
      )

}