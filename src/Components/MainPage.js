import {useContext, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import CartIcon from "./Cart/CartIcon";
import {Context} from "../context";

function MainPage() {
    const {cartItems} = useContext(Context)

    return (
        <div>
            <div className={'header'}>
                <div className={'header__cart-section'}>
                    <Link to={'/cart'}>
                        <CartIcon cartItems={cartItems}/>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>

    );
}

export default MainPage;