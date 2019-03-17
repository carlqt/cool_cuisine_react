import { produce } from 'immer';

const initialState = {
  meals: {
    byID: {},
    allID: [],
  }
};

export default function (state = initialState, action) {
  const { data, type } = action;

  switch (type) {
    case 'LOAD_MEALS': {
      const meals = data.reduce(reduceMeals, {});

      return produce(state, draft => {
        draft.meals.byID = {...meals};
        draft.meals.allID = Object.keys(meals);
      });
    }
    case 'RESET': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function reduceMeals(mem, val) {
  mem[val.id] = val;
  return mem;
}
