const menuData = [
    {
        id: 'curry-chicken-prata',
        name: 'Curry Chicken + Prata (咖喱鸡 + 印度煎饼)',
        chineseName: '咖喱鸡 + 印度煎饼',
        price: 7.20,
        category: 'signature',
        image: 'assets/hero_curry.jpg',
        badge: 'Stall Signature ⭐',
        description: 'Generous bowl of thick, aromatic coconut curry broth loaded with tender chicken leg and whole soft potato chunks. Served with crispy Roti Prata.',
        pairing: ['Roti Prata', 'Golden Curry Potato', 'Thick Coconut Broth'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'curry-chicken-bread',
        name: 'Curry Chicken + Bread (咖喱鸡 + 面包)',
        chineseName: '咖喱鸡 + 面包',
        price: 7.20,
        category: 'signature',
        image: 'assets/curry_bread.jpg',
        badge: 'Must Try 🥖',
        description: 'Traditional Singapore hawker pairing! Warm crispy-crusted French loaf baguette perfect for dipping and soaking up every drop of rich spicy coconut curry broth.',
        pairing: ['Warm Baguette Loaf', 'Curry Potato', 'Chicken Leg'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'curry-chicken-rice',
        name: 'Curry Chicken + Rice (咖喱鸡 + 饭)',
        chineseName: '咖喱鸡 + 饭',
        price: 6.70,
        category: 'rice',
        image: 'assets/real_drumstick.jpg',
        badge: 'Comfort Bowl 🍚',
        description: 'Hearty bowl of curry chicken poured over fluffy steamed Jasmine rice. Rich, comforting, and packed with traditional spices.',
        pairing: ['Steamed Jasmine Rice', 'Curry Gravy', 'Potato & Chicken'],
        spiciness: 2,
        popular: false
    },
    {
        id: 'curry-chicken-noodle',
        name: 'Curry Chicken Noodle / Bee Hoon (咖喱鸡面)',
        chineseName: '咖喱鸡面 / 米粉',
        price: 6.00,
        category: 'noodle',
        image: 'assets/curry_noodle.jpg',
        badge: 'Popular Favorite 🔥',
        description: 'Yellow noodles or springy Bee Hoon drenched in ultra-thick curry gravy, topped with tender chicken, fishcake slices, and spongy Tau Pok (tofu puffs).',
        pairing: ['Choice of Yellow Noodle / Bee Hoon', 'Tau Pok Tofu Puffs', 'Fishcake Slices'],
        spiciness: 3,
        popular: true
    },
    {
        id: 'curry-chicken-bowl',
        name: 'Signature Curry Chicken Bowl (咖喱鸡)',
        chineseName: '招牌咖喱鸡',
        price: 6.00,
        category: 'signature',
        image: 'assets/hero_curry.jpg',
        badge: 'Classic Bowl',
        description: 'Original bowl of 168 Curry Chicken with tender drumstick/thigh and soft potato chunks simmered in rich gravy.',
        pairing: ['Chicken Drumstick/Thigh', 'Soft Potatoes', 'Extra Rempah Gravy'],
        spiciness: 2,
        popular: false
    },
    {
        id: 'family-curry-box',
        name: 'Takeaway Family Box (打包 咖喱鸡 Family Box)',
        chineseName: '打包 咖喱鸡 Family Box (3-4人份)',
        price: 28.00,
        category: 'family',
        image: 'assets/family_box.jpg',
        badge: 'Family Sharing 👨‍👩‍👧‍👦',
        description: 'Perfect for sharing at home or office! XL takeaway pot of 168 Curry Chicken (multiple chicken legs, whole potatoes), extra container of curry gravy, plus sides.',
        pairing: ['Multiple Chicken Legs', 'Soft Potatoes', 'Extra Gravy Pot', 'Takeaway Container'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'extra-prata',
        name: 'Extra Roti Prata (加煎饼)',
        chineseName: '加印度煎饼 (1张)',
        price: 1.50,
        category: 'addon',
        image: 'assets/curry_prata.jpg',
        badge: 'Side',
        description: 'Crispy on the outside, fluffy inside.',
        pairing: ['1x Crispy Prata'],
        spiciness: 0,
        popular: false
    },
    {
        id: 'extra-baguette',
        name: 'Extra French Loaf Baguette (加面包)',
        chineseName: '加法国面包',
        price: 1.80,
        category: 'addon',
        image: 'assets/curry_bread.jpg',
        badge: 'Side',
        description: 'Freshly baked French bread slice for dipping.',
        pairing: ['1x Baguette Loaf'],
        spiciness: 0,
        popular: false
    }
];

const stallInfo = {
    name: '168 Curry Chicken',
    chineseName: '168 咖喱鸡',
    stallNumber: '#01-76',
    hawkerCentre: 'Old Airport Road Food Centre',
    address: '51 Old Airport Road, #01-76, Singapore 390051',
    phone: '+65 9105 8220',
    whatsappPhone: '6591058220',
    mrt: 'Dakota MRT (CC8) - Exit A (3 min walk) | Mountbatten MRT (CC7) (7 min walk)',
    hours: [
        { days: 'Monday – Friday', open: '10:30', close: '19:00', note: 'Or until sold out' },
        { days: 'Saturday – Sunday', open: '11:30', close: '19:00', note: 'Or until sold out' }
    ],
    reviews: [
        {
            author: 'SethLui.com',
            rating: 5,
            quote: 'One of Old Airport Road’s standout hawker gems. The comforting, home-style coconut curry broth with tender chicken and crispy prata is absolute comfort food heaven!',
            tag: 'Top Hawker Guide',
            url: 'https://sethlui.com'
        },
        {
            author: 'DanielFoodDiary.com',
            rating: 5,
            quote: 'Hawker-style curry chicken made with Grandma’s secret recipe. Rich, non-greasy coconut gravy overflowing with tender chicken legs and melt-in-your-mouth potatoes.',
            tag: 'Must-Eat Hawker',
            url: 'https://danielfooddiary.com'
        },
        {
            author: 'CNA Lifestyle',
            rating: 4.9,
            quote: 'Authentic heritage flavors passed down over generations. Pairs miraculously well with their warm toasted French loaf or fresh Roti Prata.',
            tag: 'Featured Heritage',
            url: 'https://cna.asia'
        },
        {
            author: 'Burpple Community',
            rating: 4.8,
            quote: 'Rated 4.8/5 by local foodies! Generous chicken leg portion, aromatic rempah spice paste, and spongy Tau Pok that soaks up every bit of curry gravy.',
            tag: 'Foodie Choice',
            url: 'https://burpple.com'
        },
        {
            author: 'EatBook Singapore',
            rating: 5,
            quote: 'A must-try hawker stall at Stall #01-76! The coconut curry broth is perfectly balanced with lemongrass, galangal, and fresh curry leaves.',
            tag: 'Hawker Spotlight',
            url: 'https://eatbook.sg'
        },
        {
            author: 'Hawker Guide SG',
            rating: 4.9,
            quote: 'Advance Order hotline available at 9105 8220! The signature curry chicken set and family feast boxes are top sellers.',
            tag: 'Hawker Secret',
            url: '#'
        }
    ]
};
