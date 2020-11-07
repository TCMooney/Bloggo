export default (state, action) => {
  switch (action.type) {
    case 'MODAL_OPEN':
      return {
        ...state,
        modalIsOpen: true
      }
    case 'MODAL_CLOSE':
      return {
        ...state,
        modalIsOpen: false
      }
    case 'DROPDOWN_OPEN':
      return {
        ...state,
        dropdownIsOpen: true
      }
    case 'DROPDOWN_CLOSE':
      return {
        ...state,
        dropdownIsOpen: false
      }
    default: return state;
  }
}