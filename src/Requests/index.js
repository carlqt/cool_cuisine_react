import apiRoutes from './apiRoutes';

export async function getMenu() {
  const url = `${apiRoutes.getMenu}`;

  const response = await fetch(url);
  const jsonResponse = await response.json();

  return {
    status: response.status,
    ok: response.ok,
    data: jsonResponse.data,
  }
}

