let menuItem = document.querySelectorAll('.menuItem');
let sliderWrapper = document.querySelector('.sliderWrapper');
let currentProductImg = document.querySelector('.productImg');
let currentProductTitle = document.querySelector('.productTitle');
let currentProductPrice = document.querySelector('.productPrice');
let currentProductDescription = document.querySelector('.productDescription');
let currentProductColors = document.querySelectorAll('.color');
let currentProductsizes = document.querySelectorAll('.size');


const product = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/air.png",
            },
            {
                code: "darkblue",
                img: "/img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "/img/jordan.png",
            },
            {
                code: "green",
                img: "/img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "/img/blazer.png",
            },
            {
                code: "green",
                img: "/img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "/img/crater.png",
            },
            {
                code: "lightgray",
                img: "/img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "/img/hippie.png",
            },
            {
                code: "black",
                img: "/img/hippie2.png",
            },
        ],
    },
];


let choosenProduct = product[0]
console.log(choosenProduct);



menuItem.forEach((items, index) => {
    items.addEventListener('click', (e) => {
        console.log("you Click" + " " + index);
        sliderWrapper.style.transform = `translatex(${-100 * index}vw)`;

        choosenProduct = product[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        console.log('let this img' + " " + currentProductImg.img);

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        console.log(index);  
        currentProductImg.src = choosenProduct.colors[index].img
    })
});

currentProductsizes.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        currentProductsizes.forEach((size,index)=>{
            size.style.backgroundColor = "white" ;
            size.style.color = "black" ;
        }),
        size.style.backgroundColor = "black" ;
        size.style.color = "white" ;
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener('click',()=>{
    payment.style.display = "flex"
})

close.addEventListener('click',()=>{
    payment.style.display = "none"
})


