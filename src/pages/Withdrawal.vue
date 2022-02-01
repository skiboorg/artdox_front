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
        <p class="no-margin text-fs18 text-avenir-600">Запрос на вывод средств</p>
      </div>
             <p>Введите в текстовом поле реквизиты для вывода средств на выбранную вами платежную систему. После оформления запроса вам придет письмо на указанную вами при регистрации почту.
<br><br>
Денежные средства будут перечислены по указанным реквизитам в течении 24 часов с момента формирования заявки. После обработки заявки в личном кабинете вы увидите списания средств из раздела “сумма для вывода”. </p>

            <p  class="text-grey-8 text-body2 text-avenir-300 q-mb-sm">Доступная сумма для вывода</p>
             <p class="text-dark text-avenir-450">{{$auth.user.pay_summ}} ₽</p>

             <p class="text-grey-8 text-body2 text-avenir-300 q-mb-sm">Выбор платежной системы</p>
             <q-list  style="width: 100%;max-width: 500px" class="q-mb-lg">


      <q-item style="padding: 0" dense tag="label" v-for="p_type in payment_types" :key="p_type.id">
        <q-item-section avatar>
          <q-radio dense color="dark" v-model="payment_type" :val="p_type.id"  />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{p_type.label}}</q-item-label>
        </q-item-section>
      </q-item >
               <q-item style="padding: 0" dense tag="label"  >
        <q-item-section avatar>
          <q-radio dense color="dark" v-model="payment_type" :val="0"  />
        </q-item-section>
        <q-item-section>
          <q-item-label>Иное</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
             <p  class="text-grey-8 text-body2 text-avenir-300">Ваше сообщение</p>
              <q-input  class="q-mb-lg" style="width: 100%;max-width: 500px" type="textarea" filled square v-model="message"/>

        <div class="q-gutter-md">
            <q-btn class="q-px-lg " @click="request" :loading="loading"  size="18px" color="dark"  rounded unelevated no-caps text-color="white" label="Отправить"/>
            <q-btn class="q-px-lg " to="/" :loading="loading"  size="18px" color="dark"  rounded unelevated no-caps text-color="white" label="Вернуться в магазин"/>
        </div>

      </div>

      <div v-else class="cart">
       <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Ваш запрос на вывод №{{order_id}} успешно сформирован!</p>
      </div>
        <div  class="">

          <p class="q-mb-xl">После обработки вашего запроса мы с вами свяжемся по почте и прикрепим чек для подтверждения возврата денежных средств на указанные вами реквизиты. Денежные средства будут перечислены по указанным реквизитам в течении 24 часов с момента формирования заявки.</p>
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
      payment_types:[],
      payment_type:null,
      order_id:0

    }
  },

  async beforeMount(){
    const resp = await this.$api.get(`/api/user/payment_types`)
    this.payment_types = resp.data
  },

  methods:{
    async request(){
      this.loading = !this.loading
      const resp = await this.$api.post('/api/user/withdrawal_request',{message:this.message,payment_type:this.payment_type})
      this.order_id = resp.data.id
      this.is_send = true
      this.$q.notify({
        message: 'Запрос отправлен отправлено',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      this.loading = !this.loading
    }



  },

}
</script>
<style lang="sass" >

.q-list > .q-hoverable:hover > .q-focus-helper
  opacity: 0 !important

.q-item__section
  padding: 0 !important
.q-item__section--avatar
  min-width: 35px !important
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
