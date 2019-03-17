import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';

import { withStyles } from '@material-ui/core/styles';
import { getMenu } from 'Requests';

import 'typeface-roboto';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      meals: [],
    }
  }

  async componentDidMount() {
    const resp = await getMenu()
    const { meals, cart } = resp.data;

    this.setState({
      meals,
      cart,
    });
  }

  render() {
    const { classes } = this.props;

    console.log(this.state);

    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <CartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid className={classes.contents} container spacing={8}>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    backgroundColor: '#eeeeee',
    height: '100vh',
  },
  grow: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(Menu);
