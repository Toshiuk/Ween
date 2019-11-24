import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import css from './App.module.scss';
import Routes from './routes';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          name: 'Publica',
          category: 'Categoria',
          value: false,
        },
        {
          name: 'Particular',
          category: 'Categoria',
          value: false,
        },
        {
          name: 'Porto alegre',
          category: 'Localização',
          value: false,
        },
        {
          name: 'Canoas',
          category: 'Localização',
          value: false,
        },
        {
          name: 'Sao Leopoldo',
          category: 'Localização',
          value: false,
        },
        {
          name: 'Esteio',
          category: 'Localização',
          value: false,
        },
        {
          name: 'Gluten',
          category: 'Alimentação',
          value: false,
        },
      ],
    };
  }

  handleClick = (name) => {
    let { filters } = this.state;
    filters = filters.map((filter) => ({
      ...filter,
      value: filter.name === name ? !filter.value : filter.value,
    }));
    this.setState({ filters });
  }

  render() {
    const { filters } = this.state;
    return (
      <div className={css.App}>
        <BrowserRouter>
          <Header filters={filters} handleClick={this.handleClick} />
          <Container className={css.container} maxWidth="lg">
            <Routes filters={filters} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
