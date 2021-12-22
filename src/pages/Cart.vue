<template>
  <q-page class="page bg-grey-2">
    <div class="container">
      <q-breadcrumbs class="breadcrumbs ">
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />
        <q-breadcrumbs-el label="Корзина" />
      </q-breadcrumbs>
    </div>

    <div class="cart-wrapper">

      <div v-if="cart.items.length>0" class="cart">
        <p class="text-avenir-600 text-fs18 text-dark">Моя корзина</p>
        <div class="cart-item" v-for="item in cart.items" :key="item.id">
          <div class="item-card q-mb-lg">
            <div class=" " >
              <img class="img q-mb-lg" :src="item.item.image_thumb" alt="">
              <p class="no-margin link text-caption cursor-pointer" @click="deleteItem(item.id)">Удалить товар</p>
<!--              <div class="overlay-img__overlay">-->
<!--                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>-->
<!--                </svg>-->
<!--              </div>-->
            </div>
            <div class="">
              <div class="flex items-start justify-between q-mb-md">
                <p class="no-margin text-playfair text-h5 text-dark">«{{item.item.name}}»</p>
                <p class="no-margin text-warning text-fs18 q-mb-none text-avenir-450">{{item.item.price}} ₽ x {{item.amount}} шт. = {{item.price}} ₽</p>
              </div>
              <div class="text-avenir-300 q-mb-lg-xl" v-html="item.item.description"></div>
              <p class="text-caption text-grey q-mb-none">Артикул № {{item.item.article}}</p>
              <p class="text-caption text-grey q-mb-lg-xl">Размер {{item.item.size}}</p>
            </div>
          </div>

        </div>
        <p class="text-avenir-600 text-fs18 text-dark">  Итого : {{cart.price}} ₽</p>
 <div class="cart-bottom">
          <p class="text-avenir-600 text-fs18 text-dark">Доставка</p>
          <q-list dense class="q-mb-md">

      <q-item  tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio dense v-model="delivery" val="courier" color="dark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Курьером</q-item-label>
           <q-item-label caption>Доставляем по Москве и МО своим курьером в любое удобное вам время!</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio dense v-model="delivery" val="sdek" color="dark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>СДЭК до двери</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio dense v-model="delivery" val="post" color="dark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Почта России (до отделения)</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
          <p class="text-caption">Введите ваш адрес, а так же комментарии к доставке</p>
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            type="textarea"
            v-model="address"

            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Это обязательное поле']"
          />

      </div>
        <q-separator spaced="xl"/>
<!--          <q-checkbox  dense class="rounded-borders q-mb-sm" v-model="agree" label="Согласен с пользовательским соглашением" />-->
<!--        <q-checkbox style="line-height: 100%" dense class=" q-mb-lg" v-model="agree1" label="Согласен с договором передачи картины в управление" />-->
<!--        :disable="!agree || !agree1"-->
          <q-btn class="q-px-lg "  :loading="loading"  size="18px" color="dark" @click="createOrder" rounded unelevated no-caps text-color="white" label="Купить"/>


      </div>

      <div v-else class="cart">
        <p v-if="!order_id" class="no-margin text-avenir-600 text-fs18 text-dark">Корзина пуста</p>
        <div v-if="order_id" class="">
          <p class="text-fs18 text-bold">Ваш заказ №{{order_id}} успешно сформирован!</p>
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
  </q-page>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      order_id:null,
      loading:false,
          agree:false,
      agree1:false,
      delivery:'courier',
      address:null

    }
  },

  methods:{

    ... mapActions('auth',['getUser']),
    ... mapActions('data',['fetchOrders','fetchCart']),
    async deleteItem(id){
      await this.$api.post('/api/cart/delete_item',{id})
      await this.fetchCart()
    },
    async createOrder(){

      this.loading = !this.loading
      const result = await this.$api.post('/api/order/create',{delivery:this.delivery,address:this.address})
      console.log(result)
      if(result.data.success){
        console.log(result.data.payment_url)
        this.$q.notify({
          message: 'Заказ создан',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.order_id = result.data.order_id
        window.open(result.data.payment_url, '_blank').focus();
      }else{
        this.$q.notify({
          message: 'Заказ создан, но произошла<br> ошбка формирования платежа',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'negative',
          html:true,
          icon: 'announcement'
        })
      }
      this.loading = !this.loading
      await this.fetchCart()
      await this.fetchOrders()
      await this.getUser()

    }
  },
  computed:{
    ...mapGetters('data',['cart'])
  }
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
</style>
