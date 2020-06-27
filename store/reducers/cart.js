import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
  items: {},
  totalAmount: 0,
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: updatedOrNewCartItem,
        },
        totalAmount: state.totalAmount + prodPrice,
        count: state.count + 1,
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.items[action.payload];
      if (itemToRemove.quantity > 1) {
        const updatedItem = {
          ...itemToRemove,
          quantity: itemToRemove.quantity - 1,
          sum: itemToRemove.sum - itemToRemove.productPrice,
        };
        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: updatedItem,
          },
          totalAmount: state.totalAmount - itemToRemove.productPrice,
          count: state.count - 1,
        };
      } else {
        const updatedCartItems = { ...state.items };
        delete updatedCartItems[action.payload];
        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - itemToRemove.productPrice,
          count: state.count - 1,
        };
      }

    case ADD_ORDER:
      return initialState;
    // case EMPTY_CART:
    //   return initialState;
  }
  return state;
};
