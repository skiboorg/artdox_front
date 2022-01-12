<template>
  <q-page>

    <section class="offer">
      <div class=" relative-position">
        <q-carousel
          animated
          v-model="offer_slide"
          :autoplay="5000"
          class="offer-slider"
          transition-prev="jump-right"
          transition-next="jump-left"
          swipeable
          infinite
        >
          <q-carousel-slide :name="index+1" :img-src="$q.screen.lt.sm ? slide.image_mob : slide.image" v-for="(slide,index) in offerSlides" :key="index" />
        </q-carousel>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <h3 class="title q-mb-lg ">О нас</h3>

        <div class="row q-col-gutter-md-xl items-center">
          <div class=" col-12 col-md-6 q-mb-lg q-mb-md-none">
            <p class="text-lh-150">
              Вся наша деятельность нацелена на то, чтобы предметы искусства приносили своему владельцу не только
              эстетическое удовольствие, но и материальную выгоду. <br><br>
              Гораздо приятней смотреть на картину и знать, что деньги, потраченные на ее приобретение, не только
              возможно вернуть, но и приумножить.
            </p>
            <router-link class="link" :to="{name:'about'}">Узнать больше</router-link>
          </div>
          <div class="col-12 col-md-6">
            <div class="row q-col-gutter-md-md ">
              <div class="col-12 text-center"><img class="img" style="width: 60%" src="~assets/about2.jpg" alt=""></div>


            </div>
          </div>
        </div>

      </div>
    </section>

    <section style="background: #f9f9f9" class="about q-pt-xl">
      <div class="container">
        <h3 class="title q-mb-lg ">Доход</h3>

        <div class="row q-col-gutter-md-xl ">
          <div class=" col-12 col-md-9">
            <p class="q-mb-lg q-mb-md-xl text-lh-150 ">
              Наша работа позволяет сформировать доходность для каждой картины, при этом уровень ликвидности не зависит от художественной ценности и материальной стоимости актива, прибыль с картин получается при условии участия в экспозиционной и продажной деятельности на территории Китая и России.
            </p>
            <div class="text-left">
              <!--              <q-btn :to="{name:'profit'}" size="16px" class="text-montserrat q-px-xl" no-caps rounded unelevated outline color="dark"  label="Подробнее"/>-->
              <router-link class="link" :to="{name:'profit'}">Подробнее</router-link>
            </div>
          </div>
          <div class="col-12 ">
            <img class="img gt-sm" src="~assets/ppp.png" alt="">
            <img class="img lt-md q-mt-lg" src="~assets/ppp1.png" alt="">
          </div>
        </div>

      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <div class="gallery-title">
          <h3 class="title q-mb-none">Галерея</h3>
          <div class="gt-sm gallery-title__buttons">
            <div @click="galleryPrev" class="slide-btn gallery-slider-btn prev">
              <svg width="45" height="16" viewBox="0 0 45 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538405 7.04738 0.538404 6.65685 0.928929L0.292893 7.29289ZM45 7L1 7L1 9L45 9L45 7Z" />
              </svg>
            </div>
            <div @click="galleryNext" class="slide-btn gallery-slider-btn next">
              <svg width="45" height="16" viewBox="0 0 45 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.7071 7.29289C45.0976 7.68341 45.0976 8.31658 44.7071 8.7071L38.3431 15.0711C37.9526 15.4616 37.3195 15.4616 36.9289 15.0711C36.5384 14.6805 36.5384 14.0474 36.9289 13.6569L42.5858 8L36.9289 2.34314C36.5384 1.95262 36.5384 1.31945 36.9289 0.928929C37.3195 0.538405 37.9526 0.538404 38.3431 0.928929L44.7071 7.29289ZM-8.74228e-08 7L44 7L44 9L8.74228e-08 9L-8.74228e-08 7Z" />
              </svg>

            </div>
          </div>
          <div class="gt-sm">
            <router-link class="link" :to="{name:'gallery'}">Показать все</router-link>

          </div>


        </div>
        <div class="">
          <q-no-ssr>
            <Carousel ref="gallery" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="(slide,index) in gallerySlides" :key="index">
                <router-link :to="{name:'item',params:{slug:slide.name_slug}}" >
                  <div class="gallery-item">
                    <!--                  @click="modalImg = slide.image,modal=true"-->

                    <div  class="gallery-item__img q-mb-lg">
                      <img  :src="slide.image_thumb" alt="">
                      <div class="gallery-item__img-overlay">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                        </svg>

                      </div>
                    </div>

                    <p v-if="slide.left===0" class="q-mb-none text-bold text-left text-negative text-caption">Нет в наличии</p>
                    <p v-if="slide.is_ordered" class="q-mb-none text-bold text-left text-positive text-caption">Заказана</p>
                    <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.name}}</p>
                    <!--                  <p class="text-left gallery-item__subtitle text-dark">{{slide.subtitle}}</p>-->

                    <p class="q-mb-none text-left text-caption">Артикул № {{slide.article}}</p>
                    <p class="q-mb-md text-left text-caption">Размер {{slide.size}}</p>
                    <p class="q-mb-none text-left text-fs18 text-avenir-450 text-warning">{{slide.price}} ₽</p>

                  </div>
                </router-link>
              </Slide>
              <template #addons>
                <Navigation />
              </template>

            </Carousel>
          </q-no-ssr>

          <div class="lt-md text-center">
            <q-btn size="18px" class="text-montserrat q-px-xl" :to="{name:'gallery'}" no-caps rounded unelevated color="dark" text-color="white" label="Показать все"/>
          </div>
        </div>
      </div>
    </section>
    <section class="interier">
      <div class="container">
        <h3 class="title">В интерьере</h3>
        <div class="interier-grid">
          <div @click="modalImg = index+1 + '.jpg',modal=true" class="overlay-img" v-for="(i,index) in 9" :key="i">
            <img class="img" :src="`${index+1}.jpg`" alt="">

            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>
        </div>
        <!--                <div class="text-center">-->
        <!--                  <q-btn size="18px" class="text-montserrat q-px-xl" no-caps rounded unelevated color="dark" text-color="white" label="Загрузить ещё"/>-->
        <!--                </div>-->
      </div>
    </section>
    <section class="news">
      <div class="container">
        <h3 class="title">Наши услуги</h3>
        <div class="news-grid">
          <div class="news-item" v-for="(item,index) in interierItems" :key="index">
            <p class="text-playfair text-h5 text-dark">{{item.title}}</p>
            <div class="news-item__text flex column items-start justify-between full-height">
              <p class="no-margin text-montserrat text-body2 text-lh-150 text-grey-7">
                {{item.text}}
              </p>
              <q-expansion-item
                group="group1"
                label="Подробнее"
                header-class="text-playfair q-py-md text-caption"
                class="text-montserrat text-caption full-width"
              >
                <q-card>
                  <q-card-section v-html="item.add_text">

                  </q-card-section>
                </q-card>
              </q-expansion-item>

            </div>
          </div>
        </div>
        <div class="news-grid no-tb">
          <div class="news-item" v-for="(item,index) in interierItems1" :key="index">
            <p class="text-playfair text-h5 text-dark">{{item.title}}</p>
            <div class="news-item__text flex column items-start justify-between full-height">
              <p class="no-margin text-montserrat text-body2 text-lh-150 text-grey-7">
                {{item.text}}
              </p>
              <q-expansion-item
                group="group1"
                label="Подробнее"
                header-class="text-playfair q-py-md text-caption"
                class="text-montserrat text-caption full-width"
              >
                <q-card>
                  <q-card-section>
                    {{item.add_text}}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <!--              <p class="">-->
              <!--                <router-link class="link" :to="{name:item.url}">{{item.link}}</router-link>-->
              <!--              </p>-->


            </div>
          </div>
        </div>
      </div>
    </section>
    <section  class="about bg-grey-2 q-mb-none q-pt-xl">
      <div class="container">
        <h3 class="title q-mb-lg ">NFT в искусстве</h3>

        <div class="row q-col-gutter-md-xl items-start">
          <div class=" col-12 col-md-6 q-mb-lg q-mb-md-none row-text">
            <p class="text-lh-150">
              ARTDOX.RU - первая компания, которая сделала NFT искусство Доходным.
 Наша цель - заявить о себе на торговых площадках NFT и обеспечить нашим Клиентам достойный заработок.
