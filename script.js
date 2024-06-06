// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        cart.push(productId);
        alert('Producto agregado al carrito');
        console.log('Carrito:', cart);
    }
});
