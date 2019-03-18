import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ListItem from './listItem';

class List extends PureComponent {
  renderItem = (id, index) => {
    const {
      addToCart,
      data: { meals },
    } = this.props;

    const {
      name,
      description,
      quantity,
      image_url: imageUrl,
    } = meals.byID[Number(id)];

    return (
      <ListItem key={id}
        {...{
          addToCart,
          name,
          description,
          imageUrl,
          id,
          quantity,
        }}
      />
    )
  }

  render() {
    const  { classes, data } = this.props;
    const { meals } = data;

    // console.log(meals);

    return (
      <Grid container className={classes.container} spacing={8}>
        { meals.allID.map(this.renderItem) }
      </Grid>
    );
  }
}

const styles = theme => ({
  container: {
    padding: 20,
  }
});

export default withStyles(styles)(List);
