import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartItemsTotalValue } from '../../redux/cart/cart.selectors';
import './checkout-page.styles.scss';

// Component Dependencies

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({ cartItems, cartTotalValue }) => {
  return (
    <section className='checkout-page'>
      <header className='checkout-header'>
        <div className='header-block'>
          <span>Produto</span>
        </div>
        <div className='header-block'>
          <span>Descrição</span>
        </div>
        <div className='header-block'>
          <span>Quantidade</span>
        </div>
        <div className='header-block'>
          <span>Preço</span>
        </div>
        <div className='header-block'>
          <span>Remover</span>
        </div>
      </header>
      <div>
        {
        cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
        }
      </div>
      <div className='total'>TOTAL: R$ {cartTotalValue.toFixed(2)}</div>
      <div className='test-warning'>
        *Por gentileza, utilize o cartão de crédito a seguir, para efetuar testes de pagamentos*
        <br />
        4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
      </div>
      <StripeCheckoutButton price= {cartTotalValue} />
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalValue: selectCartItemsTotalValue
});

export default connect(mapStateToProps)(CheckOutPage);