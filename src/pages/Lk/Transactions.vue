<template>
  <q-page >
    <div class="lk-card">
      <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Мои транзакции</p>
      </div>

      <div class="transaction-row q-mb-lg">
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Тип</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Метод</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Дата</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Сумма</p>
      </div>

      <div class="transaction-list">
         <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 500px; max-width: 100%"
    >
        <div class="transaction-row item" v-for="item in $auth.user.transactions" :key="item.id">
        <p class="no-margin text-avenir-600 text-body2  " :class="[item.is_buy ? 'text-warning' : 'text-positive']">{{item.is_buy ? 'Покупка' : 'Вывод'}}</p>
        <p class="no-margin text-avenir-600 text-body2  ">{{item.type}}</p>

        <p class="no-margin text-body2  text-grey-6">{{ new Date(item.created_at).toLocaleDateString() }}</p>
        <p class="no-margin text-body2 text-avenir-600 text-warning">{{item.amount}} ₽</p>

      </div>
      </q-scroll-area>
      </div>
    </div>

  </q-page>

</template>

<script>

export default {

  data(){
    return{
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#D2D1D5',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#c9c9c9',
        width: '9px',
        opacity: 0.2
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.transaction
  &-row
    display: grid
    grid-template-columns: repeat(4,1fr)
    &.item
      border-bottom: 1px solid #EBEEF1
      margin-bottom: 12px
      padding-bottom: 12px
</style>
