import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'

import CardIcon from '../card-icon/card-icon.component'
import CardDropdown from '../card-dropdown/card-dropdown.component'

import { connect } from 'react-redux'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>    
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/shop">Contact</Link>
            
            {currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>Sing Out</div>
            :
            <Link className='option' to="/SingIn">Sing In</Link>
            }
            <CardIcon />
        </div>
        {hidden ? null : <CardDropdown />
        } 
        
    </div>
)

const mapStateToProps = ({user: {currentUser}, card: {hidden}}) => ({
    currentUser,
    hidden

});
/*
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.card.hidden

});
*/
export default connect(mapStateToProps)(Header);