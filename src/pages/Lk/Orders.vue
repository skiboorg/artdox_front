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
              <p class="text-body2">Статус: <span class="text-negative text-avenir-450">Продано</span> </p>
              <q-separator spaced="md"/>
              <p class="text-body2">Сумма: <span class="text-warning text-avenir-450">{{item.price}} ₽</span> </p>
              <p class="text-body2">Тариф: <span class="text-grey-6 text-avenir-450">Премиум</span> </p>
              <q-separator spaced="md"/>
              <p class="text-body2">Срок: <span class="text-grey-6 text-avenir-450">1 месяц</span> </p>
              <p class="text-body2">Дата: <span class="text-grey-6 text-avenir-450">{{new Date($auth.user.orders[index].created_at).toLocaleDateString()}}</span> </p>
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
