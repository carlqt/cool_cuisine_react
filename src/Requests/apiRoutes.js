let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = "https://sheltered-river-82974.herokuapp.com"
} else {
  baseURL = "http://localhost:8000"
}

const getMenu = `${baseURL}/menu`
const cartUrl = `${baseURL}/cart_items`

export default {
  getMenu,
  cartUrl,
}

