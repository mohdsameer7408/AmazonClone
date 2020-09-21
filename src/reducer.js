export const initialState = {
  basket: [],
  user: null,
};

// Selectors
export const getBasketItems = (basket) => {
  return basket?.reduce((basketItems, item) => basketItems + item.quantity, 0);
};

export const getBasketItemsTotal = (basket) => {
  return basket?.reduce(
    (basketItemsTotal, item) => basketItemsTotal + item.quantity * item.price,
    0
  );
};

// export const getBasketItemsTotal = (basket) => {
//   return basket?.reduce(
//     (basketItemsTotal, item) => basketItemsTotal + item.price,
//     0
//   );
// };

// adding items to the basket with quantity
const addToBasket = (state, action) => {
  let newBasket;

  const doesItemExists = state.basket.filter(
    (item) => item.id === action.item.id
  ).length;

  if (!doesItemExists) {
    newBasket = [...state.basket, { ...action.item, quantity: 1 }];
  } else {
    newBasket = state.basket.map((item) =>
      item.id === action.item.id
        ? {
            ...item,
            quantity:
              action.task === "ADD" ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    );
  }

  return newBasket;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: addToBasket(state, action),
        // [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // let newBasket = [...state.basket];
      // const itemIndex = state.basket.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   newBasket.splice(itemIndex, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.payload.id} as it's not present in the basket!)`
      //   );
      // }

      // return {
      //   ...state,
      //   basket: newBasket,
      // };
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
