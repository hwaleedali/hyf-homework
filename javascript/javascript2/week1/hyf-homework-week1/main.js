
const products = getAvailableProducts();
const htmlUl = document.querySelector('ul');

function renderProducts(products) {
for (let i = 0; i < products.length; i++){
    const title = document.createElement('h2')
    const price = document.createElement('li')
    const rating = document.createElement('li')
    title.innerHTML = `Title: ${products[i].name}`
    price.innerHTML = `Price: ${products[i].price}`
    rating.innerHTML = `Rating: ${products[i].rating}`

    htmlUl.appendChild(title)
    htmlUl.appendChild(price)
    htmlUl.appendChild(rating)

}
}

renderProducts(products); // This should create the ul and the li's with the individual products details
