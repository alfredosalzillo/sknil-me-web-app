'use client';

import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import Link from '@/components/Link';

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

const SignInForm = () => (
  <Formik<SignInFormValue>
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={SignInSchema}
    onSubmit={console.log}
  >
    {({ errors }) => (
      <Form className="w-10/12 max-w-lg" name="sign-in" id="sign-in">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Login to your sknil.me
          </h1>
          <div className="flex flex-col gap-4">
            <Field
              as={TextField}
              id="email"
              name="email"
              type="text"
              label="Email"
              placeholder="example@email.com"
              error={errors.email}
              helperText={errors.email && <ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              id="password"
              name="password"
              type="password"
              label="Password"
              error={errors.password}
              helperText={errors.password && <ErrorMessage name="password" />}
            />
          </div>
          <div className="flex flex-row-reverse">
            <Button type="submit" fullWidth>
              Sign In
            </Button>
          </div>
          <div className="text-center">
            <Link href="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <div className="text-center">
            Don&apos;t have an account?
            {' '}
            <Link href="/sign-up">Sign up</Link>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

export default SignInForm;
