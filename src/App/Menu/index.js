import { connect } from 'react-redux';
import { getMenu } from 'Store/Menu/actions';

import Menu from './menu';

const mapStateToProps = state => ({
  mealStore: state.mealStore,
  cartStore: state.cartStore,
});

const mapDispatchToProps = {
  getMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

