const initialState = {
  walletAddress: "",
  modalOpen: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS_CHANGE":
      return {
        ...state,
        walletAddress: action.address,
      }
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
