
import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

import css from './Item.module.scss';

class Item extends PureComponent {
  render() {
    return (
      <Box maxWidth={1 / 4} minWidth={200} m={2}>
        <Card className={css.item}>
          <Fab aria-label="like" className={css.like} size="small">
            <FavoriteIcon />
          </Fab>

          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3rSQKZDG8hiid5Nph69md13-ic5doOkFScsI9gv1qpWON7glr"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Rating name="read-only" value={3} readOnly className={css.stars} size="small" />
              <div className={css.description}>
                <Typography variant="body2" className={css.distance} component="h6">
                  Distância
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  Vagas abertas
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <Chip
                    label="Pública"
                    color="primary"
                    size="small"
                  />
                  Escola A B
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Endereço da escola
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
  }
}

export default Item;
