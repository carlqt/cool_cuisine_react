import { produce } from 'immer';

const initialState = {
  cart: []
};

export default function (state = initialState, action) {
  const { data, type } = action;

  switch (type) {
    case 'LOAD_CART': {
      return produce(state, draft => {
        draft.cart = data;
      })
    }
    case 'ADD_TO_CART': {
      return produce(state, draft => {
        const idx = draft.cart.findIndex(item => item.meal_id === Number(data.id))

        if (idx >= 0) {
          draft.cart[idx].quantity = draft.cart[idx].quantity + 1;
        } else {
          draft.cart = draft.cart.concat({quantity: 1, meal_id: Number(data.id)});
        }
      })
    }
    case 'REMOVE_FROM_CART': {
      return produce(state, draft => {
        draft.cart = draft.cart.filter(e => e !== data);
      })
    }
    case 'RESET': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
