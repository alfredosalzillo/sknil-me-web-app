'use client';

import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import pushNotification from '@/plugins/notifications/pushNotification';
import LoadingButton from '@mui/lab/LoadingButton';
import addLink from './addLink';

const addLinkValidator = Yup.object({
  url: Yup.string().url().required(),
});

export type AddLinkFormProps = {
  onAdd?: () => void;
};
const AddLinkForm: React.FC<AddLinkFormProps> = ({
  onAdd,
}) => {
  const router = useRouter();
  const formik = useFormik({
    validationSchema: addLinkValidator,
    initialValues: {
      url: '',
    },
    validateOnChange: false,
    onSubmit: async (values, context) => {
      try {
        await addLink(values.url);
        onAdd?.();
        router.refresh();
        await context.setValues({
          url: '',
        });
      } catch (error) {
        console.error(error);
        pushNotification({
          message: error instanceof Error ? error.message : 'Unknown error',
          severity: 'error',
        });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="url"
        placeholder="https://www.example.com"
        value={formik.values.url}
        onChange={formik.handleChange}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={formik.errors.url}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LoadingButton
                type="submit"
                loading={formik.isSubmitting}
                disabled={!formik.dirty}
              >
                Add Link
              </LoadingButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

export default AddLinkForm;
