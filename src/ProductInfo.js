import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProduct, getProductColor, getSizes} from "./services/api";


function ProductInfo() {
    const {id,colorId} = useParams();
    const [colorItem,setColorItem] = useState({sizes:[],images:[]})
    const [sizes,setSizes] = useState([{id:Number, label: '', number: Number}])
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
    },[id,colorId])

    function ShowSize(size){
        if(colorItem.sizes.includes(size.id)) return <div>
            {size.label} {size.number}
        </div>
    }

    return (
        <div className={'product--info'}>
            <div className={'product--info__images'}>
                {colorItem.images.map(imageUrl =>
                    <img key={imageUrl} src={imageUrl} width={'300'} height={'300'}/>
                )}
            </div>
            <div className={'products--info__title'}>
                {colorItem.name}
            </div>
            <div className={'products--info__description'}>
                {colorItem.description}
            </div>
            <div className={'products--info__price'}>
                Цена {colorItem.price}
            </div>
            <div className={'products--sizes'}>
                {sizes.map((size) => ShowSize(size))}
            </div>


        </div>
    )
}

export default ProductInfo