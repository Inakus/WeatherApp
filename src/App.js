import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./Component/WeatherCard";
import { Container } from "@mui/material";
import SearchBar from "./Component/SearchBar";
import { Stack } from "@mui/system";

const apiKey = process.env.REACT_APP_WETHER_KEY;

function App() {
  const [post, setPost] = useState({});
  const [city, setCity] = useState("London");
  const [units, setUnits] = useState("metric");

  const weather = axios.create({
    baseURL:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
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
  }, [city, units]);

  function searchCity(newCity) {
    setCity(newCity);
  }

  if (!post.weather || !post.main) return "No Post!!";

  return (
    <>

    <Stack direction="column" spacing={2}>
      <Container fixed>
        <SearchBar search={searchCity}></SearchBar>
      </Container>

      <Container fixed>
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
      </Container>
    </Stack>
    </>
  );
}

export default App;
