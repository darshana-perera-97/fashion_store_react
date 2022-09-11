let items = [
  {
    catogery: "tshirt",
    name: "Branded Tshirt",
    price: 1000,
    itemCode: "t01",
    discounts: 5,
    img: "t1",
  },
];

function itemReducer(store = items, action) {
  switch (action.type) {
    case "LOAD_STORE":
      return [...store, ...action.payload];
    default:
      return store;
  }
}

export default itemReducer;
