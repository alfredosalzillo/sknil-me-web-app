'use client';

import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import * as Yup from 'yup';
import client from '@/plugins/api/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const isUnique = async (value?: string): Promise<boolean> => {
  if (!value) {
    return false;
  }
  const { data, error } = await client
    .from('user')
    .select('username')
    .eq('username', value)
    .maybeSingle();
  if (error) {
    return false;
  }
  return !data;
};

const usernameUpdateSchema = Yup.object().shape({
  username: Yup.string()
    .min(3)
    .max(18)
    .matches(/^[a-z]+(-[a-z]+)*$/, ({ label }) => `${label} can only contains letters and -`)
    .test('unique-username', ({ label }) => `the chosen ${label} already exists`, isUnique)
    .required(),
});

export type UsernameUpdateFormProps = {
  fullWidth?: boolean;
};
const UsernameUpdateForm: React.FC<UsernameUpdateFormProps> = ({ fullWidth }) => {
  const router = useRouter();
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: usernameUpdateSchema,
    onSubmit: async ({ username }) => {
      await client.auth.updateUser({
        data: {
          username,
        }
      });
      router.refresh();
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="username"
        label="Username"
        variant="outlined"
        value={values.username}
        onChange={handleChange}
        error={!!errors.username}
        helperText={errors.username}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button type="submit" disabled={isSubmitting}>
                Save
              </Button>
            </InputAdornment>
          )
        }}
        fullWidth={fullWidth}
      />
    </form>
  );
};

export default UsernameUpdateForm;
