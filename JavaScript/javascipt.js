let itemList = document.querySelectorAll('.products .card');
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
        price: 550
    },
    {
        id: 2,
        name: 'Black TEE Models & and Blood',
        image: 'p2-removebg-preview.png',
        price: 1500
    },
    {
        id: 3,
        name: 'Highminds',
        image: 'p3-removebg-preview.png',
        price: 1500
    },
    {
        id: 4,
        name: 'Great Mindset Think Alone',
        image: 'p4-removebg-preview.png',
        price: 900
    },
    {
        id: 5,
        name: 'Uniqlo',
        image: 'p5-removebg-preview.png',
        price: 1250
    }
];

function initItem() {
    itemList.forEach((card, index) => {
        let item = items[index];
        card.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(item));
        card.querySelector('.buy-now-btn').addEventListener('click', () => buyNow(item));
    });
}

initItem();

let cartItems = [];

function addToCart(item) {
    let existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    reloadCart();
}

function buyNow(item) {
    let existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    reloadCart();
    // Add any logic here for redirecting to a checkout page or any other action when buying now.
}

function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <div><img src="${item.image}" style="width: 80px"/></div>
            <div><h5 class="mt-1">${item.name}</h5></div>
            <div><h6 class="mt-2">Price: ₱ ${item.price.toLocaleString()}</h6></div>
            <div><h6 class="mt-2">Quantity: ${item.quantity}</h6></div>`;
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    // Calculate subtotal, tax, and total
    subtotal.innerText = totalPrice.toLocaleString();
    tax.innerText = (totalPrice * 0.12).toLocaleString(); // Assuming 12% tax
    total.innerText = (totalPrice + parseFloat(tax.innerText)).toLocaleString();
}

function clearCart() {
    cartItems = [];
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


