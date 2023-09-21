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
import signUpWithPassword from '@/plugins/api/sign-up-with-password';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const signUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 character long')
    .required('Required'),
  termsAndConditionsConsent: Yup.boolean().isTrue('Must be accepted to create an account'),
  marketingConsent: Yup.boolean().default(false),
});

type SignUpFormValue = {
  email: string
  password: string
  termsAndConditionsConsent: boolean
  marketingConsent: boolean
};

const SignUpPage = () => {
  const router = useRouter();
  const {
    values,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik<SignUpFormValue>({
    validateOnChange: false,
    initialValues: {
      email: '',
      password: '',
      termsAndConditionsConsent: false,
      marketingConsent: false,
    },
    validationSchema: signUpFormSchema,
    onSubmit: async ({
      email,
      password,
      termsAndConditionsConsent,
      marketingConsent,
    }, formikHelpers) => {
      try {
        await signUpWithPassword({
          email,
          password,
          options: {
            data: {
              termsAndConditionsConsent,
              marketingConsent,
            },
          },
        });
        router.push('/dashboard');
      } catch (e) {
        console.error(e);
        formikHelpers.setErrors({
          email: e instanceof Error ? e.message : 'Unknown error',
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
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
              >
                Create a Sknil-me account
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
              <FormControlLabel
                control={(
                  <Checkbox />
                )}
                label={(
                  <span>
                    I agree to Sknil-me&apos;s
                    {' '}
                    <Link href="/terms-and-conditions" target="_blank">Terms and Conditions</Link>
                    {' '}
                    and confirm to have read your
                    {' '}
                    <Link href="/privacy-notice" target="_blank">Privacy Notice</Link>
                    .
                  </span>
                )}
                name="termsAndConditionsConsent"
                value={values.termsAndConditionsConsent}
                onChange={handleChange}
                required
              />
              {errors.termsAndConditionsConsent && (
                <Typography color="error">
                  {errors.termsAndConditionsConsent}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    name="marketingConsent"
                    value={values.marketingConsent}
                    onChange={handleChange}
                  />
                )}
                label="I agree to receive offers, news and updates from Sknil-me."
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth disabled={isSubmitting}>
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              Already have an account?
              {' '}
              <Link href="/sign-in">Login instead</Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
