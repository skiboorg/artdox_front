import {Cookies, LocalStorage} from 'quasar'
import api from 'axios'


export default async ({ app, router, Vue, store, ssrContext }) => {
  console.info('boot: init entered')

  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  let token = cookies.get('auth_token')
  app.config.globalProperties.$cookies = cookies

  if (token) {
   await store.dispatch('auth/getUser')
   await store.dispatch('data/fetchCart')
   await store.dispatch('data/fetchOrders')
  }

  app.config.globalProperties.$auth = store.state.auth
  console.info('boot: init exited')
}


