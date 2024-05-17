let itemList = document.querySelector('.items');
let cart = document.querySelector('.cart');
let cartList = document.querySelector('.cart-list');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let subtotal = document.querySelector('.subtotal');


let items = [
    {
        id: 1,
        name: 'Original Bankster',
        image: 'p1-removebg-preview.png',
        price: 1000
        
    },
    {
        id: 2,
        name: 'Black TEE Models & and Blood',
        image: 'p2-removebg-preview.png',
        price: 550
    },
    {
        id: 3,
        name: 'Highminds',
        image: 'p3-removebg-preview.png',
        price: 550
    },
    {
        id: 4,
        name: 'Great Minds Think Alone',
        image: 'p4-removebg-preview.png',
        price: 750
    },
    {
        id: 5,
        name: 'DICKES Womens',
        image: 'p13-removebg-preview.png',
        price: 1250
    },
    {
        id: 7,
        name: 'Uniqlo pink Jacket',
        image: 'p5-removebg-preview.png',
        price: 850
    },
    {
        id: 8,
        name: 'Stussy x Nike Long Sleeve Knit Sweather',
        image: '13-removebg-preview.png',
        price: 400
    },
    {
        id: 9,
        name: 'DC Shoe Cousa T-Shirt',
        image: '17-removebg-preview.png',
        price: 1000
    },
    {
        id: 11,
        name: 'Stussy Hoodie Gray | Stussy Back Print Logo',
        image: 'p9-removebg-preview.png',
        price: 2000
    },
    {
        id: 12,
        name: 'Futuristics NIKE SB',
        image: 'shoes6-removebg-preview.png',
        price: 8000
    },
    {
        id: 13,
        name: 'DQ Shoes Fashion',
        image: 'Oscar_Beige_1_320x416-removebg-preview.png',
        price: 5000
    },
    {
        id: 14,
        name: 'DQ Top Sider Black',
        image: 'William-2_Black_1_320x416-removebg-preview.png',
        price: 10000
    },
    {
        id: 15,
        name: 'Pampa Hi Supply RS Unisex Boot - Gun Metal',
        image: 'Pampa-Hi-Supply-RS_Gun-Metal_1_320x416-removebg-preview.png',
        price: 5000
    },
    {
        id: 16,
        name: 'Hubert Sneakers',
        image: 'Hubert_White_1_320x416-removebg-preview.png',
        price: 5500
    },
    {
        id: 17,
        name: 'OUT OF STOCK',
        image: 'EraStackform_French_1_320x416-removebg-preview.png',
      
    },
    
]

function initItem() {
    items.forEach((value, key) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 15rem;');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title text-center">${value.name}</h4>
                <p class="card-text text-center">Price: ${value.price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${key})">Add to Cart</button>
            </div>`;
        itemList.appendChild(card);
    });
}

initItem();

let cartLists = [];

function addToCart(key) {
    if (cartLists[key] == null) {
        cartLists[key] = JSON.parse(JSON.stringify(items[key]));
        cartLists[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartLists.forEach((value, key) => {
        totalPrice = totalPrice + value.price;

        if (value != null) {
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            listItem.innerHTML = `
                <div><img src="${value.image}" style="width: 80px"/></div>
                <div><h5 class="mt-1">${value.name}</h5></div>
                <div><h6 class="mt-2">${value.price.toLocaleString()}</h6></div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count m-2">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            cartList.appendChild(listItem);
        }
    });

    // Calculate subtotal, tax, and total
    subtotal.innerText = totalPrice.toLocaleString();
    tax.innerText = (totalPrice * 0.12).toLocaleString(); // Assuming 12% tax
    total.innerText = (totalPrice + parseFloat(tax.innerText)).toLocaleString();

    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete cartLists[key];
    } else {
        cartLists[key].quantity = quantity;
        cartLists[key].price = quantity * items[key].price;
    }
    reloadCart();
}

function clearCart() {
    cartLists = [];
    reloadCart();
}

function toggleSearch() {
    var searchBox = document.getElementById("search-box");
    var searchIcon = document.getElementById("search-icon");
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
        searchIcon.style.display = "none";
    } else {
        searchBox.style.display = "none";
        searchIcon.style.display = "block";
    }
}

