const initialState = {
  walletAddress: "",
  networkID: 0,
  modalOpen: false,
  currency: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS_CHANGE":
      return {
        ...state,
        walletAddress: action.address,
      }
    case "NETWORK_CHANGE":
      return {
        ...state,
        networkID: action.networkID
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
    case "CURRENY_CHANGE":
      return {
        ...state,
        currency: action.currency
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
