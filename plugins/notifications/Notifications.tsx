'use client';

import { Snackbar } from '@mui/material';
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useNotifications from './useNotifications';
import store from './store';

const Notifications = () => {
  const notifications = useNotifications();
  return (
    <Stack
      spacing={2}
      direction="column-reverse"
      sx={{
        position: 'fixed',
        bottom: (theme) => theme.spacing(2),
        left: (theme) => theme.spacing(2),
      }}
    >
      {notifications.map((notification, index) => (
        <Snackbar
          key={notification.id}
          open={notification.open}
          autoHideDuration={notification.autoHideDuration}
          sx={{
            position: 'relative',
          }}
        >
          <Alert
            action={notification.action}
            severity={notification.severity}
            onClose={() => store.close(notification.id)}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  );
};

export default Notifications;
