
function getFromCart() {
    return JSON.parse(localStorage.getItem('cart'))
}

function addToCart(cartItem) {
    let storage = JSON.parse(localStorage.getItem('cart'))
    storage.push(cartItem)
    localStorage.setItem('cart', JSON.stringify(storage))
    console.log(localStorage.getItem('cart'), 'now added')
}

export {getFromCart, addToCart}