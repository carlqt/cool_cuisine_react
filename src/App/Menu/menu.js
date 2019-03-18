import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

import { withStyles } from '@material-ui/core/styles';
import List from './list';

import 'typeface-roboto';

class Menu extends Component {
  componentDidMount() {
    const { getMenu } = this.props;
    getMenu();
  }

  render() {
    const {
      addToCart,
      classes,
      cartStore: cart,
      mealStore: meals,
    } = this.props;

    // console.log(this.props);

    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Meals
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Badge badgeContent={cart.length} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <List
          {...{ addToCart }}
          data={meals}
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
