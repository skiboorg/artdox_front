<template>
  <q-page class="">
  <section>
      <div class="lk-card">
      <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Мои заказы</p>
      </div>

      <div v-if="orders.length>0" class="orders">
        <div class="" v-for="order in orders">
          <div  class="order" v-for="item in order.order_items">
          <div class="flex items-start q-mb-lg">
            <div class="q-mr-md-lg">

              <img class="img img-order" :src="item.item.image_thumb" alt="">


              <p class="no-margin text-avenir-450 text-dark text-body2">{{item.item.name}}</p>
            </div>

            <div class="">

              <p class="text-body2">Стоимость: <span class="text-warning text-avenir-450">{{item.item.price}} ₽</span> </p>
              <p class="text-body2">Количество: <span class="text-warning text-avenir-450">{{item.amount}} шт</span> </p>
              <p class="text-body2">Итого: <span class="text-warning text-avenir-450">{{item.price}} ₽</span> </p>
              <p class="text-body2">Активная прибыль: <span class="text-grey-6 text-avenir-450">0 ₽</span> </p>
              <q-separator spaced="lg"/>
               <p class="text-body2">Дата покупки: <span class="text-grey-6 text-avenir-450">{{new Date(order.created_at).toLocaleDateString()}}</span> </p>
               <p class="text-body2">Дата получения прибыли: <span class="text-grey-6 text-avenir-450">{{new Date(order.created_at).toLocaleDateString()}}</span> </p>
              <p class="text-body2 q-mb-lg">Статус: <span class="text-positive text-avenir-450">На выставках</span> </p>
              <div class="q-gutter-sm">
                 <q-btn unelevated :to="{name:'return',params:{item_id:item.id}}" rounded color="red-2"  no-caps text-color="red-6" class="q-px-md" label="Вернуть картину"/>
                 <q-btn unelevated :to="{name:'store',params:{item_id:item.id}}" rounded color="warning"  no-caps text-color="white" class="q-px-md" label="Заложить картину"/>
              </div>


            </div>
          </div>
          <q-separator spaced="lg"/>

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

    }
  },
  computed:{
    ...mapGetters('data',['orders'])
  }
}
</script>
<style lang="sass" scoped>

</style>
