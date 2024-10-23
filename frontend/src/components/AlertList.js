// components/AlertList.js
import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function AlertList({ alerts }) {
  if (!alerts || alerts.length === 0) return null;

  return (
    <>
      <Typography variant="h6" component="h3" style={{ marginTop: '20px' }}>
        Recent Alerts
      </Typography>
      <List>
        {alerts.map((alert, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${alert.condition} Alert`}
              secondary={`Threshold: ${alert.threshold}, Time: ${new Date(alert.timestamp).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default AlertList;