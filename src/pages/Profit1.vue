<template>
  <q-page class="page">
    <div class="container">
       <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />

      <q-breadcrumbs-el label="Доходность" />
    </q-breadcrumbs>
        <h1 class="title q-mb-lg q-mb-lg-xl">Доход</h1>
<!--      <p class="text-fs18 text-avenir-600 q-mb-xl">Мы, отработали систему, которая приносит доход от каждой картины.</p>-->
      <p class="text-fs18 text-avenir-450 q-mb-xl">
        Наша работа позволяет сформировать доходность для каждой картины, при этом уровень ликвидности не зависит от художественной ценности и материальной стоимости актива, прибыль с картин получается при условии участия в экспозиционной и продажной деятельности на территории Китая и России.
      </p>
       <h3 class="text-center sub-title">Как <span>мы работаем?</span></h3>
      <div class="profit-wrapper">
        <div class="profit-inner">
          <div class="profit-item" v-for="(item,index) in items" :key="index">
            <div class="">
              <p class="title">0{{index+1}}</p>
              <div class="lt-md text-center q-mb-md" ><img class="img" :src="`p${index+1}.png`" alt=""></div>
              <p class="text-body1" v-html="item.text"></p>
            </div>
            <div class="gt-sm "><img class="img" :src="`p${index+1}.png`" alt=""></div>
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>
<script>


export default {
  data() {
    return {
      items:[
        {text:`Для Китая формируем коллекции из 30 авторских репродукций, и через партнера ArtBooklet Ltd., размещаем их на экспозициях в провинциальных городах, с образовательной и просветительской целью.<br><br>

От китайской стороны стабильно получаем 10 Юаней (1,5 $) в сутки за каждую картину, из расчета 300 экспозиционных дней в году.<br><br>

Также открыты пункты продаж репродукций в этих местах. Необходимое количество экспозиций в год не менее 10 (300 картин), и эти потребности в Китае постоянно растут.<br><br>

В России сдаем в аренду авторские репродукции музейного качества по 30 рублей в сутки за каждую картину, в общеобразовательные, культурные и административные учреждения, меценаты активно участвуют в этом процессе.
`},
        {text:`Мы планируем создать свои Коллекции картин в формате NFT и продвинуть их на маркетплейсе Binance.  NFT, или "несменяемый токен" - это уникальный цифровой сертификат, который хранится в блокчейне и предоставляет определенные права собственности на актив, такой как цифровое произведение искусства.<br><br>

NFT предоставляют мощный инструмент для установления и демонстрации прав собственности в пространстве цифровых активов. "Чеканка" NFT относится к созданию NFT и его записи в блокчейне впервые. Чеканщик может быть создателем работы, связанной с NFT, например, художником, или кем-либо, имеющим соответствующие права на чеканку NFT цифрового актива.<br><br>

Каков потенциал NFT в мире искусства и на рынке искусства?
11 марта 2021 года Christie's продал первый NFT, основанный исключительно на цифровом произведении искусства, когда-либо предлагавшемся крупным аукционным домом, за 69 346 250 долларов США.
`},
        {text:`Все наши картины анонимные, мы заведомо не указываем авторов, чтобы авторитетом и перечнем заслуг не завышать цены на них. С каждым художником мы имеем соглашение на покупку оцифрованной картины, на общий тираж произведения (30 штук с каждого оригинала), печать, подпись и сертификат от художника подтверждает это.<br><br>

Репродукции картин сделаны на высочайшем уровне, с использованием наилучших, экологически чистых материалов. Наш покупатель получает одну репродукцию, остальные экземпляры отправляются управляющей компанией в разные регионы России и Китая, для обеспечения дохода.`},
        {text:`Мы работаем только с акварельной живописью в Digi Gravure – цифровая гравюра. DIGI – оцифровка оригинала. GRAVURE – оттиск на бумаге. Оборудование – CANON PRO – 6000 (12 – цветный принтер с минеральными пигментами высокой четкости музейного качества.
<br><br>
Пигмент- LUCIA PRO – светостойкие. Бумага 310 гр/м2, 100 % хлопок – CANSON. Покрытие спрей лаком LOREAL матовый люкс. Китайским партнерам больше подходит именно этот вариант, так как они не считают нужным страховать и нести ответственность за оригиналы.
<br><br>
Современная, цифровая, типографская техника с поразительной точностью копирует и переносит на бумагу не только цвет, но и фактуру красок, бумаги, холста.`},

      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.profit
  &-wrapper
    background: #F7F7F9
  &-inner
    max-width: 940px
    margin: 0 auto
  &-item
    display: grid
    grid-template-columns: 1.5fr 1.5fr
    align-items: flex-start
    padding: 30px 0
    border-bottom: 1px solid #E5E5E5
    grid-gap: 170px
    &:last-child
      border-bottom: none
@media (max-width: 1024px)
  .profit
    & .text-center
      font-size: 24px
      line-height: 28px
    &-wrapper
      margin: 0 -10px
      padding: 0 10px
    &-item
      grid-template-columns: 1fr
</style>
