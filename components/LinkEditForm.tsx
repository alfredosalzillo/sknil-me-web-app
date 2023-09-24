import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import type { PaperProps } from '@mui/material/Paper';
import Paper from '@mui/material/Paper';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import pushNotification from '@/plugins/notifications/pushNotification';
import updateLink from '@/plugins/api/updateLink';
import deleteLink from '@/plugins/api/deleteLink';
import InputAdornment from '@mui/material/InputAdornment';
import DynamicLinkIcon from '@/components/DynamicLinkIcon';

const validator = Yup.object({
  name: Yup.string().required(),
  url: Yup.string().url().required(),
  active: Yup.boolean().default(false),
});

type LinkEditFormProps = {
  link: {
    id: string;
    name: string;
    url: string;
    active?: boolean | null;
  }
  onDelete?: () => void;
  onUpdate?: () => void;
} & Omit<PaperProps<'form'>, 'children' | 'onSubmit' | 'component'>;
const LinkEditForm: React.FC<LinkEditFormProps> = ({
  link,
  sx,
  onDelete,
  onUpdate,
  ...props
}) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: link,
    enableReinitialize: true,
    validationSchema: validator,
    onSubmit: async (values) => {
      try {
        await updateLink(link.id, {
          name: values.name,
          url: values.url,
          active: values.active,
        });
        onUpdate?.();
        router.refresh();
      } catch (error) {
        console.error(error);
        pushNotification({
          message: error instanceof Error ? error.message : 'Unknown error',
          severity: 'error',
        });
      }
    }
  });
  return (
    <Paper
      {...props}
      sx={{
        p: 2,
        width: '100%',
        ...sx,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="url"
              value={formik.values.url}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.url)}
              helperText={formik.errors.url}
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DynamicLinkIcon url={link.url} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} container spacing={1} alignContent="flex-end" justifyContent="flex-end">
            <Grid item>
              <Button
                color="secondary"
                disabled={formik.isSubmitting}
                onClick={async () => {
                  await deleteLink(link.id);
                  onDelete?.();
                  router.refresh();
                }}
                size="small"
              >
                Delete
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" disabled={formik.isSubmitting || !formik.dirty} size="small">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Switch
            edge="end"
            name="active"
            checked={formik.values.active ?? false}
            onChange={formik.handleChange}
            size="small"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default LinkEditForm;
