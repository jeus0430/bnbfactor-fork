export function changeWalletAction(address) {
  return {
    type: 'ADDRESS_CHANGE',
    address: address
  };
}