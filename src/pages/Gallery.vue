<template>
  <q-page class="page">
    <div class="container">
       <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />

      <q-breadcrumbs-el label="Галерея" />
    </q-breadcrumbs>

        <h1 class="title q-mb-lg q-mb-lg-xl">Галерея</h1>
        <p class="text-fs18 text-avenir-450 q-mb-xl">
          Все наши картины - это репродукции с оцифрованных в качестве 300 dpi оригиналов. Оцифровка, и последующая печать, выполнена на самом современном оборудовании. Все работы напечатаны на бельгийской и немецкой эко бумаге, доведены вручную, и покрыты лаком для лучшей защиты и восприятия, их не обязательно ставить под стекло. Картины продаются полностью оформленные, в паспарту, задник и раму без стекла.
        </p>

        <p class="text-dark text-fs18 q-mb-sm">Оригиналы – <span class="text-grey-7">от 150 000 ₽</span></p>
        <p class="text-dark text-fs18 q-mb-xl">Репродукция – <span class="text-grey-7">от 50 000 ₽ до 140 000 ₽</span></p>
<!--      <div class="q-gutter-lg-xl q-mb-lg-xl">-->
<!--        <q-btn-dropdown dropdown-icon="expand_more" color="dark" text-color="white" no-caps unelevated class="rounded-borders" label="Сортировать по новинкам">-->
<!--      <q-list>-->
<!--        <q-item clickable v-close-popup >-->
<!--          <q-item-section>-->
<!--            <q-item-label>Сортировать по дате</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->

<!--        <q-item clickable v-close-popup >-->
<!--          <q-item-section>-->
<!--            <q-item-label>Сортировать по</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->

<!--        <q-item clickable v-close-popup >-->
<!--          <q-item-section>-->
<!--            <q-item-label>Сортировать по</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--      </q-list>-->
<!--    </q-btn-dropdown>-->
<!--          <q-checkbox class="rounded-borders" v-model="checkBox" label="Показывать проданные" />-->
<!--      </div>-->
      <div class="gallery-grid">

            <div class="gallery-item" v-for="(slide,index) in gallerySlides" :key="index">
                  <div @click="modalImg = slide.image,modal=true" class="gallery-item__img q-mb-lg">
                    <img  :src="slide.image_thumb" alt="">
                    <div class="gallery-item__img-overlay">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                      </svg>

                    </div>
                  </div>
                   <router-link :to="{name:'item',params:{slug:slide.name_slug}}" v-for="(slide,index) in gallerySlides" :key="index">
                        <p v-if="slide.is_sell" class="q-mb-none text-bold text-left text-negative text-caption">Продана</p>
                  <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.name}}</p>
<!--                  <p class="text-left gallery-item__subtitle text-dark">{{slide.subtitle}}</p>-->


                  <p class="q-mb-none text-left text-caption">Артикул № {{slide.article}}</p>
                  <p class="q-mb-md text-left text-caption">Размер {{slide.size}}</p>
                  <p class="q-mb-none text-left text-fs18 text-avenir-450 text-warning">{{slide.price}} ₽</p>
                    </router-link>
                </div>


      </div>
    </div>



  </q-page>
 <q-dialog
      v-model="modal"
    >
     <q-card class="relative-position" style="width: 700px; max-width: 80vw; height: auto">
       <q-btn v-close-popup class="absolute-top-right z-max" icon="close" round flat/>
       <q-img :ratio="1" :src="modalImg"/>
      </q-card>
    </q-dialog>
</template>
<script>


export default {
  data() {
    return {
      modal:false,
      modalImg:'',
      checkBox:false,
       gallerySlides:[],
    }

  },
  async beforeMount() {
    const resp = await this.$api.get('/api/item/get?type=index')
    this.gallerySlides = resp.data
  },
}
</script>
<style lang="sass" scoped>
.gallery-grid
  display: grid
  grid-template-columns: repeat(5,1fr)
  grid-column-gap: 20px
  grid-row-gap: 40px
@media (max-width: 1024px)
  .gallery-grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 10px
</style>
