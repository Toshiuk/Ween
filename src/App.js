import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import css from './App.module.scss';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Container className={css.container} maxWidth="lg">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
