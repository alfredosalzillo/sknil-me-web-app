'use client';

import React from 'react';
import PasswordField from '@/components/PasswordField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import client from '@/plugins/api/client';
import pushNotification from '@/plugins/notifications/pushNotification';
import LoadingButton from '@mui/lab/LoadingButton';

const changePasswordFormSchema = Yup.object().shape({
  password: Yup.string().min(8).required(),
});

export type ChangePasswordFormProps = {
  fullWidth?: boolean;
};
const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  fullWidth,
}) => {
  const formik = useFormik({
    validationSchema: changePasswordFormSchema,
    initialValues: {
      password: '',
    },
    onSubmit: async ({ password }) => {
      const { error } = await client.auth.updateUser({
        password,
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
        message: 'Password changed successfully',
        severity: 'success',
      });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <PasswordField
        name="password"
        label="New Password"
        fullWidth={fullWidth}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.dirty && Boolean(formik.errors.password)}
        helperText={formik.dirty && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LoadingButton type="submit" loading={formik.isSubmitting} disabled={!formik.dirty}>
                Change
              </LoadingButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

export default ChangePasswordForm;
