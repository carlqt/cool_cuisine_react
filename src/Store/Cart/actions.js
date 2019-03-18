export function addToCart(item) {
  const isAuthenticated = false

  if (isAuthenticated) {
    // store to DB
    // do some fetch requests
  } else {
    // store in localStorage
    // insertToCart(item);
  }

  return dispatch => {
    dispatch(
      addToCartAC(item)
    );
  }
}

function addToCartAC(item) {
  return {
    type: 'ADD_TO_CART',
    data: item,
  }
}
