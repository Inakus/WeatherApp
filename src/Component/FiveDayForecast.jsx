import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../App";
import Unit from "./Unit";
import WeatherCard from "./WeatherCard";

export default function FiveDayForecast({ citySearch }) {
  const [post, setPost] = useState({});
  const [units, setUnits] = useState("metric");

  const weather = axios.create({
    baseURL:
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      citySearch +
      "&units=" +
      units +
      "&appid=" +
      apiKey,
  });

  useEffect(() => {
    async function getPost() {
      const response = await weather.get("").catch((err) => console.error(err));
      setPost(response.data);
    }
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citySearch, units] );

  const list = post.list;
  
  if (!list) return "No Post!!";

  
  console.log(post);        
  return (
    <Box display='flex' justifyContent='center' flexWrap='wrap' rowGap={2}>
      <Typography variant="h3" color="text.secondary">Five day Forecast</Typography>
      <Unit unit={(e) => {
            setUnits(e);}}></Unit>
      <Grid container spacing={1} pt={1}>
      {list.map((element, index) => {
        return (
          <Grid xs={6} sm={4} md={4} lg={3}>
            <WeatherCard
              img={
                "http://openweathermap.org/img/wn/" +
                element.weather[0].icon +
                "@4x.png"
              }
              temp={element.main.temp}
              cityName={post.city.name}
              weather={element.weather[0].main}
              description={element.weather[0].description}
              unit={(newUnit) => setUnits(newUnit)}
              date={element.dt_txt}
              giveUnit={units}
              key={index}
            ></WeatherCard>
          </Grid>
        );
      })}
      </Grid>
    </Box>
  );
}
