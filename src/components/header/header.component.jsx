import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { connect } from 'react-redux';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to ="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/'>
                Contact
            </Link>
            { currentUser ? 
                <div className= 'option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            :
            <Link className='option' to='/signin'>
                Sign In
            </Link>
            }
            <CartIcon/>
        </div>
        <CartDropdown/>
    </div>
);
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);