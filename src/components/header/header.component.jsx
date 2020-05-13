import React from 'react'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink  } from './header.styles'

import {auth} from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { connect } from 'react-redux'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>    
        </LogoContainer>
        <OptionContainer >
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/shop">Contact</OptionLink>
            
            {currentUser ? 
            <OptionLink as='div' onClick={() => auth.signOut()}>Sing Out</OptionLink>
            :
            <OptionLink  to="/SingIn">Sing In</OptionLink>
            }
            <CartIcon />
        </OptionContainer>
        {hidden ? null : <CartDropdown />
        } 
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
/*
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden

});
*/
export default connect(mapStateToProps)(Header);