import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/credit_card-24px.svg';

const StripeCheckoutButton = ({ price }) => {

const priceInCentsForStripe = price * 100;
const publishableKey = 'pk_test_bxIFqEFOlSBXLGQkxxJcTUHm00XhXqInQA';
const onToken = token => {
  console.log(token);
  alert('Pagamento efetuado com sucesso!');
}

return (
      <StripeCheckout
        label='Pagar Agora'
        name='Webjump'
        billingAddress
        shippingAddress
        image={logo}
        description={`O seu total é R$ ${price.toFixed(2)}`}
        amount={priceInCentsForStripe.toFixed(2)}
        panelLabel='Pagar Agora'
        token={onToken}
        stripeKey={publishableKey}
      />
      );
};

export default StripeCheckoutButton;