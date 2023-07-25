'use client';

import {
  useFormik,
} from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

import classes from './SignInForm.module.scss';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import Link from '@/components/Link';
import useSupabase from '@/plugins/supabase/useSupabase';

const SignInSchema = Yup.object().shape({
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
}

export type SignInFormProps = {
  className?: string
}
const SignInForm: React.FC<SignInFormProps> = ({ className }) => {
  const supabase = useSupabase();
  const router = useRouter();
  const {
    isSubmitting, errors, handleChange, handleSubmit,
  } = useFormik<SignInFormValue>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async ({ email, password }, formikHelpers) => {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          throw error;
        }
        router.push('/app');
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
    <form
      className={clsx(classes.root, className)}
      name="sign-in"
      id="sign-in"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>
          Login to your sknil.me
        </h1>
        <div className="flex flex-col gap-4">
          <TextField
            id="email"
            name="email"
            type="text"
            label="Email"
            placeholder="example@email.com"
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
            required
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" fullWidth disabled={isSubmitting}>
            Sign In
          </Button>
        </div>
        <div>
          <Link href="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <div>
          Don&apos;t have an account?
          {' '}
          <Link href="/sign-up">Sign up</Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
