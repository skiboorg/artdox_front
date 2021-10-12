import { api } from 'boot/axios'

const state = () => ({
  cart:[],
  orders:[],


})

const mutations = {
  updateCart(state,data){
    state.cart = data
  },
  updateOrders(state,data){
    state.orders = data
  }
}

const actions = {
  async fetchCart({commit}){
    const response = await api.get('/api/cart/get')
    commit('updateCart',response.data)

  },
   async fetchOrders({commit}){
    const response = await api.get('/api/order/get')
    commit('updateOrders',response.data)

  },

}

const getters = {
  cart: (state) => state.cart,
  orders: (state) => state.orders,



}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


