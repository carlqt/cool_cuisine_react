import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ListItem from './listItem';

class List extends PureComponent {
  renderItem = (item, index) => {
    const {
      name,
      description,
      image_url: imageUrl,
      id,
    } = item;

    return (
      <ListItem key={id}
        {...{
          name,
          description,
          imageUrl,
          id,
        }}
      />
    )
  }

  render() {
    const  { classes, data } = this.props;

    return (
      <Grid container className={classes.container} spacing={8}>
        { data.map(this.renderItem) }
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
