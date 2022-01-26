<template>
  <q-page class="">
  <section>
      <div class="lk-card q-mb-md">

        <p class="no-margin text-fs18 text-avenir-600">Мои заказы</p>

    </div>
     <div v-if="orders.length>0" >


        <div  class="orders" >
          <div  class="order" :class="{'item-nft' : item.item.is_nft}" v-for="item in all_order_items">

            <div class="row q-col-gutter-md q-mb-lg">
              <div class="col-6 col-md-4">
                <q-img fit="contain" :ratio="1" :src="item.item.image_thumb"/>
              </div>
              <div class="col-6 col-md-8">
                <p class="q-mb-lg text-avenir-450  text-body2">{{item.item.name}}</p>
                <div class="flex items-center justify-between q-mb-sm">
                  <p class="no-margin text-body2 text-grey-7 text-avenir-400" >Статус</p>
                  <p class="no-margin text-body2 text-positive text-avenir-450">На выставках</p>
                </div>
                <div class="flex items-center justify-between q-mb-sm">
                  <p class="no-margin text-body2 text-grey-7 text-avenir-400">Дата покупки</p>
                  <p class="no-margin text-body2  text-avenir-450">{{new Date(item.created_at).toLocaleDateString()}}</p>
                </div>

                <div class="flex items-center justify-between q-mb-sm">
                  <p class="no-margin text-body2 text-grey-7 text-avenir-400">Дата получения прибыли</p>
                  <p class="no-margin text-body2 text-avenir-450">{{new Date(item.created_at).toLocaleDateString()}}</p>
                </div>

                <div class="flex items-center justify-between q-mb-sm">
                  <p class="no-margin text-body2 text-grey-7 text-avenir-400">Общее количество</p>
                  <p class="no-margin text-body2 text-avenir-450">{{item.amount}} шт</p>
                </div>

                <div class="flex items-center justify-between">
                  <p class="no-margin text-body2 text-grey-7 text-avenir-400">Общая сумма</p>
                  <p class="no-margin text-body2 text-avenir-450">{{item.price}} ₽</p>
                </div>




              </div>
            </div>

            <div class="row q-mb-lg q-col-gutter-md">
                <div class="col-6 col-md-4">
                  <div class="order-box">
                    <p class="q-mb-none text-caption order-box--title">Ваша прибыль</p>
                    <div class="flex items-center">
                      <svg class="q-mr-sm" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.66667 4.33268H13V11.666C13 11.8428 12.9298 12.0124 12.8047 12.1374C12.6797 12.2624 12.5101 12.3327 12.3333 12.3327H1.66667C1.48986 12.3327 1.32029 12.2624 1.19526 12.1374C1.07024 12.0124 1 11.8428 1 11.666V2.99935C1 2.64573 1.14048 2.30659 1.39052 2.05654C1.64057 1.80649 1.97971 1.66602 2.33333 1.66602H11.6667V4.33268"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p class="no-margin text-body2 order-box--text">100.00 ₽</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-4">
                   <div class="order-box">
                    <p class="q-mb-none text-caption order-box--title">Общая прибыль</p>
                    <div class="flex items-center">
                     <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3008 10H11.3674"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6.66667V13.3333C14 13.5101 13.9298 13.6797 13.8047 13.8047C13.6797 13.9298 13.5101 14 13.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V6.66667C2 6.48986 2.07024 6.32029 2.19526 6.19526C2.32029 6.07024 2.48986 6 2.66667 6H13.3333C13.5101 6 13.6797 6.07024 13.8047 6.19526C13.9298 6.32029 14 6.48986 14 6.66667ZM11.4733 6L12.6667 4.29333L9.39333 2L6.58667 6H11.4733ZM6.06 2L3.25333 6H6.58667L8.29333 3.56667L6.06 2Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      <p class="no-margin text-body2 order-box--text">100.00 ₽</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                   <div class="order-box">
                    <p class="q-mb-none text-caption order-box--title">Дата следующей выпаты</p>
                    <div class="flex items-center">
                      <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 2V4.66667M13.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V6.66667H14V13.3333C14 13.5101 13.9298 13.6797 13.8047 13.8047C13.6797 13.9298 13.5101 14 13.3333 14ZM14 4C14 3.82319 13.9298 3.65362 13.8047 3.5286C13.6797 3.40357 13.5101 3.33333 13.3333 3.33333H2.66667C2.48986 3.33333 2.32029 3.40357 2.19526 3.5286C2.07024 3.65362 2 3.82319 2 4V6.66667H14V4ZM10.6667 2V4.66667V2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      <p class="no-margin text-body2 order-box--text">100.00 ₽</p>
                    </div>
                  </div>
                </div>
            </div>
              <div v-if="!item.item.is_nft" class="q-gutter-sm">
                 <q-btn unelevated :to="{name:'return',params:{item_id:item.id}}"
                        rounded color="dark" size="16px"  no-caps  class="q-px-lg" label="Вернуть картину"/>
                 <q-btn unelevated :to="{name:'store',params:{item_id:item.id}}"
                        rounded outline size="16px"  no-caps  class="q-px-lg" label="Заложить картину"/>
              </div>
              <div v-else class="">
                 <q-btn unelevated :to="{name:'return',params:{item_id:item.id}}"
                        rounded color="white" text-color="dark" size="16px"  no-caps  class="q-px-lg" label="Продать токен"/>
              </div>
        </div>
        </div>


      </div>
  </section>




  </q-page>

</template>

<script>

import {mapGetters} from "vuex";

export default {

  data(){
    return{
      all_order_items:[]

    }
  },
  beforeMount() {
    for (let order of this.orders){
      for (let order_item of order.order_items){
        this.all_order_items.push(order_item)
      }
    }
  },
  computed:{
    ...mapGetters('data',['orders'])
  }
}
</script>
<style lang="sass" scoped>
.orders
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 16px

.order
  background: #ffffff
  padding: 30px
  &.item-nft
    background: #2A2B33
    color: #ffffff
    & .text-grey-7
      color: #c0c0c0 !important
    & .order-box
      background: transparent
      border: 1px solid #33333D
      box-sizing: border-box
      svg
        stroke: white
      &--title
        color: #c0c0c0
      &--text
        color: #E5E5E5
  &-box
    background: $grey-2
    padding: 12px
    height: 100%
    svg
      stroke: $dark

@media (max-width: 1024px)
  .orders
    grid-template-columns: 1fr
</style>
