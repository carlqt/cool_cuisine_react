import apiRoutes from 'Requests/apiRoutes';

export function addToCart(item) {
  return async (dispatch) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    }

    const response = await fetch(apiRoutes.cartUrl, data);

    // dispatch only on successful response
    dispatch(
      addToCartAC(item)
    );

    return response;
  }
}

export function removeFromCart(item) {
  return async (dispatch) => {
    const urlId = item.id;
    const url = `${apiRoutes.cartUrl}/${urlId}`
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }

    const response = await fetch(url, options);

    dispatch(
      removeFromCartAC(item)
    );

    return response;
  }
}

function addToCartAC(item) {
  return {
    type: 'ADD_TO_CART',
    data: item,
  }
}

function removeFromCartAC(item) {
  return {
    type: 'REMOVE_FROM_CART',
    data: item,
  }
}
