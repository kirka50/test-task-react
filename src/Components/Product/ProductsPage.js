import {useEffect, useState} from "react";
import {getProducts} from "../../services/api";
import {Link} from "react-router-dom";


function ProductsPage() {
    const [productsList, setProductList] = useState([])

    useEffect(() => {
        getProducts().then(res => {
            setProductList(res)
        })
    },[])

    const listItems = productsList.map((item) =>
        <div key={item.id}>
            <Link to={`product/${item.id}`} className="products__item">
                <img src={item.colors[0].images[0]} width='300' height="300"/>
                {item.name}
            </Link>
        </div>)

    return (
        <div className={'products'}>
            {listItems}
        </div>
    )
}

export default ProductsPage