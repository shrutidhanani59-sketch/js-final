let addproductToList = {
    Women: [
        {
            company: "Zara",
            model: "Women's Casual Kurti",
            img: "imges/W-cloth1.jpg",
            price: 1299,
            description: "Comfortable cotton casual shirt for women.",
            star: "⭐⭐⭐⭐",

        },
        {
            company: "H&M",
            model: "Women's Casual Kurti",
            img: "imges/W-cloth2.jpg",
            price: 999,
            description: "Stylish floral printed top for everyday wear.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Levi's",
            model: "Women's Formal Shirt",
            img: "imges/W-cloth3.jpg",
            price: 2499,
            description: "Classic blue denim jacket with premium quality.",
            star: "⭐⭐⭐⭐",


        },
        {
            company: "Allen Solly",
            model: "Women's Formal Shirt",
            img: "imges/W-cloth4.jpg",
            price: 1599,
            description: "Elegant formal shirt suitable for office wear.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Bangles: [
        {
            company: "Shining",
            model: "Gold Plated Bangles",
            img: "imges/bangle.jpg",
            price: 899,
            description: "Elegant gold-plated bangles perfect for weddings, festivals, and traditional occasions.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Fashion Hub",
            model: "Fabric Bangles Set",
            img: "imges/fabric_bangles.jpg",
            price: 499,
            description: "Beautiful handmade fabric bangles with colorful embroidery for ethnic wear.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Royal Collection",
            model: "Designer Kada Set",
            img: "imges/kada_set.jpg",
            price: 1299,
            description: "Stylish designer kada set with premium finish, ideal for festive and party wear.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Trendy Style",
            model: "Plastic Bangles Set",
            img: "imges/plastic_bangles.jpg",
            price: 299,
            description: "Lightweight and colorful plastic bangles suitable for everyday and casual wear.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Fashwash: [
        {
            company: "Cetaphil",
            model: "Gentle Skin Cleanser",
            img: "imges/centaphill.jpg",
            price: 599,
            description: "A gentle face wash suitable for all skin types, especially sensitive skin.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Himalaya",
            model: "Purifying Neem Face Wash",
            img: "imges/himalaya.jpg",
            price: 249,
            description: "Neem and turmeric face wash that helps remove impurities and prevents pimples.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Lotus Herbals",
            model: "Tea Tree Face Wash",
            img: "imges/lotus.jpg",
            price: 299,
            description: "Tea tree face wash that controls excess oil and deeply cleanses the skin.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Dot & Key",
            model: "Barrier Repair Gentle Face Wash",
            img: "imges/dot_key.jpg",
            price: 399,
            description: "Hydrating face wash that cleanses without stripping the skin's natural moisture.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Men: [
        {
            company: "Nike",
            model: "Men's Cotton T-Shirt",
            img: "imges/M-cloth1.jpg",
            price: 1599,
            description: "Premium cotton round-neck T-shirt with a comfortable fit.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Adidas",
            model: "Men's Sports T-Shirt",
            img: "imges/M-cloth2.jpg",
            price: 1599,
            description: "Breathable sports T-shirt designed for daily wear and workouts.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Puma",
            model: "Men's Graphic T-Shirt",
            img: "imges/M-cloth3.jpg",
            price: 1599,
            description: "Stylish graphic print T-shirt made from soft cotton fabric.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Levi's",
            model: "Men's Casual T-Shirt",
            img: "imges/M-cloth4.jpg",
            price: 1599,
            description: "Classic casual T-shirt with a modern fit for everyday use.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Headphone: [
        {
            company: "JBL",
            model: "Flip 6 Bluetooth Speaker",
            img: "imges/jbl.jpg",
            price: 11999,
            description: "Portable Bluetooth speaker with powerful bass, waterproof design, and long battery life.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Noise",
            model: "Air Buds Pro",
            img: "imges/noise.jpg",
            price: 2999,
            description: "True wireless earbuds with ENC, touch controls, and up to 45 hours of playback.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Sony",
            model: "WH-CH720N Wireless Headphones",
            img: "imges/sony.jpg",
            price: 8999,
            description: "Premium wireless headphones with active noise cancellation and crystal-clear sound.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Zebronics",
            model: "Zeb-Juke Bluetooth Speaker",
            img: "imges/zebrovics.jpg",
            price: 3499,
            description: "Compact Bluetooth speaker with rich sound, deep bass, and multiple connectivity options.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Mobile: [
        {
            company: "Apple",
            model: "iPhone 13",
            img: "imges/apple.jpg",
            price: 59999,
            description: "Premium smartphone with the A18 chip, Super Retina XDR display, and advanced camera system.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Google",
            model: "Pixel 9",
            img: "imges/google.jpg",
            price: 74999,
            description: "AI-powered smartphone with a clean Android experience and an outstanding camera.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Motorola",
            model: "Edge 50 Pro",
            img: "imges/motorola.jpg",
            price: 34999,
            description: "5G smartphone featuring a pOLED display, fast charging, and a powerful Snapdragon processor.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Vivo",
            model: "V50 5G",
            img: "imges/vivo.jpg",
            price: 37999,
            description: "Stylish 5G smartphone with an AMOLED display, excellent cameras, and long battery life.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Leptop: [
        {
            company: "Apple",
            model: "MacBook Air M4",
            img: "imges/appleL.jpg",
            price: 109999,
            description: "Lightweight laptop powered by the Apple M4 chip with an all-day battery life.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Dell",
            model: "XPS 13",
            img: "imges/dell.jpg",
            price: 99999,
            description: "Premium ultrabook with a stunning display, Intel Core processor, and sleek design.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "HP",
            model: "Pavilion 15",
            img: "imges/hp.jpg",
            price: 68999,
            description: "Reliable laptop for work, study, and entertainment with fast performance.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Lenovo",
            model: "IdeaPad Slim 5",
            img: "imges/lenova.jpg",
            price: 62999,
            description: "Slim and powerful laptop featuring a Full HD display and long battery life.",
            star: "⭐⭐⭐⭐",
        }
    ],

    Refrigerators: [
        {
            company: "Samsung",
            model: "253L Double Door Refrigerator",
            img: "imges/samsung.jpg",
            price: 28999,
            description: "Energy-efficient double-door refrigerator with Digital Inverter Technology and spacious storage.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Whirlpool",
            model: "265L Frost Free Refrigerator",
            img: "imges/whirlpool.jpg",
            price: 26999,
            description: "Frost-free refrigerator with IntelliFresh technology to keep food fresh for longer.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Godrej",
            model: "244L Double Door Refrigerator",
            img: "imges/godrej.jpg",
            price: 24999,
            description: "Stylish refrigerator with toughened glass shelves and excellent cooling performance.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Haier",
            model: "325L Inverter Refrigerator",
            img: "imges/haier.jpg",
            price: 32999,
            description: "Large-capacity refrigerator with inverter compressor, fast cooling, and low power consumption.",
            star: "⭐⭐⭐⭐",
        }
    ],

    AC: [
        {
            company: "Daikin",
            model: "1.5 Ton Inverter Split AC",
            img: "imges/daikin.jpg",
            price: 42999,
            description: "Energy-efficient inverter split air conditioner with fast cooling, low noise, and 5-star performance.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Hitachi",
            model: "1.5 Ton Inverter Split AC",
            img: "imges/hitachi.jpg",
            price: 40999,
            description: "High-performance inverter AC with powerful cooling, silent operation, and energy-saving technology.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "IFB",
            model: "1.5 Ton 5 Star Split AC",
            img: "imges/ifb.jpg",
            price: 38999,
            description: "Smart split AC with HD compressor, turbo cooling, and eco-friendly refrigerant.",
            star: "⭐⭐⭐⭐",
        },
        {
            company: "Voltas",
            model: "1.5 Ton Inverter Split AC",
            img: "imges/voltas.jpg",
            price: 37999,
            description: "High-performance inverter split AC with fast cooling, energy-efficient operation, and low noise.",
            star: "⭐⭐⭐⭐",
        },
    ],


}

console.log(localStorage);
localStorage.setItem("addproductToList", JSON.stringify(addproductToList));

const data = JSON.parse(localStorage.getItem("addproductToList"));

for (const key in data) {
    let section = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.append(key);
    section.append(h2);
    console.log(section);

    let div = document.createElement('div');

    for (const element of data[key]) {

        let main = document.createElement('main');

        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        let star = document.createElement('p');
        let button = document.createElement('button');

        h3.append(element.company);
        h4.append(element.model);
        h5.append(element.price);
        img.src = element.img;
        p.append(element.description);
        star.append(element.star);
        button.innerHTML = "Add cart";

        main.appendChild(h3);
        main.appendChild(img);
        main.appendChild(h4);
        main.appendChild(p);
        main.appendChild(star);
        main.appendChild(button);

        div.appendChild(main);
    }

    section.appendChild(div);
    document.querySelector("article").appendChild(section);

}


    document.querySelector(".add").onclick = function () {

    let company = prompt("Enter Company Name");
    let model = prompt("Enter Product Name");
    let price = prompt("Enter Price");
    let image = prompt("Enter Image Path");

}


