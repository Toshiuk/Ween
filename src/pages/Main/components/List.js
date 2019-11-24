/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Hidden from '@material-ui/core/Hidden';

import MapGL from '../../../components/MapGL';
import Item from './Item';
import css from './List.module.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
    };
  }

  toggleShowMap = () => this.setState({ showMap: !this.state.showMap })

  render() {
    const { showMap } = this.state;
    return (
      <>
        <div className={css.switch}>
          <FormControlLabel
            control={(
              <Switch
                checked={showMap}
                color="primary"
                onClick={this.toggleShowMap}
              />
            )}
            label="Mostrar mapa"
          />
        </div>
        <Typography variant="h4" component="h3">
              Resultado
        </Typography>
        <Typography variant="subtitle1" component="h4">
              4 Escolas
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          my={2}
        >
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            className={showMap ? css.halfScreen : css.fullScreen}
            my={2}
          >
            <Item />
            <Item />
            <Item />
            <Item />
          </Box>
          <Hidden mdDown>
            { showMap
          && (
          <div className={css.map}>
            <MapGL />
          </div>
          )}
          </Hidden>
        </Box>
      </>
    );
  }
}

export default List;