<br><br>
Мы предлагаем Покупателю наших картин 2,5% каждый месяц от уплаченной суммы, в той криптовалюте, за которую была приобретена наша картина. Условия сделки прописаны в смарт-контракте, и размещены в блокчейне. Пролонгировать смарт- контракт можно каждый год, через личный кабинет на нашем сайте.
<br><br>
Каждому покупателю наших NFT картин мы отправляем  оригинал произведения по тому адресу, который он укажет при заказе картины.
Основной заработок на NFT-площадках происходит в момент перепродажи картин. Мы уверены, что с функцией ДОХОДА на каждую картину, стоимость возрастет многократно, если этого не случится, готовы будем выкупить сами, за первоначальную стоимость.
              </p>

          </div>
          <div class="col-12 col-md-6 row-img q-mb-lg q-mb-md-none">

            <div class="col-12 text-center"><img class="img" style="width: 60%" src="~assets/nft-img.png" alt=""></div>



          </div>
        </div>

      </div>
    </section>
    <section class="about bg-grey-2 q-py-xl">
      <div class="container">
        <h3 class="title q-mb-lg ">Маркетплейсы, где мы<br class="gt-sm">представлены</h3>
        <p class="text-lh-150 q-mb-xl">
          Кликните на логотип платформы, чтобы сразу перейти на страницу с<br class="gt-sm"> нашим верифицированным магазином </p>
        <div class="row q-col-gutter-md-xl items-start">
          <div class=" col-12 col-md-4 q-mb-md q-mb-md-none text-center">
            <img class="img" src="~assets/p1.jpg" alt="">

          </div>
          <div class=" col-12 col-md-4 q-mb-md q-mb-md-none text-center">
            <img class="img" src="~assets/p2.jpg" alt="">
          </div>
          <div class=" col-12 col-md-4   text-center">
            <img class="img" src="~assets/p3.jpg" alt="">

          </div>

        </div>

      </div>

    </section>
    <section class="docs">
      <div class="container">
        <h3 class="title">Документы</h3>
        <div class="row q-gutter-md-xl">
          <div class="col-12 col-md-7 docs-grid q-mb-lg q-mb-lg-none">

            <div >
              <div class="overlay-img " @click="modalImg = `/doc2.jpg`,modal=true">
                <img class="img" src="/doc2.jpg" alt="">
                <div class="overlay-img__overlay">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                  </svg>

                </div>
              </div>
              <p class="no-margin text-caption">Свидетельство о регистрации юридического лица</p>
            </div>
            <div >
              <div class="overlay-img " @click="modalImg = `/doc3.jpg`,modal=true">
                <img class="img" src="/doc3.jpg" alt="">
                <div class="overlay-img__overlay">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                  </svg>

                </div>
              </div>
              <p class="no-margin text-caption">К каждой купленной картине прилагается Сертификат Аутентичности, на котором находится описание изображения, артикул, и информация о хранении картины.</p>
            </div>
            <div >
              <div class="overlay-img " @click="modalImg = `/doc1.jpg`,modal=true">
                <img class="img" src="/doc1.jpg" alt="">
                <div class="overlay-img__overlay">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                  </svg>

                </div>
              </div>
              <p class="no-margin text-caption">Лицензия нашего партнера ArtBooklet</p>
            </div>



          </div>
          <div class="col-12 col-md-4 offer-1 flex column items-start justify-start">
            <p class="q-mb-sm lt-md"><a href="/d-of-ARTDOX.pdf" target="_blank" class="link text-caption">Договор Оферты</a></p>
            <p class="q-mb-sm lt-md"><a href="/d-z.pdf" target="_blank" class="link text-caption">Договор Заклада</a></p>
            <p class="q-mb-sm lt-md"><a href="/d-o-i-u.pdf" target="_blank" class="link text-caption">Договор Хранения</a></p>
            <p class="q-mb-sm lt-md"><a href="/ARTDOX-p-s.pdf" target="_blank" class="link text-caption">Пользовательское соглашение</a></p>
            <p class="q-mb-lg lt-md"><a href="/ARTDOX-conf.pdf" target="_blank" class="link text-caption">Политика Конфиденциальности</a></p>

            <div class="">
              <p class="text-avenir-300 text-lh-200 text-body2">
                Полный список документов, а так же контакты нашей фирмы находятся в разделе Контакты нашего сайта.
              </p>
            </div>
            <div class="q-mt-xl">
              <p class="q-mb-sm gt-sm"><a href="/d-of-ARTDOX.pdf" class="link text-body1">Договор Оферты</a></p>
              <p class="q-mb-sm  gt-sm"><a href="/d-z.pdf" class="link text-body1">Договор Заклада</a></p>
              <p class="q-mb-sm gt-sm"><a href="/d-o-i-u.pdf" class="link text-body1">Договор Хранения</a></p>
              <p class="q-mb-sm gt-sm"><a href="/ARTDOX-p-s.pdf" class="link text-body1">Пользовательское соглашение</a></p>
              <p class="no-margin gt-sm"><a href="/ARTDOX-conf.pdf" class="link text-body1">Политика Конфиденциальности</a></p>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <h3 class="title ">FAQ</h3>
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
            <q-card>
              <q-card-section>
                {{item.answer}}
              </q-card-section>
            </q-card>
          </q-expansion-item>


        </q-list>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <h3 class="title">Новости</h3>
        <div class="news-grid">
          <div class="news-item" v-for="(item,index) in newsItems" :key="index">
            <a target="_blank" :href="item.url">
              <div class="news-item__top flex items-center q-mb-lg">
                <p class="q-mb-none text-avenir-600 text-grey-5 text-caption">{{item.date}}</p>
                <q-separator spaced="md" vertical/>
                <p class="q-mb-none text-avenir-600 text-dark text-caption">{{item.tag}}</p>
              </div>
              <p class="text-playfair text-body1 text-dark">{{item.title}}</p>
              <div class="news-item__text">
                <p class="no-margin text-montserrat text-body2 text-lh-150 text-grey-7">
                  {{item.text}}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

  </q-page>
  <q-dialog
    v-model="modal"
  >
    <q-card class="relative-position" style="width: 1360px; max-width: 90vw; height: auto">
      <q-btn color="white" :dense="$q.screen.lt.sm"  text-color="dark" style="top: 20px; right: 20px" v-close-popup class="absolute-top-right z-max" icon="close" round />
      <!--             <q-img :ratio="16/9" :src="modalImg"/>-->
      <img  :src="modalImg" alt="">
    </q-card>
  </q-dialog>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
      modal:false,
      modalImg:'',
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      breakpoints: {
        320: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.5,
          //snapAlign: 'start',
        },
      },
      offer_slide:1,

      offerSlides:[],
      gallerySlides:[],
      faqItems:[
        {question:'Зачем вам платить доход каждому покупателю картин?',answer:'- Этим мы стимулируем наших клиентов  для активных действий на сайте и популяризации нашего ресурса.'},
        // {question:'Почему вы работаете через ИП, а не через ООО?',answer:'- Так гораздо меньше издержек и документооборота. Мы все равно являемся предпринимателем, со всей степенью ответственности, только расходы на содержание команды и всевозможные выплаты меньше.'},
        {question:'Как, и когда я смогу вернуть свои, потраченные на покупку картины, деньги?',answer:'- Согласно, Доверительного Договора Управления, вы получаете от нас в течение года, каждый месяц выплаты, потом можете продлить Договор, или вернуть нам картину и забрать потраченную на ее покупку деньги, весь раннее полученный доход остается у вас. '},
        {question:'Сколько всего картин я могу у вас приобрести?',answer:'- Если картины выставлены на сайте, в разделе Галерея и нет значка Продано, то возможна покупка. Купить можно любое количество выставленных картин.'},
        {question:'Гарантии получения Дохода и возврата моих средств?',answer:'- Главная гарантия — это работающий бизнес с Китаем, где мы получаем основной Доход.\n' +
            'Исходные цифры рентабельности, мы представили в разделе — ДОХОД.\n' +
            'Если у вас возникают сомнения после покупки картины, то дождитесь первого квартала и\n' +
            'начисленных процентов за него, и тогда ваши сомнения исчезнут.'},
      ],
      newsItems:[
        {date:'17 февраля 2020', tag:'Денис Белькевич',title:'Просто о сложном: Art Investment',text:'Предметы искусства с инвестиционной точки зрения такой же материальный актив, как драгоценные металлы, недвижимость, акции и другие ценные бумаги. В середине 1980-х «язык искусства» начали переводить на понятный инвестору финансовый язык. С 2000-х годов, после появления доступных статистических баз данных и инвестиционной аналитики, искусство начали использовать в качестве осмысленного финансового инструмента.',url:'https://artinvestment.ru/invest/analytics/20200217_art_invest_2.html'},
        {date:'22 ноября 2020', tag:'Ксения Хофманн',title:'Произведения искусства как инструмент инвестиций',text:'Произведения искусства могут расти в цене и приносить своим вкладчикам прибыль подобно акциям и другим известным нам активам. Например, картина «Спаситель мира», написанная Леонардо Да Винчи в 1499 году, сейчас стоит более $450 млн, а «Алжирские женщины» Пабло Пикассо – почти $180 млн.',url:'https://vc.ru/finance/179696-proizvedeniya-iskusstva-kak-instrument-investiciy'},
        {date:'4 сентября 2021', tag:'Алексей Кудрявцев',title:'Открытие платформы Artdox 1 ноября 2021 года',
          text:'Первого ноября в Москве при поддержке Digi Gravure и Академии акварели и изящных искусств Сергея Андрияки открывается новый портал доходного искусства Artdox. Все желающие получат возможноть приобрести уникальные по качеству работы именитых художников и получать прибыль от выставлений репродукций на выставках и экспозициях',url:'https://vc.ru/finance/179696-proizvedeniya-iskusstva-kak-instrument-investiciy'},
      ],
      interierItems:[
        {title:'Заказ картин',text:'Если картины нет в наличии, вы можете сделать Заказ.',
          //url:'gallery',
          //link:'В каталог',
          add_text:'Войдите в Галерею, выберите картину, отложите ее в корзину и оформите Заказ. Срок исполнения Заказа 10 рабочих дней, плюс срок Доставки, если вы из другого региона.'},

        {title:'Доставка',
          text:'Доставка по Москве нашим курьером бесплатная.',
          // url: 'index',
          // link:'Подробнее',
          add_text:` Доставку в регионы России, осуществляет почтовая служба  <a class="link" target="_blank" href="https://www.cdek.ru/ru/">СДЕК</a>  , срок доставки зависит от вашего региона проживания.`
        },
        {title:'Возврат',
          text:'В любое время вы можете вернуть нам обратно картину, и получить свои средства.',
          add_text: 'Согласно Договору оферты, пункту № 4.1.5., мы принимаем от вас картину обратно и возвращаем вам за нее средства, если она будет в целостности и сохранности.'},


      ],
      interierItems1:[
        {title:'Заклад',
          text:'Если вам срочно нужны деньги, но вы не хотите продавать картины, которые приносят вам хороший доход, вы можете заложить картины, купленные у нас за 50% от уплаченной суммы.',
          add_text:'Сделать это можно в любое время, но если вы не выкупите картины обратно в договоренный срок, то права на картины вы теряете и оставшуюся часть средств тоже, с причитающимся на них доходом. Плата за услугу отсутствует. Договор можно заключить на любой срок.',
        },

        {title:'Хранение',
          text:'Предоставляется бесплатно, и включает в себя виртуальное владение одной и более картин, при условии их реального хранения в «ARTDOX».',
          add_text: 'После вашего выбора картины из нашей галереи, вы оплачиваете покупку, и заключаете с нами «Договор Ответственного Хранения». Данный Договор дает возможность вам  хранить свои картины у нас без каких-либо затрат для себя. Все причитающиеся выплаты сохраняются для вас в полном объеме.  Если у вас возникнет желание забрать, или реализовать картину, вы даете нам распоряжение, и мы исполняем это поручение  в  течение 10 дней.'
        },
        {title:'NFT',
          text:'Невзаимозаменяемые токены (NFT)  - представляют собой запись о создателе цифровой картины, и информацию о всех последующих ее продажах, владельцах, и стоимости.',
          add_text: 'Цифровое искусство, продаваемое с помощью технологии NFT, называют криптоискусством.  NFT – один из основополагающих элементов новой цифровой экономики на основе блокчейна. Следующий этап нашей деятельности – это создание оцифрованной Коллекции наших картин, размещение и продажа их на специализированных площадках.'
        },


      ],
      teamItems:[
        {img:'team1.jpg',name:'Lindsey Rosser',work:'Директор'},
        {img:'team2.jpg',name:'Jordyn Vetrovs',work:'Искусствовед'},
        {img:'team3.jpg',name:'Hannah Herwitz',work:'Юрист'},
        {img:'team4.jpg',name:'Paityn Bergson',work:'Менеджер'},

      ]

    }
  },
  async beforeMount() {
    const resp = await this.$api.get('/api/item/get?type=index')
    this.gallerySlides = resp.data
    const resp_banner = await this.$api.get('/api/data/banners')
    this.offerSlides = resp_banner.data
  },
  methods:{
    galleryPrev(){
      document.getElementsByClassName('carousel__prev')[0].click()
    },
    galleryNext(){
      document.getElementsByClassName('carousel__next')[0].click()
    },
  },
  computed:{
    offerSliderProgress(){
      return ((100 / this.offerSlides.length) * .01) * this.offer_slide
    }
  }
}
</script>
<style lang="sass" scoped>
.row-text
  order: 1
