// components/WeatherChart.js
import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function WeatherChart({ data }) {
  if (!data || data.length === 0) return null;

  const chartData = data.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    avgTemp: item.avgTemp.toFixed(1),
    maxTemp: item.maxTemp.toFixed(1),
    minTemp: item.minTemp.toFixed(1),
  }));

  return (
    <>
      <Typography variant="h6" component="h3" style={{ marginTop: '20px' }}>
        7-Day Temperature Trend
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" name="Avg Temp" />
          <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" name="Max Temp" />
          <Line type="monotone" dataKey="minTemp" stroke="#ffc658" name="Min Temp" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default WeatherChart;