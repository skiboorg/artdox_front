import { api } from 'boot/axios'
import { Cookies } from 'quasar'
import { Notify } from 'quasar'

const state = () => ({
  user:{},
  loggedIn:false,

})

const mutations = {
 updateUser(state,data){
    state.user = data
  },
  updateUserStatus(state,data){
    state.loggedIn = data
  },
  updateSocket(state,data){
      state.socket = data
    },

}

const actions = {

  loginUser({dispatch},data){
    api.post('/auth/token/login/',data)
      .then(response=>{
        Cookies.set('auth_token',response.data.auth_token)
        api.defaults.headers.common['Authorization'] = 'Token ' + response.data.auth_token
        dispatch('getUser',true)
      })
      .catch(function (error) {
          Notify.create(
            {
              message: 'Неверный пароль',
              position:'top-right',
              color: 'red'
            }
          )
      })

  },
  async getUser ({commit,dispatch},redirect){
    console.log('getting user')

   const response = await api.get( '/api/user/me/')
    console.log('getUser', response.data)
    commit('updateUser', response.data)
    commit('updateUserStatus', true)

    redirect ? await this.$router.push('/') : null
  },

  logoutUser({commit}){
    api.post( '/auth/token/logout/')
      .then(response=>{
        console.log('logoutUser', response)
        api.defaults.headers.common['Authorization'] = null
        Cookies.remove('auth_token')
        commit('updateUser', {})
        commit('updateUserStatus', false)
        this.$router.push('/')

      })
      .catch(function (error) {
      })
  }
}

export const getters = {
  isLoggedIn: (state) => state.loggedIn,
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
