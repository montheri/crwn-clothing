import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-buttom/custom-buttom.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItem}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItem.map(cartItem =>(
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        </div>
        <CustomButton>Go To Chechout</CustomButton>
    </div>
);

  
const mapStateToProps = ({ cart:{ cartItem } }) => ({
    cartItem
});

export default connect(mapStateToProps)(CartDropdown);


