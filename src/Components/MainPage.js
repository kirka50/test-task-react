import {useContext, useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import CartIcon from "./Cart/CartIcon";
import {Context} from "../context";

function MainPage() {
    const navigate = useNavigate()
    const {cartItems} = useContext(Context)
    const goBack = () => navigate(-1)

    return (
        <div>
            <div className={'header'}>
                <div className={'header__cart-section'}>
                    <button onClick={goBack}> Назад </button>
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