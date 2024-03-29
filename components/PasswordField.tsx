import React, { useState } from 'react';
import type { TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export type PasswordFieldProps = Omit<TextFieldProps, 'type'>;

const PasswordField: React.FC<PasswordFieldProps> = ({ InputProps, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <>
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            {InputProps?.endAdornment}
          </>
        ),
      }}
    />
  );
};

export default PasswordField;
