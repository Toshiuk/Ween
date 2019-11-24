import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import css from './App.module.scss';
import Routes from './routes';
import Header from './components/Header';


function App() {
  return (
    <div className={css.App}>
      <BrowserRouter>
        <Header />
        <Container className={css.container} maxWidth="lg">
          <Routes />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
