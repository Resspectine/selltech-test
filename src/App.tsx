import { useQuery } from '@apollo/client';
import { Box, Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CustomSelect } from './components/CustomSelect/CustomSelect';
import type { CustomSelectOption } from './components/CustomSelect/CustomSelect';
import { Textarea } from './components/Textarea/Textarea';
import { ApplicantIndividualCompanyPositions } from './graphql/applicantIndividualCompanyPositions';
import { ApplicantIndividualCompanyRelations } from './graphql/applicantIndividualCompanyRelations';
import { getValidationError } from './helpers';
import type { Query } from './types';

export const App = () => {
  const { data: applicantIndividualCompanyRelationsData, loading: applicantIndividualCompanyRelationsLoading } =
    useQuery<Query>(ApplicantIndividualCompanyRelations);
  const { data: applicantIndividualCompanyPositionsData, loading: applicantIndividualCompanyPositionsLoading } =
    useQuery<Query>(ApplicantIndividualCompanyPositions);

  const { watch, setValue, register, handleSubmit, formState } = useForm<{
    textField: string;
    textArea: string;
    selectedCompanyRelations: CustomSelectOption[];
    selectedCompanyPositions: CustomSelectOption | null;
  }>({
    defaultValues: {
      textField: '',
      textArea: '',
      selectedCompanyPositions: null,
      selectedCompanyRelations: [],
    },
  });

  const onSelect =
    (key: 'selectedCompanyRelations' | 'selectedCompanyPositions', multiple?: boolean) =>
    (options: CustomSelectOption | CustomSelectOption[] | null) => {
      if (multiple && Array.isArray(options)) {
        setValue(key, options);

        return;
      }

      setValue(key, options);
    };

  useEffect(() => {
    register('selectedCompanyPositions', {
      required: 'This option is required',
    });
    register('selectedCompanyRelations', {
      required: 'Select at least one value',
    });
  }, []);

  return (
    <Box
      component="form"
      className="App"
      sx={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      onSubmit={handleSubmit(values => console.log(values))}
    >
      <CustomSelect
        value={watch('selectedCompanyRelations')}
        options={applicantIndividualCompanyRelationsData?.applicantIndividualCompanyRelations?.data || []}
        label="Company relations"
        placeholder="Select company relations"
        onSelect={onSelect('selectedCompanyRelations', true)}
        loading={applicantIndividualCompanyRelationsLoading}
        {...getValidationError('selectedCompanyRelations', formState.errors)}
        multiple
      />
      <CustomSelect
        value={watch('selectedCompanyPositions')}
        options={applicantIndividualCompanyPositionsData?.applicantIndividualCompanyPositions?.data || []}
        label="Company positions"
        placeholder="Select company positions"
        onSelect={onSelect('selectedCompanyPositions', false)}
        loading={applicantIndividualCompanyPositionsLoading}
        {...getValidationError('selectedCompanyPositions', formState.errors)}
      />
      <TextField
        label="Random label"
        placeholder="Random placeholder"
        {...register('textField', {
          required: 'This field is required',
        })}
        {...getValidationError('textField', formState.errors)}
      />
      <Textarea
        {...register('textArea', {
          required: 'This field is required',
        })}
        placeholder="Random placeholder"
        {...getValidationError('textArea', formState.errors)}
      />
      <Button type="submit" variant="contained" sx={{ maxWidth: 100 }}>
        Submit
      </Button>
    </Box>
  );
};
