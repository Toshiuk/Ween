
import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import Item from './Item';

class List extends PureComponent {
  render() {
    return (
      <>
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
          <Item />
          <Item />
          <Item />
          <Item />
        </Box>
      </>
    );
  }
}

export default List;
