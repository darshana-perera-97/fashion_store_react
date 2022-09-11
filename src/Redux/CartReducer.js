let cartInitial = [];

function CartReducer(store = cartInitial, action) {
  switch (action.type) {
    case "CREATE_ORDER":
      return [
        ...store,
        {
          itemCode: action.payload.itemCode,
          items: action.payload.items,
          price: action.payload.price,
        },
      ];
    case "DELETE_ORDER":
      return store.filter(
        (order) => order.itemCode !== action.payload.itemCode
      );
    default:
      return store;
  }
}

export default CartReducer;
