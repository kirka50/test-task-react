import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getProduct, getProductColor, getSizes} from "../../services/api";
import {Context} from "../../context";
import {createItem} from "../Cart/cartHandler";

function ProductInfo() {
    const {id} = useParams();
    const [colorItem,setColorItem] = useState({sizes:[],images:[]})
    const [sizes,setSizes] = useState([{id:Number, label: '', number: Number}])
    const [chosenSize, setChosenSize] = useState(0)
    const {addItem} = useContext(Context)
    const [item,setItem] = useState({colors:[{id: Number, name: String}]})
    const [selectedColor, setSelectedColor] = useState(1)


    useEffect(() => {
        getProductColor(id, selectedColor).then(
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
    },[])
    useEffect(() => {
        getProductColor(id, selectedColor).then(
            res => {
                console.log(res)
                setColorItem(res)
                setChosenSize(0)
            }
        ).catch(err => console.log(err))
    },[selectedColor])

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

    function ShowColor({color}) {
        return <div data-colorid={color.id} onClick={selectColor}
        style={{border: selectedColor == color.id ? 'solid 4px red' : 'white',
            borderRadius: '10px',}}>
            {color.name}
        </div>

    }
    function handleButtonClick() {
        addItem(createItem(item,colorItem,chosenSize))
    }

    const chooseSize = (event) => {
        setChosenSize(event.target.getAttribute('data-sizeid'))
    }

    const selectColor = (event) => {
        setSelectedColor(event.target.getAttribute('data-colorid'))
    }


    return (
        <div className={'product--info'}>
            <div className={'product--info__images'}>
                {colorItem.images.map((imageUrl, index) =>
                    <img key={index} src={imageUrl} width={'300'} height={'300'}/>
                )}
            </div>
            <div className={'product--info__color'}>
                {item.colors.map(color => <ShowColor color={color}/>)}
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
                <button disabled={chosenSize == 0} onClick={handleButtonClick}> В корзину </button>
            </div>
        </div>
    )
}

export default ProductInfo