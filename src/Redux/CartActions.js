export function createOrder(itemCode, items) {
  return {
    type: "CREATE_ORDER",
    payload: {
      itemCode: itemCode,
      items: items,
    },
  };
}
export function deleteOrder(itemCode) {
  return {
    type: "DELETE_ORDER",
    payload: {
      itemCode: itemCode,
    },
  };
}

export function loadOrder(orederList) {
  return {
    type: "LOAD_ORDER",
    payload: "orederList",
  };
}
