export function changeWalletAction(address) {
  return {
    type: 'ADDRESS_CHANGE',
    address: address
  };
}

export function changeNetwork(id) {
  return {
    type: "NETWORK_CHANGE",
    networkID: id
  }
}

export function changeCurrency(val) {
  return {
    type: "CURRENY_CHANGE",
    currency: val
  }
}
export function closeModal() {
  return {
    type: "CLOSE_MODAL"
  }
}