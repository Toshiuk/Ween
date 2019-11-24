/* eslint-disable react/jsx-props-no-spreading */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Item from './Item';
import css from './HorizontalList.module.scss';

import './slick-arrow.css';

class HorizontalList extends PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: '10px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className={css.info}>
          <div className={css.title}>
            <Typography variant="h4" component="h3">
              Escolas particulares
            </Typography>
            <Typography variant="subtitle1" component="h4">
              Texto de descrição
            </Typography>
          </div>
          <Link to="/list">
            <Button variant="contained" className={css.show_all}>Ver todos</Button>
          </Link>
        </div>
        <Slider {...settings} className={css.slider}>
          <Item />
          <Item />
          <Item />
          <Item />
        </Slider>
      </div>
    );
  }
}

export default HorizontalList;
