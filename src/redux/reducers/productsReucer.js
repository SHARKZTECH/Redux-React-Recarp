export const productsReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
};
