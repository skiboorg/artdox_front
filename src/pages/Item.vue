<template>
  <q-page class="page bg-grey-2">

  <div class="item-container">
    <div class="item-card">
      <div class="">
        <img class="img cursor-pointer" :class="{'not-selected':curImage !== item.image}" @click="curImage = item.image" :src="item.image_thumb" alt="">
        <img v-if="item.image_alt" class="img cursor-pointer" :class="{'not-selected':curImage !== item.image_alt}" @click="curImage = item.image_alt" :src="item.image_alt_thumb" alt="">
      </div>
      <div class=" bordered img-magnifier-container" >
            <img id="myimage" class="img" :src="curImage" alt="">
          </div>
      <div class="flex column items-start ">
        <div class="q-mb-xl">
          <h1 class="item-title">«{{item.name}}»</h1>
<!--        <div class="text-avenir-300 q-mb-lg-xl" v-html="item.description"></div>-->
        <p class="text-caption text-grey q-mb-none">Артикул № {{item.article}}</p>
        <p class="text-caption text-grey q-mb-lg-xl">Размер {{item.size}}</p>
        <p class="text-warning text-fs18 q-mb-none text-avenir-450">{{item.price}} ₽</p>
        </div>

         <q-btn v-if="$auth.loggedIn" class="q-px-lg gt-sm" :disable="item.is_sell || !$auth.loggedIn" size="18px" @click="addToCart(item.id)"
                :loading="loading"  color="dark" rounded unelevated no-caps text-color="white"
                :label="item.is_sell ? 'Продана' : 'В корзину'"/>
      </div>
    </div>
            <q-btn v-if="$auth.loggedIn" class="q-px-lg lt-md" :disable="item.is_sell || !$auth.loggedIn" size="18px" @click="addToCart(item.id)"
                   :loading="loading"  color="dark" rounded unelevated no-caps text-color="white"
                   :label="item.is_sell ? 'Продана' : 'В корзину'"/>
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
      curImage:'',
      loading:false,
      agree:false,
      agree1:false,
      checkBox:false,
       item:{},
        faqItems:[
        {question:'Как происходит процесс покупки картины?',answer:'Вы выбираете интересующую вас картину или несколько картин, добавляете их в корзину. Затем вы оплачиваете ваши покупки и вводите данные для доставки вам картины.'},
        {question:'Как я получаю картину?',answer:'Мы отправляем вам картину транспортной компанией (СДЭК, Почта России) по указанному адресу в лубое удобное вам время. Посылку мы оплачиваем за свой счет, все посылки застрахованы дабы избежать риска повреждений картины при доставке.'},
        {question:'Я могу вернуть картину в любой момент?',answer:'Да, вы можете вернуть картину нам в любой момент согласно Договору об оказании услуг. После отправки картины нам вы зачисляем на ваш счет сумму покупки картины. Вы сможете вывести средства в любой момент.'},
      ],
    }

  },
  async beforeMount() {
    const resp = await this.$api.get(`/api/item/one?slug=${this.$route.params.slug}`)
    this.item = resp.data
    this.curImage = this.item.image
  },
  methods:{

    async addToCart(id){
      console.log('dsfd')
      this.loading = !this.loading
      await this.$api.post('/api/cart/add',{id})
      this.loading = !this.loading
      this.$q.notify({
          message: 'Добавлено в корзину',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.not-selected
  opacity: .5
  transition: all .2s linear
.item
  &-container
    max-width: 1000px
    margin: 0 auto
    padding: 0 10px
  &-card
    display: grid
    grid-template-columns: 1fr 3fr 3fr
    grid-gap: 15px
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
.img-magnifier-container
  position: relative

.img-magnifier-glass
  position: absolute
  border: 3px solid #000
  border-radius: 50%
  cursor: none
  /*Set the size of the magnifier glass:*/
  width: 100px
  height: 100px
@media (max-width: 1024px)
  .item
    &-card
      grid-template-columns: 1fr
      margin-bottom: 30px
</style>
