import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProduct, getProductColor} from "./services/api";


function ProductInfo() {
    const {id,colorId} = useParams();
    const [colorItem,setColorItem] = useState({})
    const [colorImages, setColorImages] = useState([])
    useEffect(() => {
        getProductColor(id, colorId).then(
            res => {
                console.log(res)
                setColorItem(res)
                setColorImages(res.images)
            }
        ).catch(err => console.log(err))
    },[id])


    return (
        <div className={'product--info'}>
            <div className={'product--info__images'}>
                {colorImages.map(imageUrl =>
                    <img key={imageUrl} src={imageUrl} width={'300'} height={'300'}/>
                )}
            </div>
            <div className={'products--info__title'}>
                {colorItem.name}
            </div>
            <div className={'products--info__description'}>
                {colorItem.description}
            </div>

        </div>
    )
}

export default ProductInfo