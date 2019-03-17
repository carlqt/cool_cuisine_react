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
        draft.cart = draft.cart.push(data);
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
