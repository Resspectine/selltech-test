import { FormControl, FormHelperText, styled, TextareaAutosize } from '@mui/material';
import { forwardRef } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export const StyledTextarea = styled(TextareaAutosize)<{ error?: boolean }>(({ error, theme: { palette } }) => ({
  font: 'inherit',
  letterSpacing: 'inherit',
  color: 'currentColor',
  background: 'none',
  height: '1.4375em',
  margin: 0,
  width: '100%',
  padding: '16.5px 14px',
  borderRadius: '4px',
  outline: 'none',
  border: `1px solid ${error ? palette.error.main : 'rgba(0, 0, 0, 0.23)'}`,
}));

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  {
    error?: boolean;
    placeholder?: string;
    helperText?: string;
  } & Omit<UseFormRegisterReturn, 'ref'>
>(({ error, placeholder, helperText, ...register }, ref) => (
  <FormControl>
    <StyledTextarea error={error} placeholder={placeholder} ref={ref} {...register} />
    {helperText && <FormHelperText sx={{ color: ({ palette }) => palette.error.main }}>{helperText}</FormHelperText>}
  </FormControl>
));
