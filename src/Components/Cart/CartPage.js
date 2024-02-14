import {useContext, useEffect} from "react";
import {Context} from "../../context";
import {Link} from "react-router-dom";



function CartPage() {
    useEffect(() => {
        console.log(cartItems)
    })
    const {cartItems, removeItem} = useContext(Context)
    const listItems = cartItems.map((item,index) =>
        <div key={index} className={'cart--item'}>
            <img src={item.imgUrl} height={'300'} width={'300'}/>
            <p>{item.name}</p>
            <p>Выбранный размер: {item.size}</p>
            <p>Цена {item.price}</p>
            <p>Цвет {item.color}</p>
            <button data-itemId={item.itemId} data-colorId={item.colorId} data-size={item.size} onClick={handleClick}> Удалить из корзины</button>

        </div>)
    function handleClick(event) {
        const itemId = event.target.getAttribute('data-itemId')
        const colorId = event.target.getAttribute('data-colorid')
        const size = event.target.getAttribute('data-size')
        removeItem(itemId,colorId,size)
    }




    if (cartItems.length > 0) {
        return(
            <div className={'cart--page'}>
                {listItems}
            </div>)
    }
    return <div className={'cart--page'}>
        Ваша корзина пуста
    </div>

}

export default CartPage;