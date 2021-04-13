export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 1,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 6000,
                    img: './colors/color1.png',
                    type: 'fresh'
                },
                {
                    id: 2,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 4800,
                    img: './colors/color2.png',
                    type: 'sale'
                },
                {
                    id: 3,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 5290,
                    img: './colors/color3.png',
                    type: 'contract'
                },
                {
                    id: 4,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 2800,
                    img: './colors/color4.png',
                    type: 'exclusive'
                },
                {
                    id: 5,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3400,
                    img: './colors/color5.png',
                    type: 'inStock'
                },
                {
                    id: 6,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 4800,
                    img: './colors/color6.png',
                    type: 'exclusive'
                },
                {
                    id: 7,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3200,
                    img: './colors/color7.png',
                    type: 'fresh'
                },
                {
                    id: 8,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 6000,
                    img: './colors/color8.png',
                    type: 'sale'
                },
                {
                    id: 9,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3400,
                    img: './colors/color1.png',
                    type: 'contract'
                },
                {
                    id: 10,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 5290,
                    img: './colors/color2.png',
                    type: 'inStock'
                },
                {
                    id: 11,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 2800,
                    img: './colors/color3.png',
                    type: 'sale'
                },
            ]
        }
    },
    mutations: {

    },
    getters: {
        products(state) {
            return state.products
        }
    }
}