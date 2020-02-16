import {
  RECEIVED_ALL_MACROS,
} from './constants';

export const updateMacros = (macros) => ({
  type: RECEIVED_ALL_MACROS,
  macros,
});
