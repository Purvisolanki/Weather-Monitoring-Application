// components/WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import WeatherChart from './WeatherChart';
import AlertList from './AlertList';

function WeatherCard({ city, data }) {
  if (!data || !data.current) return null;

  const { current, summary, alerts } = data;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">{city}</Typography>
        <Typography color="textSecondary">
          Temperature: {current.temp.toFixed(1)}°C
        </Typography>
        <Typography color="textSecondary">
          Feels like: {current.feelsLike.toFixed(1)}°C
        </Typography>
        <Typography color="textSecondary">
          Condition: {current.condition}
        </Typography>
        <Typography color="textSecondary">
          Last updated: {new Date(current.timestamp).toLocaleString()}
        </Typography>
        
        <WeatherChart data={summary} />
        <AlertList alerts={alerts} />
      </CardContent>
    </Card>
  );
}

export default WeatherCard;