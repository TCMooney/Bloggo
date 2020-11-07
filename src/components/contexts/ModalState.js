import React, { createContext, useReducer } from 'react';
import ModalReducer from '../reducers/ModalReducer';

const initialState = {
  modalIsOpen: false,
  dropdownIsOpen: false
}

export const ModalContext = createContext(initialState);

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  function openModal() {
    dispatch({
      type: 'MODAL_OPEN'
    })
  }

  function closeModal() {
    dispatch({
      type: 'MODAL_CLOSE'
    })
  }

  function openDropdown() {
    dispatch({
      type: 'DROPDOWN_OPEN'
    })
  }

  function closeDropdown() {
    dispatch({
      type: 'DROPDOWN_CLOSE'
    })
  }

  return (
    <ModalContext.Provider value={{
      modalIsOpen: state.modalIsOpen,
      dropdownIsOpen: state.dropdownIsOpen,
      openModal,
      closeModal,
      openDropdown,
      closeDropdown
    }}>
      {children}
    </ModalContext.Provider>
  )
}