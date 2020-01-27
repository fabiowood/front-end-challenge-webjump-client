import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CheckShopPage } from '../../redux/shop/shop.selectors';
import './footer.styles.scss';

const Footer = ({isOutsideShopPage}) => {
  if (isOutsideShopPage === true) {
    return null
  } else {
    return (
      <footer className='footer'></footer>
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  isOutsideShopPage: CheckShopPage
})

export default connect(mapStateToProps)(Footer);
