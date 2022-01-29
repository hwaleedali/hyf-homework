console.log("Rendered Data");

async function promiseAll() {
  try {
    const fetchData1 =
      "https://api.github.com/search/repositories?q=user:sumanghimire79";
    const fetchData2 =
      "https://api.github.com/search/repositories?q=user:chunmeishui";
    const fetchData3 =
      "https://api.github.com/search/repositories?q=user:hwaleedali";

    // .then((response) => response.json())
    // .then((data) => console.log(data));
    const promise = await Promise.all([
      fetch(fetchData1),
      fetch(fetchData2),
      fetch(fetchData3),
    ]);

    const firstData = promise.map((el) => el.json());
    const finalData = await Promise.all(firstData);
    console.log(finalData);
    const mappedDate = finalData.map((el) => {
      //   console.log(el);
      //   console.log(el.items);
      el.items.map((el) => {
        const fullName = document.createElement("h3");
        const gitUrl = document.createElement("h4");
        const useName = document.createElement("h5");

        const renderElement = document.querySelector(".renderElement");
        fullName.innerHTML = `Full Name: ${el.full_name}`;
        gitUrl.innerHTML = `Git URL: ${el.git_url}`;
        useName.innerHTML = `Owners ID: ${el.owner.id}`;

        renderElement.appendChild(fullName);
        renderElement.appendChild(gitUrl);
        renderElement.appendChild(useName);

        console.log(el.full_name);
        console.log(el.git_url);
        console.log(el.owner.id);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
promiseAll();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency.toLowerCase().includes("dollar")) {
      const dollarPrice =
        this.name + " " + (this.price * 0.15).toFixed(2) + " " + currency;
      return dollarPrice;
    }
    if (currency.toLowerCase().includes("euro")) {
      const euroPrice =
        this.name + " " + (this.price * 0.13).toFixed(2) + " " + currency;
      return euroPrice;
    }
    if (currency.toLowerCase().includes("cny")) {
      const cnyPrice =
        this.name + " " + (this.price * 0.96).toFixed(2) + " " + currency;
      return cnyPrice;
    }
    if (currency.toLowerCase().includes("nrs")) {
      const nrsPrice =
        this.name + " " + (this.price * 18.08).toFixed(2) + " " + currency;
      return nrsPrice;
    }
    if (currency.toLowerCase().includes("pkr")) {
      const pkrPrice =
        this.name + " " + (this.price * 26.72).toFixed(2) + " " + currency;
      return pkrPrice;
    }
    // return currency;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
    this.productArray = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    } else {
      console.log("There is no Product Here, Ask Chunmei for info.");
    }
  }

  searchProduct(productName) {
    const searchItems = this.products
      .map((el) => el.name)
      .filter((el) => el.includes(productName));
    console.log(searchItems);
  }

  getTotal() {
    const totalValue = this.products
      .map((el) => el.price)
      .reduce((el1, el2) => el1 + el2);
    // console.log("Chunmei is busy");
    // const getTotalPrice = this.price.map(())
    // return totalValue;
    const div = document.querySelector("#para");
    const p = document.createElement("p");
    p.innerHTML = `Total Price: ${totalValue}`;
    div.appendChild(p);
    // console.log(totalValue);
  }

  renderProducts() {
    const div = document.querySelector("#para");
    const p = document.createElement("p");
    const productName = this.products.map((el) => el.name);
    p.innerHTML = `Product Names: ${productName}`;
    div.appendChild(p);
  }

  getUser(user) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then((data) => data.json())
      .then((response) => {
        // console.log(response.id);
        const div = document.querySelector("#para");
        const p = document.createElement("p");
        p.innerHTML = `User Name: ${response.name}`;
        div.appendChild(p);
      });
  }
}
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars")); // 7.5
const plant1 = new Product("plant", 50);
console.log(plant1.convertToCurrency("Euro")); // 7.4
const plant2 = new Product("plant", 50);
console.log(plant2.convertToCurrency("cny")); // 0.96
const plant3 = new Product("plant", 50);
console.log(plant3.convertToCurrency("nrs")); // 18.08
const plant4 = new Product("plant", 50);
console.log(plant4.convertToCurrency("pkr")); // 26.72

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const machine = new Product("Washing", 4000);
const vaccum = new Product("vaccum", 4000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(machine);
shoppingCart.addProduct(vaccum);
shoppingCart.addProduct(vaccum);

shoppingCart.removeProduct(machine);

shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.searchProduct("flat-screen");
shoppingCart.searchProduct("Washing");
shoppingCart.searchProduct("vaccum");
shoppingCart.getUser(1);
