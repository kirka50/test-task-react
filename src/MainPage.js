import {useEffect, useState} from "react";
import {getProducts} from "./services/api";
import {Link} from "react-router-dom";

function MainPage() {
    const [productsList, setProductList] = useState([])
    useEffect(() => {
        getProducts().then(res => {
            setProductList(res)
        })
    },[])

    const listItems = productsList.map(item =>
        <div key={item.id}>
            <Link to={`product/${item.id}`} className="products__item">
                <img src={item.colors[0].images[0]} width='300' height="300"/>
                {item.name}
            </Link>
        </div>)


    return (

            <div>
                <div className={'header'}>
                    <div className={'header__cart-section'}>

                    </div>
                </div>
                <div className="products">
                    {listItems}
                </div>
            </div>

    );
}

export default MainPage;