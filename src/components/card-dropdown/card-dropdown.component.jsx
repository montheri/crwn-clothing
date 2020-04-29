import React from 'react'
import CustomButton from '../custom-buttom/custom-buttom.component'

import './card-dropdown.styles.scss'

const CardDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go To Chechout</CustomButton>
    </div>
)

export default CardDropdown

