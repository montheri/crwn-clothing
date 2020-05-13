import React from 'react'

import './custom-buttom.styles.scss'

import { CustomButtonContainer } from './custom-buttom.styles'
/*
const CustomButton= ({children, isGoogleSingIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSingIn ? 'google-sing-in' : ''} custom-button` }  {...otherProps}>
        {children}
    </button>
)
*/

const CustomButton = ({ children,  ...props }) => (
    <CustomButtonContainer {...props}>{ children }</CustomButtonContainer>
);

export default CustomButton