import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

const priceInCentsForStripe = price * 100;
const publishableKey = 'pk_test_bxIFqEFOlSBXLGQkxxJcTUHm00XhXqInQA';
const onToken = token => {
  console.log(token);
  alert('Payment successfully completed');
}

return (
      <StripeCheckout
        label='Pay Now'
        name='Virtual Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceInCentsForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
      );
};

export default StripeCheckoutButton;