import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItem, selectCartTotals } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span className='last-child'>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
           <CheckoutItem key={cartItem.id} cartItem={cartItem} /> // cartItem.name
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the follwing test credit card for payments*
            <br />
            4242 4242 4242 4242 -Exp: 01/21 CVV: 123
        </div>
        <StripeCheckoutButton className='button'  price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotals
});

export default connect(mapStateToProps)(CheckOutPage);