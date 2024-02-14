
function createItem(item,colorItem,Size) {
    return {
        itemId: item.id,
        colorId: colorItem.id,
        name: item.name,
        size: Size,
        color: colorItem.name,
        price: colorItem.price,
        imgUrl: colorItem.images[0]
    }
}




function getFromCart() {
    if (localStorage.getItem('cart') != null) {
        return JSON.parse(localStorage.getItem('cart'))
    }

}

function addToCart(cartItem) {
    let storage = JSON.parse(localStorage.getItem('cart'))
    storage.push(cartItem)
    localStorage.setItem('cart', JSON.stringify(storage))
    console.log(localStorage.getItem('cart'), 'now added')
}

export {getFromCart, addToCart, createItem}