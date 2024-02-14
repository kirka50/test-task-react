import {useEffect, useState} from "react";


function CartIcon() {

    const [itemsCount,setItemsCount] = useState()
    useEffect(() => {
        setItemsCount(JSON.parse(localStorage))
    })



    return(
        <div>
            <div className={'cart-section__icon'}>
                Корзина: 0
            </div>
            <div className={'cart-section__count'}>
                {{}}
            </div>
        </div>
    )
}

export default CartIcon