'use client';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import { useFormik } from 'formik';
import client from '@/plugins/api/client';
import * as Yup from 'yup';
import pushNotification from '@/plugins/notifications/pushNotification';

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
});

const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async ({ email }, context) => {
      const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/settings`,
      });
      if (error) {
        console.log('Error resetting password', error);
        context.setErrors({
          email: error.message,
        });
        return;
      }
      pushNotification({
        message: 'Password reset email sent successfully',
        severity: 'success',
      });
    },
  });
  return (
    <Grid
      container
      spacing={2}
      alignContent="center"
      justifyContent="center"
      sx={{ height: '100%' }}
    >
      <Grid item>
        <Container
          component="form"
          maxWidth="sm"
          sx={{ height: '100%' }}
          onSubmit={handleSubmit}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                gutterBottom
              >
                Reset Password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
              >
                Enter the email of your account to reset your password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" fullWidth disabled={isSubmitting}>
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
