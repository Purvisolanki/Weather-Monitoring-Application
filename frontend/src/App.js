// App.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import WeatherCard from './components/WeatherCard';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

function App() {
  const [weatherData, setWeatherData] = useState({});

  const fetchData = async () => {
    for (const city of cities) {
      try {
        const response = await fetch(`http://localhost:5000/api/weather/${city}`);
        const currentWeather = await response.json();

        const summaryResponse = await fetch(`http://localhost:5000/api/weather/summary/${city}`);
        const summaryData = await summaryResponse.json();

        const alertsResponse = await fetch(`http://localhost:5000/api/alerts/${city}`);
        const alertsData = await alertsResponse.json();

        setWeatherData(prev => ({
          ...prev,
          [city]: { current: currentWeather, summary: summaryData, alerts: alertsData }
        }));
      } catch (error) {
        console.error(`Error fetching data for ${city}:`, error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // Fetch every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom style={{ margin: '20px 0' }}>
          Weather Monitoring System
        </Typography>
        <Grid container spacing={3}>
          {cities.map(city => (
            <Grid item xs={12} sm={6} md={4} key={city}>
              <WeatherCard city={city} data={weatherData[city]} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;