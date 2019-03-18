import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const ListItem = (props) => {
  const {
    id,
    imageUrl,
    name,
    classes,
    description,
    addToCart,
  } = props;

  const onClick = () => {
    addToCart({
      id,
      imageUrl,
      name,
      description,
    });
  }

  return (
    <Grid className={classes.container} item xs={3}>
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            component="img"
            height="200"
            src={imageUrl}
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              { name }
            </Typography>
            <Typography component="p">
              { description }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            onClick={onClick}
          >
              Add to cart
          </Button>
          <Typography variant="h6" color="secondary">
            $44.50
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

const styles = theme => ({
  container: {
    minHeight: 400,
  },
});

export default withStyles(styles)(ListItem);
