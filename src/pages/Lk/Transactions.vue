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
        <div class="transaction-row item" v-for="i in 20" :key="i">
        <p class="no-margin text-avenir-600 text-body2  ">Картины<br><span class="text-grey-6 text-avenir-450">Акварель натюрморты</span></p>
        <img src="http://placehold.it/42x26" alt="">
        <p class="no-margin text-body2  text-grey-6">23.08.2021</p>
        <p class="no-margin text-body2 text-avenir-600 text-warning">84 000 ₽</p>

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
