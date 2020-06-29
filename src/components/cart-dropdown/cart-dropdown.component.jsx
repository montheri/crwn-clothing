import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { 
          cartItems.length ? cartItems.map(cartItem =>(
            <CartItem key={cartItem.id} item={cartItem} />
          )) : <span className='empty-cart'>Your cart is emplty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())}

          }>Go To Chechout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
  });
 
/*
const mapStateToProps = (state) => ({
    cartItems: selectCartItem(state)
});
*/
export default withRouter(connect(mapStateToProps)(CartDropdown));


