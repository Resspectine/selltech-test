import type { FieldErrors, FieldValues } from 'react-hook-form';

export const getValidationError = <T extends FieldValues>(key: keyof T, errors: FieldErrors<T>) => ({
  error: !!errors[key],
  helperText: errors[key]?.message,
});
