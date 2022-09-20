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

export const productDetailsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCT":
      return { ...state, product: payload };
    case "RESET_PRODUCT":
      return (state = {});
    default:
      return state;
  }
};
