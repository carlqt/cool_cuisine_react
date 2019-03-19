import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  grow: {
    flexGrow: 1,
  },
});

class CartDrawer extends React.Component {
  priceReducer = (mem, val) => {
    const { price } = val;
    const priceAmount = price.amount || 0;

    return mem + ( Number(priceAmount) * val.quantity );
  }

  removeFromCart = (item) => {
    const { removeFromCart } = this.props;
    removeFromCart(item);
  }

  renderCartItems = (item) => {
    return (
      <ListItem button key={item.id}>
        <RemoveIcon onClick={() => this.removeFromCart(item)} />
        <ListItemText primary={item.name} />
        x { item.quantity }
      </ListItem>
    )
  }

  render() {
    const {
      cartItems,
      classes,
      closeDrawer,
      theme,
      open,
    } = this.props;

    const totalPrice = cartItems.reduce(this.priceReducer, 0);

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeDrawer}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          { cartItems.map(this.renderCartItems) }
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText className={classes.grow} primary="Total Price: " />
            <ListItemText primary={`$${totalPrice}`} />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

CartDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CartDrawer);

