import { MODAL_STATUS } from '../actions/types';

const INITIAL_STATE = {
  modalIsOpen: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MODAL_STATUS:
      return {
        modalIsOpen: !state.modalIsOpen
      }
    default: return state;
  }
}