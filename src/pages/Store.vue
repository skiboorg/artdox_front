<template>
  <q-page class="page bg-grey-2">
    <div class="container">
      <q-breadcrumbs class="breadcrumbs ">
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />
        <q-breadcrumbs-el label="Корзина" />
      </q-breadcrumbs>
    </div>

    <div class="container">
      <div class="">
        <div >
           <div v-if="!is_send" class="cart">
       <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-450">Запрос на заклад картины</p>
      </div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio!</p>

            <p  class="text-grey-8 text-body2 text-avenir-300">Название картины: {{item.item.name}}</p>
             <p class="text-grey-8 text-body2 text-avenir-300">Количество: {{item.amount}}</p>
             <p class="text-grey-8 text-body2 text-avenir-300">Общая сумма: {{item.price}}</p>
             <p class="text-grey-8 text-body2 text-avenir-300">Ваше сообщение для возврата</p>
              <q-input class="q-mb-lg" style="width: 100%;max-width: 500px" type="textarea" filled square v-model="message"/>

        <div class="q-gutter-md">
            <q-btn class="q-px-lg " @click="request" :loading="loading"  size="18px" color="dark"  rounded unelevated no-caps text-color="white" label="Отправить"/>
            <q-btn class="q-px-lg " to="/" :loading="loading"  size="18px" color="dark"  rounded unelevated no-caps text-color="white" label="Вернуться в магазин"/>
        </div>

      </div>

      <div v-else class="cart">
       <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-450">Запрос на возврат картины</p>
      </div>
        <div  class="">
          <p class="text-fs18 text-bold">Ваш запрос на возврат №{{order_id}} успешно сформирован!</p>
          <q-separator class="q-mb-md"/>
          <p class="q-mb-lg">После подтверждения оплаты от банка вам на почту придет письмо с деталями вашего заказа и чек вашего заказа.</p>
          <p class="q-mb-lg">Мы с вами свяжемся в ближайшее время по указанной вами почте для уточнения сроков и адреса доставки!</p>
          <p class="q-mb-xl">Статус и содержание заказа вы можете отслеживать в своем личном кабинете в разделе “Мои заказы”.</p>
          <div class="text-center">
             <q-btn class="q-px-lg "    size="18px" color="dark" to="/" rounded unelevated no-caps text-color="white" label="Вернуться в магазин"/>

          </div>
        </div>
      </div>
        </div>

      </div>

    </div>
  </q-page>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      loading:false,
      is_send:false,
      message:null,
      item:{item:{}},
      order_id:0

    }
  },

  async beforeMount(){
    const resp = await this.$api.get(`/api/order/get_order_item?id=${this.$route.params.item_id}`)
    this.item = resp.data
  },

  methods:{
    async request(){
      this.loading = !this.loading
      const resp = await this.$api.post('/api/data/s_form',{id:this.item.id,text:this.message})
      this.order_id = resp.data.id
      this.is_send = true
      this.$q.notify({
        message: 'Сообщение отправлено',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      this.loading = !this.loading
    }



  },

}
</script>
<style lang="sass" scoped>
.cart-wrapper
  max-width: 725px
  margin: 0 auto
  padding: 0 10px
.cart
  background: #FFFFFF
  padding: 28px 84px
  &-item
    padding-bottom: 40px
    border-bottom: 1px solid #E5E5E5
    margin-bottom: 20px
    &:last-child
      border-bottom: none
.item
  &-card
    display: grid
    grid-template-columns: 1fr 2fr
    grid-gap: 30px
@media (max-width: 768px)
  .cart
    padding: 10px
  .item
    &-card
      grid-template-columns: 1fr
.cart-total
  position: sticky
  top: 100px
</style>
