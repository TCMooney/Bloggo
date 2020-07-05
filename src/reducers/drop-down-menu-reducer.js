import { DROPDOWN_STATUS } from '../actions/types';

const INITIAL_STATE = {
  dropDownIsOpen: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DROPDOWN_STATUS:
      return {
        dropDownIsOpen: !state.dropDownIsOpen
      }
    default: return state;
  }
}