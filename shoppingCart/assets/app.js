const counter = document.getElementById('cart-counter');

const cart = [];

const addToCart = (item) => {
    cart.push(item);
    updateCartCounter();
}

const emptyCart = () => {
    cart.length = 0;
    updateCartCounter();
}

const updateCartCounter = () => {
    const counter = document.getElementById('cart-counter');
    counter.innerHTML = cart.length;
}
