import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function CartIcon({cartItems}) {




    return(
        <div>

            <div className={'cart-section__icon'}>
                Корзина:
            </div>
            <div className={'cart-section__count'}>
                {cartItems.length}
            </div>
        </div>
    )
}

export default CartIcon;