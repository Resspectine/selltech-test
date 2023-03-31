import type { FilterOptionsState } from '@mui/base';

import type { CustomSelectOption } from './CustomSelect';

export const isTargetButton = (target: EventTarget): target is HTMLButtonElement =>
  (target as HTMLButtonElement).nodeName === 'BUTTON';

export const filterOptions = (options: CustomSelectOption[], state: FilterOptionsState<CustomSelectOption>) =>
  options.filter(option => state.getOptionLabel(option).toLowerCase().includes(state.inputValue.toLowerCase()));

export const isOptionEqualToValue = (option: CustomSelectOption, value: CustomSelectOption) => option.id === value.id;
