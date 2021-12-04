console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    productsUl.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement('li');
        let shipsToHTML = '';
        //product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
                <h2>${product.name}</h2>
                <p> Price: ${product.price}</p>
                <p>Rating: ${product.rating}</p>

            
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);


const inputProductName = document.querySelector('#inputText')
const inputProductPrice = document.querySelector('#inputPrice')
inputProductName.addEventListener('input',function(){
    const productName = inputProductName.value.toLowerCase();
    const filteredItem = products.filter((product)=> product.name.toLowerCase().indexOf(productName) > -1)
    renderProducts(filteredItem)
   
})


inputProductPrice.addEventListener('input',function(){
    const ProductPrice = inputProductPrice.value;
    const filteredPrice = products.filter((product)=> product.price < ProductPrice )
    renderProducts(filteredPrice)
   
})