.row-img
  order: 2
.offer
  background: $grey-2

  &-slider
    height: 900px
    background: $grey-2
  &-slide
    background: $grey-2
    color: #fff
    display: grid
    grid-template-columns: 1fr 1fr
    align-items: center
    &-controls
      position: absolute
      display: flex
      justify-content: space-between
      align-items: center
      width: 500px
      bottom: 150px
      &__buttons
        display: flex
        align-items: center
        justify-content: space-between
        flex-basis: 130px
      &__progress
        width: 300px
        &-num
          color: $grey-5
          display: flex
          align-items: center
          justify-content: space-evenly
          margin-bottom: 10px
@media (max-width: 1024px)
  .about
    & .text-h6
      font-size: 16px
  .offer
    &-slider
      height: 600px
    &-slide
      grid-template-columns: 1fr
      align-items: unset
      &-text
        order: 2
        & .title
          font-size: 24px
          line-height: 28px
        & .subtitle
          font-size: 14px
          line-height: 22px
      &-img
        order: 1
        display: flex
        align-items: center
        justify-content: center
        img
          width: 160px
          height: auto
      &-controls
        position: relative
        display: grid
        grid-template-columns: 1fr
        grid-gap: 30px
        padding: 0 40px
        width: unset
        bottom: 50px
        &__buttons
          justify-content: space-evenly
        &__progress
          width: 100%
.gallery-title
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 40px
  &__buttons
    display: flex
    align-items: center
    justify-content: space-between
    flex-basis: 120px

@media (max-width: 480px)
  .offer-slider
    height: 500px
.interier
  &-grid
    display: grid
    grid-template-columns: repeat(3,1fr)
    grid-column-gap: 20px
    grid-row-gap: 14px
    margin-bottom: 70px
@media (max-width: 1024px)
  .row-text
    order: 2
  .row-img
    order: 1
  .interier-grid
    grid-template-columns: repeat(3, 1fr)
    grid-column-gap: 4px
    grid-row-gap: 0px
.docs-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  grid-column-gap: 20px
@media (max-width: 1024px)
  .docs-grid
    grid-gap: 10px
.news-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  border: 1px solid #E5E5E5
  box-sizing: border-box
  &.no-tb
    border-top: none !important

.news-item
  padding: 65px
  border-right: 1px solid #E5E5E5
  &:last-child
    border-right: none
@media (max-width: 1024px)
  .news-grid
    grid-template-columns: 1fr
  .news-item
    padding: 24px
    border-bottom: 1px solid #E5E5E5
    &__text
      flex-direction: unset
    &:last-child
      border-bottom:  none

</style>
