'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React from 'react';
import PasswordField from '@/components/PasswordField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import signInWithPassword from '@/plugins/api/sign-in-with-password';

const signInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 character long')
    .required('Required'),
});

type SignInFormValue = {
  email: string
  password: string
};

const SignInPage = () => {
  const router = useRouter();
  const {
    values,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik<SignInFormValue>({
    validateOnChange: false,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInFormSchema,
    onSubmit: async ({ email, password }, formikHelpers) => {
      try {
        await signInWithPassword({
          email,
          password,
        });
        router.push('/dashboard');
      } catch (e) {
        console.error(e);
        formikHelpers.setErrors({
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        });
      }
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
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
              >
                Sign-in or create a Sknil-me account
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
              <PasswordField
                name="password"
                label="Padssword"
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth disabled={isSubmitting}>
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="/forgot-password">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              Don&apos;t have an account?
              {' '}
              <Link href="/sign-up">Create an account</Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
