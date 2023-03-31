import { Autocomplete, Box, Button, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';

import { filterOptions, isOptionEqualToValue, isTargetButton } from './helpers';

export type CustomSelectOption = { id: string; name: string };

type Props = {
  value: CustomSelectOption[] | CustomSelectOption | null;
  options: CustomSelectOption[];
  onSelect: (options: CustomSelectOption[] | CustomSelectOption | null) => void;
  placeholder?: string | undefined;
  label?: string | undefined;
  helperText?: string | undefined;
  error?: boolean | undefined;
  loading?: boolean | undefined;
  multiple?: boolean | undefined;
};

export const CustomSelect = ({
  options,
  placeholder,
  label,
  helperText,
  error,
  value,
  onSelect,
  loading,
  multiple,
}: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      options={options}
      autoHighlight
      multiple={multiple}
      value={value}
      inputValue={inputValue}
      onChange={(_, selectedOptions) => {
        onSelect(selectedOptions);

        if (!Array.isArray(selectedOptions)) {
          setInputValue(selectedOptions?.name || '');
        }
      }}
      disableCloseOnSelect
      filterOptions={filterOptions}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={option => option.name}
      renderOption={({ onClick, ...restProps }, option, { selected }) => (
        <Box
          component="li"
          {...restProps}
          key={option.id}
          onClick={event => {
            if (isTargetButton(event.target)) {
              onClick?.(event);
            }
          }}
          sx={{
            '&.MuiAutocomplete-option': {
              padding: '5px 15px',
              cursor: 'default',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            },
          }}
        >
          {option.name}
          <Button>{selected ? 'Unselect' : 'Select'}</Button>
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          error={error}
          label={label}
          placeholder={placeholder}
          value={inputValue}
          onChange={event => setInputValue(event.currentTarget.value)}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
