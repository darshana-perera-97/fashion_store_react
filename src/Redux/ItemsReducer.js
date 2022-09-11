let items = [
  {
    catogery: "men",
    name: "Striped Shirt",
    price: 1000,
    itemCode: "m01",
    discounts: 5,
    imgLink:
      "https://d1hj68zhrbkzii.cloudfront.net/wp-content/uploads/2022/07/0202205484YL-2_mens_Shirt_Fashion_Bug_Sri_Lanka.jpg",
    size: ["S", "M"],
    clrs: ["red", "yellow", "blue"],
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
