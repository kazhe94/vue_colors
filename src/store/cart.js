export default {
    namespaced: true,
    state() {
        return {
            cart: {},
        }
    },
    mutations: {
        clear(state) {
            state.cart = {}
        },
        add(state, id) {
            if (!state.cart[id]) {
                state.cart[id] = 0
            }
            const count = state.cart[id]
            state.cart[id] = count + 1
        },
        remove(state, id) {
            const count = state.cart[id]
            state.cart[id] = count - 1
            if(count <= 1) {
                delete state.cart[id]
            }
        },
        deleteItem(state, id) {
            state.cart[id] = 0
            console.log(state.cart)
        }
    },
    getters: {
        cartCount(state) {
            return Object.keys(state.cart).reduce((acc, current) => {
                return acc += state.cart[current]
            }, 0)
        },
        cart(state) {
            return state.cart
        }
    }
}