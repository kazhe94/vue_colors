import {computed} from 'vue'
import {useStore} from 'vuex'

export function useCartPage() {
    const store = useStore()

    const products = computed(() => store.getters['products/products'])

    const title = id => products.value.find(p => p.id === id)?.title
    const price = id => products.value.find(p => p.id === id)?.price
    const cartCount = computed(() => store.getters['cart/cartCount'])
    const cart = computed(() => store.getters['cart/cart'])

    const total = computed(() => {
        return Object.keys(cart.value).reduce((acc, id) => {
            return acc += products.value.find(p => p.id == id)?.price * cart.value[id]
        }, 0)
    })

    const isEmpty = computed(() => Object.keys(cart.value).length === 0)

    return {isEmpty, title, price, total, cart, cartCount}
}