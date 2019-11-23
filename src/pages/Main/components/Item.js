
import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Item extends PureComponent {
  render() {
    return (
      <Box maxWidth={1 / 4} minWidth={200} m={2}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3rSQKZDG8hiid5Nph69md13-ic5doOkFScsI9gv1qpWON7glr"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default Item;
