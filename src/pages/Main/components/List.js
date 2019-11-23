
import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';

import Item from './Item';

class List extends PureComponent {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="flex-start"
        alignItems="flex-start"
        my={5}
      >
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    );
  }
}

export default List;
