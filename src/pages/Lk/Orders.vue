<template>
  <q-page class="">
  <section>
      <div class="lk-card">
      <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Мои заказы</p>
      </div>
      <div v-if="$auth.user.orders.length>0" class="orders">

        <div  class="order" v-for="(item,index) in $auth.user.orders[0].items">
          <div class="flex items-start q-mb-lg">
            <div class="q-mr-md-lg">
              <div class="overlay-img bordered q-mb-md">
              <img :src="item.image_thumb" alt="">

            </div>
              <p class="no-margin text-avenir-450 text-dark text-body2">{{item.name}}</p>
            </div>

            <div class="">

              <p class="text-body2">Стоимость: <span class="text-positive text-avenir-450">{{item.price}} ₽</span> </p>
              <p class="text-body2">Активная прибыль: <span class="text-grey-6 text-avenir-450">0 ₽</span> </p>
              <q-separator spaced="lg"/>
               <p class="text-body2">Дата покупки: <span class="text-grey-6 text-avenir-450">{{new Date($auth.user.orders[index].created_at).toLocaleDateString()}}</span> </p>
               <p class="text-body2">Дата получения прибыли: <span class="text-grey-6 text-avenir-450">{{new Date($auth.user.orders[index].created_at).toLocaleDateString()}}</span> </p>
              <p class="text-body2 q-mb-lg">Статус: <span class="text-positive text-avenir-450">На выставках</span> </p>
               <q-btn unelevated rounded color="red-2"  no-caps text-color="red-6" class="q-px-md" label="Вернуть картину"/>

            </div>
          </div>
          <q-separator spaced="lg"/>

        </div>

      </div>
    </div>
  </section>




  </q-page>

</template>

<script>

export default {

  data(){
    return{

    }
  }
}
</script>
<style lang="sass" scoped>

</style>
