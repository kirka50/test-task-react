import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getProduct, getProductColor, getSizes} from "../../services/api";
import {Context} from "../../context";
import {createItem} from "../Cart/cartHandler";

function ProductInfo() {
    const {id,colorId} = useParams();
    const [colorItem,setColorItem] = useState({sizes:[],images:[]})
    const [sizes,setSizes] = useState([{id:Number, label: '', number: Number}])
    const [chosenSize, setChosenSize] = useState(0)
    const {addItem} = useContext(Context)
    const [item,setItem] = useState({})


    useEffect(() => {
        getProductColor(id, colorId).then(
            res => {
                console.log(res)
                setColorItem(res)
            }
        ).catch(err => console.log(err))
        getSizes().then(
            res => {
                setSizes(res)
            }
        )
        getProduct(id).then(
            res => {
                setItem(res)
            }
        )
    },[id,colorId])

    function ShowSize({size}){
        if(colorItem.sizes.includes(size.id)) {
            return <div
                data-sizeid={size.id}
                onClick={chooseSize}
                style={{border: chosenSize == size.id ? 'solid 4px red' : 'white',
                borderRadius: '10px',}}
                className={'size'}>
                {size.label} {size.number}
            </div>
        } else {
            return <div
                data-sizeid={size.id}
                className={'size_inactive'}>
                {size.label} {size.number}
            </div>
        }
    }

    function handleClick() {
        addItem(createItem(item,colorItem,chosenSize))
    }

    const chooseSize = (event) => {
        setChosenSize(event.target.getAttribute('data-sizeid'))
    }


    return (
        <div className={'product--info'}>
            <div className={'product--info__images'}>
                {colorItem.images.map((imageUrl, index) =>
                    <img key={index} src={imageUrl} width={'300'} height={'300'}/>
                )}
            </div>
            <div className={'product--info__title'}>
                {colorItem.name}
            </div>
            <div className={'product--info__description'}>
                {colorItem.description}
            </div>
            <div className={'product--info__price'}>
                Цена {colorItem.price}
            </div>
            <div className={'product--info__sizes'}>
                {sizes.map((size) => <ShowSize key={size.id} size={size} />)}
            </div>
            <div className={'product--info__cart-button'}>
                <button disabled={chosenSize == 0} onClick={handleClick}> В корзину </button>
            </div>
        </div>
    )
}

export default ProductInfo