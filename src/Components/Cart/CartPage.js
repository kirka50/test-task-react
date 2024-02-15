import {useContext, useEffect, useState} from "react";
import {Context} from "../../context";
import {Link, useNavigate} from "react-router-dom";
import {getSizes} from "../../services/api";



function CartPage() {
    const navigate = useNavigate()
    const [sizes, setSizes] = useState([{id:Number,label:String,number:Number}])
    useEffect(() => {
        getSizes().then(
            res => {

                setSizes(res)
            }
        )
    },[sizes])
    const {cartItems, removeItem} = useContext(Context)
    const listItems = cartItems.map((item,index) =>
        <div key={index} className={'cart--item'}>
            <img src={item.imgUrl} height={'300'} width={'300'}/>
            <p>{item.name}</p>
            <p>{item.size}</p>
            <p>Цена {item.price}</p>
            <p>Цвет {item.color}</p>
            <button data-itemid={item.itemId} data-colorid={item.colorId} data-size={item.size} onClick={handleClick}> Удалить из корзины</button>

        </div>)
    function handleClick(event) {
        const itemId = event.target.getAttribute('data-itemid')
        const colorId = event.target.getAttribute('data-colorid')
        const size = event.target.getAttribute('data-size')
        removeItem(itemId,colorId,size)
    }

    const goBack = () => navigate(-1)




    if (cartItems.length > 0) {
        return(
            <div className={'cart--page'}>
                <button onClick={goBack}> Назад </button>
                    {listItems}
            </div>)
    }
    return <div className={'cart--page'}>
        <button onClick={goBack}> Назад </button>
        Ваша корзина пуста
    </div>

}

export default CartPage;