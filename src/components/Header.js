/* eslint-disable react/prop-types */
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
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import uniq from 'lodash/uniq';

import css from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openFilter: false,
    };
  }

  toggleDialogFilter = () => this.setState((prevState) => ({ openFilter: !prevState.openFilter }));


  render() {
    const {
      openFilter,
    } = this.state;

    const {
      filters,
      handleClick,
    } = this.props;
    return (
      <>
        <Dialog
          onClose={this.toggleDialogFilter}
          aria-labelledby="simple-dialog-title"
          fullWidth
          open={openFilter}
        >
          <DialogTitle id="simple-dialog-title">Filtro</DialogTitle>
          <>
            { uniq(filters.map((filter) => filter.category)).map((category) => (
              <>
                <Typography align="center" variant="h6">
                  { category }
                </Typography>
                <FormControl className={css.checkboxItem}>
                  { filters
                    .filter((filter) => filter.category === category)
                    .map((filter) => (
                      <Fab
                        name={filter.name}
                        variant="extended"
                        color={filter.value ? 'primary' : 'default'}
                        aria-label="add"
                        onClick={() => handleClick(filter.name)}
                        className={css.checkbox}
                      >
                        {filter.name}
                      </Fab>
                    ))}
                </FormControl>
              </>
            ))}
          </>
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
            { filters.filter((filter) => filter.value).map((filter) => (
              <Chip
                name="teste"
                label={filter.name}
                onDelete={() => handleClick(filter.name)}
              />
            ))}
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
