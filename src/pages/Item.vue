<template>
  <q-page class="page bg-grey-2">

  <div class="item-container">
    <div class="item-card">
      <div class="overlay-img bordered" >
            <img class="img" src="gallery_slide1.jpg" alt="">
            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>
      <div class="flex column items-start justify-between">
        <div class="">
          <h1 class="item-title">«{{item.name}}»</h1>
        <div class="text-avenir-300 q-mb-lg-xl" v-html="item.description"></div>
        <p class="text-caption text-grey q-mb-none">Артикул № {{item.article}}</p>
        <p class="text-caption text-grey q-mb-lg-xl">Размер {{item.size}}</p>
        <p class="text-warning text-fs18 q-mb-none text-avenir-450">{{item.price}} ₽</p>
        </div>
         <q-btn class="q-px-lg gt-sm" size="18px" @click="addToCart(item.id)" :loading="loading"  color="dark" rounded unelevated no-caps text-color="white" label="В корзину"/>
      </div>
    </div>
     <q-btn class="q-px-lg lt-md full-width q-mb-xl" @click="addToCart(item.id)" :loading="loading" size="18px" color="dark" rounded unelevated no-caps text-color="white" label="В корзину"/>
   <h3 class="title text-center">FAQ</h3>
    <section class="faq">
      <div class="container">

        <q-list separator>
      <q-expansion-item
        v-for="(item,index) in faqItems"
        :key="index"
        group="group"
        :label="item.question"
        :default-opened="index===0"
        header-class="text-playfair q-py-md text-body1"
        class="text-montserrat text-body2"
        expand-icon="add"
        expanded-icon="close"
      >
        <q-card class="bg-grey-2">
          <q-card-section>
            {{item.answer}}
          </q-card-section>
        </q-card>
      </q-expansion-item>


    </q-list>
      </div>
     </section>
<!--    <div class="item-feedback-grid">-->
<!--      <div class="item-feedback-item">-->
<!--        <div class="text-center">-->
<!--          <q-avatar size="63px" class="q-mb-sm">-->
<!--            <img src="https://cdn.quasar.dev/img/avatar.png" alt="">-->
<!--          </q-avatar>-->
<!--          <p class="no-margin text-body2 text-avenir-450">Omar Levin</p>-->
<!--        </div>-->
<!--        <div class="">-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas eleifend faucibus convallis sit.<br><br>-->

<!--          Scelerisque accumsan semper volutpat sed vitae lorem maecenas eget semper. Dui euismod a platea ut pretium vivamus tellus vivamus in. Tristique diam commodo integer sodales nisi suspendisse.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--       <div class="item-feedback-item">-->
<!--        <div class="text-center">-->
<!--          <q-avatar size="63px" class="q-mb-sm">-->
<!--            <img src="https://cdn.quasar.dev/img/avatar.png" alt="">-->
<!--          </q-avatar>-->
<!--          <p class="no-margin text-body2 text-avenir-450">Omar Levin</p>-->
<!--        </div>-->
<!--        <div class="">-->
<!--          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas eleifend faucibus convallis sit.<br><br>-->

<!--          Scelerisque accumsan semper volutpat sed vitae lorem maecenas eget semper. Dui euismod a platea ut pretium vivamus tellus vivamus in. Tristique diam commodo integer sodales nisi suspendisse.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    </div>-->
  </div>


  </q-page>
</template>
<script>


export default {
  data() {
    return {
      loading:false,
      checkBox:false,
       item:{},
        faqItems:[
        {question:'Зачем вам платить доход каждому покупателю картин?',answer:'- Этим мы стимулируем наших клиентов  для активных действий на сайте и популяризации нашего ресурса.'},
        {question:'Почему вы работаете через ИП, а не через ООО?',answer:'- Так гораздо меньше издержек и документооборота. Мы все равно являемся предпринимателем, со всей степенью ответственности, только расходы на содержание команды и всевозможные выплаты меньше.'},
        {question:'Как, и когда я смогу вернуть свои потраченные на покупку картины деньги?',answer:'- Согласно Договору Управления, вы получаете от нас в течение года, каждый квартал выплаты,  потом можете продлить Договор, или вернуть нам картину и забрать потраченную на ее покупку деньги, весь раннее полученный доход остается у вас.  '},
      ],
    }

  },
  async beforeMount() {
    const resp = await this.$api.get(`/api/item/one?slug=${this.$route.params.slug}`)
    this.item = resp.data
  },
  methods:{
    async addToCart(id){
      console.log('dsfd')
      this.loading = !this.loading
      await this.$api.post('/api/cart/add',{id})
      this.loading = !this.loading
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  &-container
    max-width: 720px
    margin: 0 auto
    padding: 0 10px
  &-card
    display: grid
    grid-template-columns: 1fr 2fr
    grid-gap: 30px
    margin-bottom: 65px
  &-title
    font-family: 'Playfair Display', sans-serif
    line-height: 32px
    font-size: 24px
    font-weight: 700
    margin-top: 0
    margin-bottom: 10px
  &-feedback-grid
    display: grid
    grid-template-columns: 1fr
    grid-gap: 24px
  &-feedback-item
    display: grid
    grid-template-columns: 1fr 6fr
    border: 1px solid #E6E6E6
    box-sizing: border-box
    padding: 25px 35px
    grid-gap: 24px

@media (max-width: 1024px)
  .item
    &-card
      grid-template-columns: 1fr 1fr
      margin-bottom: 30px
</style>
