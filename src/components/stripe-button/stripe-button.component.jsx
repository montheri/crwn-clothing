import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const pricForStripe = price * 100;
    const PublishableKey = 'pk_test_clAxcT1rBwOC9fLRypBpCTFM00QNp1hQvy'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now" // text inside the Stripe button
            name="CRWN Clothing Ltd." // the pop-in header title
            billingAddress={false}
            shippingAddress
            //image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
            image="https://svgshare.com/i/CUz.svg" // the pop-in header image (default none)
            description={`Your total price is $${price}`} // the pop-in header subtitle
            amount={pricForStripe} // cents
            panelLabel="Pay now" // prepended to the amount in the bottom pay button
            token={onToken} // submit callback
            stripeKey={PublishableKey}
/*
            ComponentClass="div"
            currency="USD"
            locale="zh"
            email="montheri@msn.com"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            zipCode={false}
            //alipay // accept Alipay (default false)
            //bitcoin // accept Bitcoins (default false)
            allowRememberMe // "Remember Me" option (default true)
           
            //opened={onOpened} // called when the checkout popin is opened (no IE6/7)
            //closed={onClosed} // called when the checkout popin is closed (no IE6/7)
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            triggerEvent="onTouchTap"
*/
        >
        </StripeCheckout>
    );
};

export default StripeCheckoutButton