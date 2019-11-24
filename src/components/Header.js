import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import FilterListIcon from '@material-ui/icons/FilterList';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';

import css from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openFilter: false,
      one: false,
      two: false,
      three: false,
      four: false,
    };
  }

  toggleDialogFilter = () => this.setState((prevState) => ({ openFilter: !prevState.openFilter }));

  handleClick = (e) => {
    const { state } = this;
    state[e.target.name] = !state[e.target.name];
    this.setState(state);
  }

  render() {
    const {
      openFilter, one, two, three, four,
    } = this.state;
    return (
      <>
        <Dialog
          onClose={this.toggleDialogFilter}
          aria-labelledby="simple-dialog-title"
          fullWidth
          open={openFilter}
        >
          <DialogTitle id="simple-dialog-title">Filtro</DialogTitle>
          <Typography align="center" variant="h6">
            Idade
          </Typography>
          <FormControl className={css.checkboxItem}>
            <Fab
              name="one"
              variant="extended"
              color={one ? 'primary' : 'default'}
              aria-label="add"
              onClick={this.handleClick}
              className={css.checkbox}
            >
              One
            </Fab>
            <Fab
              name="two"
              variant="extended"
              color={two ? 'primary' : 'default'}
              aria-label="add"
              onClick={this.handleClick}
              className={css.checkbox}
            >
              Two
            </Fab>
            <Fab
              name="three"
              variant="extended"
              color={three ? 'primary' : 'default'}
              aria-label="add"
              onClick={this.handleClick}
              className={css.checkbox}
            >
              Three
            </Fab>
            <Fab
              name="four"
              variant="extended"
              color={four ? 'primary' : 'default'}
              aria-label="add"
              onClick={this.handleClick}
              className={css.checkbox}
            >
              Four
            </Fab>
          </FormControl>
          <DialogActions>
            <Button onClick={this.toggleDialogFilter} color="primary">
            Fechar e continuar
            </Button>
          </DialogActions>
        </Dialog>

        <Toolbar className={css.toolbar}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" noWrap>
            Ween
            </Typography>
          </Link>
          <div className={css.actionButtons}>
            <Input
              className={css.search}
              placeholder="Buscar pelo endereço..."
              type="search"
            />
            <IconButton onClick={this.toggleDialogFilter} aria-label="filtrar pesquisa">
              <FilterListIcon />
            </IconButton>
            <IconButton color="primary" aria-label="enviar pesquisa">
              <SendIcon />
            </IconButton>
          </div>
        </Toolbar>
      </>
    );
  }
}

export default Header;
