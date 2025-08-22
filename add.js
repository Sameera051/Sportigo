let totalPrice = 0;

// Adding event listeners to the product items
document.querySelectorAll('.product-item').forEach(product => {
    product.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        addToCart(productName, productPrice);
    });
});

// Function to add item to the cart
function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Create a new list item with the product name and price
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;

    // Create a delete button for each item in the cart
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.classList.add('remove-item');
    deleteButton.addEventListener('click', function() {
        removeFromCart(listItem, productPrice);
    });

    listItem.appendChild(deleteButton);
    cartItems.appendChild(listItem);

    // Update the total price
    totalPrice += productPrice;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove item from the cart
function removeFromCart(listItem, productPrice) {
    const totalPriceElement = document.getElementById('total-price');
    
    // Remove the list item
    listItem.remove();

    // Decrease the total price
    totalPrice -= productPrice;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
