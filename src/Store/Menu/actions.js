import apiRoutes from 'Requests/apiRoutes';

export function getMenu() {
  const url = `${apiRoutes.getMenu}`;

  return async (dispatch) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();

    dispatch(
      loadMeals(jsonResponse.data.meals)
    );

    dispatch(
      loadCart(jsonResponse.data.cart)
    );
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

