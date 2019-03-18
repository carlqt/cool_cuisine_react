import apiRoutes from 'Requests/apiRoutes';

export function addToCart(item) {
  return async (dispatch) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    }

    const response = await fetch(apiRoutes.cartUrl, data);
    const jsonResponse = await response.json();

    // dispatch only on successful response
    dispatch(
      addToCartAC(item)
    );
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
    const jsonResponse = await response.json();

    dispatch(
      removeFromCartAC(item)
    );
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
