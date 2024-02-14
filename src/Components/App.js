import {Link, RouterProvider} from "react-router-dom";
import Router from "../Router/Router";
import '../Style/main.css';
import '../Style/main.css.map';
import CartIcon from "./Cart/CartIcon";
import {useState} from "react";
import {Context} from "../context"
import MainPage from "./MainPage";

function App() {

    const [cartItems, setCartItems] = useState([])

    function addItem(item) {
        const newCartItems =
            [
                ...cartItems,
                item
            ]
        setCartItems(newCartItems)
    }


    function removeItem(itemId,colorId,size) {
        const newCartItems = cartItems.filter((item) => !(item.itemId == itemId && item.colorId == colorId && item.size == size))
        console.log(newCartItems, 'a')
        console.log(itemId,colorId,size)
        setCartItems(newCartItems)
    }
    return (
        <div className="App">
            <Context.Provider value={{
                addItem,
                cartItems,
                removeItem
            }}>
                <RouterProvider router={Router}/>
            </Context.Provider>
        </div>
    );
}

export default App;
