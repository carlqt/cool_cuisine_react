import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import mealReducer from 'Store/Meal/reducer';
import cartReducer from 'Store/Cart/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers({
  cartStore: cartReducer,
  mealStore: mealReducer,
});

export default createStore(combinedReducers, composeEnhancers(applyMiddleware(thunk)));


