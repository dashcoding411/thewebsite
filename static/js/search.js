function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            product.style.display = "block"; // Show product if it matches
        } else {
            product.style.display = "none"; // Hide product if it doesn't match
        }
    });
}
