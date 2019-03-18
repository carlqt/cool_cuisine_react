import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

import { withStyles } from '@material-ui/core/styles';
import produce from 'immer';
import List from './list';
import CartDrawer from './cartDrawer';

import 'typeface-roboto';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      displayCartDrawer: false,
    }
  }

  componentDidMount() {
    const { getMenu } = this.props;
    getMenu();
  }

  quantity = (mem, val) => (
    mem + val.quantity
  )

  openCartDrawer = () => {
    this.setState(
      produce(draft => {
        draft.displayCartDrawer = true
      })
    )
  }

  closeCartDrawer = () => {
    this.setState(
      produce(draft => {
        draft.displayCartDrawer = false
      })
    )
  }

  cartItems = () => {
    const {
      cartStore: cart,
      mealStore: { meals },
    } = this.props;

    return cart.map(item => {
      const mealID = Number(item.mealId);
      const meal = meals.byID[mealID];

      return {
        ...meal,
        quantity: item.quantity,
      }
    })
  }

  render() {
    const {
      addToCart,
      removeFromCart,
      classes,
      cartStore: cart,
      mealStore: meals,
    } = this.props;

    const { displayCartDrawer } = this.state;
    const cartCount = cart.reduce(this.quantity, 0);
    const cartItems = this.cartItems();

    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Meals
            </Typography>
            <IconButton
              onClick={this.openCartDrawer}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Badge badgeContent={cartCount} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <List
          {...{ addToCart }}
          data={meals}
        />

        <CartDrawer
          {...{ cartItems, removeFromCart }}
          open={displayCartDrawer}
          closeDrawer={this.closeCartDrawer}
        />
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(Menu);
