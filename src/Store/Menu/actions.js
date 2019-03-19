import apiRoutes from 'Requests/apiRoutes';

export function getMenu() {
  return async (dispatch) => {
    const url = `${apiRoutes.getMenu}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();

    dispatch(
      loadMeals(jsonResponse.data.meals)
    );

    dispatch(
      loadCart(jsonResponse.data.cart)
    );

    return response;
  }
}

function loadMeals(data) {
  return {
    type: 'LOAD_MEALS',
    data: data,
  }
}

function loadCart(data) {
  return {
    type: 'LOAD_CART',
    data: data,
  }
}

