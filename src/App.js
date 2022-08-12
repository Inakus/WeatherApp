import { useState } from "react";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "./Component/SearchBar";
import { Stack } from "@mui/system";
import NavBar from "./Component/NavBar";
import OneDayForecast from "./Component/OneDayForecast";
import FiveDayForecast from "./Component/FiveDayForecast";

export const apiKey = process.env.REACT_APP_WETHER_KEY;

function App() {
  const [city, setCity] = useState('London');
  const [mode, setMode] = useState('light');
  const [change, setChange] = useState('One');

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  function searchCity(newCity) {
    setCity(newCity);
  }

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <NavBar setMode={setMode} mode={mode} display={(dis) => setChange(dis)}></NavBar>
      <Box bgcolor={"background.default"} color={"text.primary"} height="100vh" display="flex"> 
      <Container sx={{ maxWidth: { sm: "sm", md: "sm" } }}>
        <Stack direction="column" spacing={2} justifyContent="center">
          <Box flex={2} pt={15}>
            <SearchBar search={searchCity}></SearchBar>
          </Box>
          {change === "One" && <OneDayForecast citySearch={city}></OneDayForecast>}
          {change === "Five" && <FiveDayForecast citySearch={city}></FiveDayForecast>}
        </Stack>
      </Container>  
      </Box>
    </ThemeProvider>
    </>
  );
}

export default App;
