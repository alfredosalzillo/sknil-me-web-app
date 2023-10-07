'use client';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';
import * as Yup from 'yup';
import client from '@/plugins/api/client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import currentUserInfo from '@/plugins/api/current-user-info';
import pushNotification from '@/plugins/notifications/pushNotification';
import LoadingButton from '@mui/lab/LoadingButton';

const isUnique = async (value?: string): Promise<boolean> => {
  if (!value) {
    return false;
  }
  const user = await currentUserInfo(client);
  const { data, error } = await client
    .from('user')
    .select('username')
    .eq('username', value)
    .neq('id', user.id)
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
    .matches(/^[a-z0-9]+(-[a-z0-9]+)*$/, (params) => `${params.path} can only contains letters, numbers and -`)
    .test('unique-username', (params) => `the chosen ${params.path} is already taken`, isUnique)
    .required(),
});

export type UsernameUpdateFormProps = {
  fullWidth?: boolean;
  username?: string;
};
const UsernameUpdateForm: React.FC<UsernameUpdateFormProps> = ({
  fullWidth,
  username: initialUsername
}) => {
  const router = useRouter();
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    dirty,
  } = useFormik({
    initialValues: {
      username: initialUsername ?? '',
    },
    enableReinitialize: true,
    validationSchema: usernameUpdateSchema,
    onSubmit: async ({ username }) => {
      const { error } = await client.auth.updateUser({
        data: {
          username,
        }
      });
      if (error) {
        console.error(error);
        pushNotification({
          message: error.message,
          severity: 'error',
        });
        return;
      }
      pushNotification({
        message: 'Username updated successfully',
        severity: 'success',
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
            <InputAdornment position="end">
              <LoadingButton type="submit" loading={isSubmitting} disabled={!dirty}>
                Save
              </LoadingButton>
            </InputAdornment>
          )
        }}
        fullWidth={fullWidth}
      />
    </form>
  );
};

export default UsernameUpdateForm;
