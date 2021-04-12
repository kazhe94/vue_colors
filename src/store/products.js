export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 1,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 6000,
                    img: './colors/color1.png'
                },
                {
                    id: 2,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 4800,
                    img: './colors/color2.png'
                },
                {
                    id: 3,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 5290,
                    img: './colors/color3.png'
                },
                {
                    id: 4,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 2800,
                    img: './colors/color4.png'
                },
                {
                    id: 5,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3400,
                    img: './colors/color5.png'
                },
                {
                    id: 6,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 4800,
                    img: './colors/color6.png'
                },
                {
                    id: 7,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3200,
                    img: './colors/color7.png'
                },
                {
                    id: 8,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 6000,
                    img: './colors/color8.png'
                },
                {
                    id: 9,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 3400,
                    img: './colors/color1.png'
                },
                {
                    id: 10,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 5290,
                    img: './colors/color2.png'
                },
                {
                    id: 11,
                    title: 'Краска Wallquest, Brownsone MS90102',
                    price: 2800,
                    img: './colors/color3.png'
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