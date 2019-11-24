
import React, { PureComponent } from 'react';

import HorizontalList from './components/HorizontalList';

class Main extends PureComponent {
  render() {
    return (
      <section id="main">
        <HorizontalList />
        <HorizontalList />
      </section>
    );
  }
}

export default Main;
