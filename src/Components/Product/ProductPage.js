/*
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProduct} from "../../services/api";


function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [productColors, setProductColors] = useState([])
    useEffect(() => {
        getProduct(id).then(
            res => {
                setProduct(res)
                console.log(res)
                setProductColors(res.colors)
            }
        ).catch(err => console.log(err))
    },[])

    const listProductColors = productColors.map(productColor =>
        <Link key={productColor.name} className={'products__item'} to={`/product/${id}/${productColor.id}`}>
            <img src={productColor.images[0]} width={'300'} height={'300'} />
            {`${product.name} ${productColor.name}`}
        </Link>)

    return (
        <div className={'products'}>
            {listProductColors}
        </div>
    )
}

export default ProductPage*/
