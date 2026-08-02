const menuData = [
    {
        id: 'curry-chicken-prata',
        name: 'Signature Curry Chicken + Crispy Roti Prata',
        chineseName: '招牌咖喱鸡 + 煎饼',
        price: 7.80,
        category: 'signature',
        image: 'assets/hero_curry.jpg',
        badge: 'Bestseller ⭐',
        description: 'Generous bowl of thick, aromatic coconut curry broth loaded with tender chicken leg and whole soft potato chunks. Served with freshly pressed golden crispy Roti Prata.',
        pairing: ['2x Roti Prata', 'Golden Curry Potato', 'Thick Coconut Broth'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'curry-chicken-bread',
        name: 'Curry Chicken + French Loaf (Baguette)',
        chineseName: '咖喱鸡 + 法国面包',
        price: 7.50,
        category: 'signature',
        image: 'assets/curry_bread.jpg',
        badge: 'Classic Favorite 🥖',
        description: 'Traditional Singapore hawker pairing! Warm crispy-crusted French loaf baguette perfect for dipping and soaking up every drop of rich spicy coconut curry broth.',
        pairing: ['Warm Baguette Loaf', 'Curry Potato', 'Chicken Thigh'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'curry-chicken-rice',
        name: 'Curry Chicken + Fragrant Jasmine Rice',
        chineseName: '咖喱鸡 + 香米饭',
        price: 6.80,
        category: 'rice',
        image: 'assets/real_drumstick.jpg',
        badge: 'Comfort Food 🍚',
        description: 'Hearty bowl of curry chicken poured over fluffy steamed Jasmine rice. Rich, comforting, and packed with traditional spices.',
        pairing: ['Steamed Jasmine Rice', 'Curry Gravy', 'Potato & Chicken'],
        spiciness: 2,
        popular: false
    },
    {
        id: 'curry-chicken-noodle',
        name: 'Signature Curry Chicken Noodle',
        chineseName: '招牌咖喱鸡面',
        price: 7.00,
        category: 'noodle',
        image: 'assets/curry_noodle.jpg',
        badge: 'Hawker Icon 🔥',
        description: 'Yellow noodles or springy Bee Hoon drenched in ultra-thick curry gravy, topped with tender chicken, fishcake slices, and spongy Tau Pok (tofu puffs) that absorb all the curry flavor.',
        pairing: ['Choice of Noodles', 'Tau Pok Tofu Puffs', 'Fishcake Slices'],
        spiciness: 3,
        popular: true
    },
    {
        id: 'family-curry-box',
        name: '168 Family Curry Feast Box (3-4 Pax)',
        chineseName: '168 家庭咖喱大餐盒 (3-4人份)',
        price: 26.80,
        category: 'family',
        image: 'assets/family_box.jpg',
        badge: 'Great Value 👨‍👩‍👧‍👦',
        description: 'Perfect for sharing at home or office! XL portion of 168 Curry Chicken (4 chicken legs, multiple potato chunks), extra pot of curry gravy, 4x Roti Prata + 1x French Loaf.',
        pairing: ['4x Chicken Thighs/Legs', '4x Prata', '1x Baguette', 'Extra Gravy Container'],
        spiciness: 2,
        popular: true
    },
    {
        id: 'extra-prata',
        name: 'Extra Roti Prata (1 pc)',
        chineseName: '加煎饼 (1张)',
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
        name: 'Extra French Loaf Baguette',
        chineseName: '加法国面包',
        price: 1.80,
        category: 'addon',
        image: 'assets/curry_bread.jpg',
        badge: 'Side',
        description: 'Freshly baked French bread slice.',
        pairing: ['1x Full Loaf'],
        spiciness: 0,
        popular: false
    },
    {
        id: 'extra-gravy',
        name: 'Extra Thick Curry Gravy Bowl',
        chineseName: '加浓郁咖喱汁',
        price: 2.00,
        category: 'addon',
        image: 'assets/curry_potato.jpg',
        badge: 'Add-on',
        description: 'Extra bowl of rich 168 coconut curry broth.',
        pairing: ['1x Gravy Bowl'],
        spiciness: 2,
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
            quote: 'Arrive early before 1:30 PM! The signature curry chicken noodles and family feast boxes are top sellers that consistently sell out fast.',
            tag: 'Hawker Secret',
            url: '#'
        }
    ]
};
