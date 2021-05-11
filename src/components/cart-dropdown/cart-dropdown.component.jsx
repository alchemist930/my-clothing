import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import  CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className={` ${ cartItems.length ? 'cart-items': 'empty-message'}`} >
        { 
        cartItems.length ? ( cartItems.map(cartItem => (<CartItem key={cartItem.id} item ={cartItem}/>))):' Your cart is empty'
       
        }
        </div>
        <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden());}}>Go To Checkout</CustomButton>
    </div>
);

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));