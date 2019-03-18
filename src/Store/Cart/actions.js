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
