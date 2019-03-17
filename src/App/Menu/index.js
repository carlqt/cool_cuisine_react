import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getMenu } from 'Requests';

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
      <Grid className={classes.container} container spacing={8}>
      </Grid>
    );
  }
}

const styles = theme => ({
  container: {
    backgroundColor: '#eeeeee',
    height: '100vh',
  },
});

export default withStyles(styles)(Menu);
