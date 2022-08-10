import axios from "axios";
import { useEffect, useState } from "react";


const apiKey = process.env.REACT_APP_WETHER_KEY;

function App() {
  const [post, setPost] = useState({});
  const [city, setCity] = useState('London');

  const weather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey
  });

  useEffect(() => {
    async function getPost() {
      const response = await weather.get('')
      setPost(response.data)
    }
    getPost();
  }, []);

  console.log(post);

  return (
    <>
      <h1>Hello World</h1>
      <p>{post.name}</p>
      <p>{post.weather && post.weather[0].main}</p>
      <img srcSet={post.weather && post.weather[0].icon} alt={post.weather && post.weather[0].description}></img>
    </>
  );
}

export default App;
