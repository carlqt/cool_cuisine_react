import { connect } from 'react-redux';
import { getMenu } from 'Store/Menu/actions';
import { addToCart, removeFromCart } from 'Store/Cart/actions';

import Menu from './menu';

const mapStateToProps = state => ({
  mealStore: state.mealStore,
  cartStore: state.cartStore.cart,
});

const mapDispatchToProps = {
  getMenu,
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

