<template>
  <q-page>

    <section class="offer">
      <div class=" relative-position">
       <q-carousel
      animated
      v-model="offer_slide"
      arrows
      :autoplay="5000"
      class="offer-slider"
      transition-prev="jump-right"
          transition-next="jump-left"
      swipeable
      infinite
    >
      <q-carousel-slide :name="1" img-src="~assets/b1.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/b2.jpg" />

    </q-carousel>

      </div>


    </section>
    <section class="about">
      <div class="container">
        <h3 class="title q-mb-lg ">О нас</h3>

        <div class="row q-col-gutter-md-xl">
          <div class=" col-12 col-md-6">
            <p class="q-mb-none text-lh-200">
              Наша Команда специалистов в области искусства, менеджмента и маркетинга, в партнерстве с китайскими компаниями ARTBOOKLET LTD, IWS GLOBE ART и ЕВРАЗИЙСКИМ ХУДОЖЕСТВЕННЫМ СОЮЗОМ, предлагает Вам абсолютно новый подход к продажам предметов искусства. <br><br>
Вся наша деятельность нацелена на то, чтобы предметы искусства приносили своему владельцу не только эстетическое удовольствие, но и материальную выгоду. Гораздо приятней смотреть на картину и знать, что деньги, потраченные на ее приобретение, не только возможно вернуть, но и приумножить.<br><br>
Не важно, что вы будете делать с картиной, повесите дома, в офисе, отдадите в аренду, или оставите у нас на хранение, вы всегда будете иметь с нее доход.
            </p>
          </div>
          <div class="gt-sm col-6">
            <div class="row q-col-gutter-md-md">
              <div class="col-6 "><img class="img" src="~assets/about1.jpg" alt=""></div>
              <div class="col-6 "><img class="img q-mt-xl" src="~assets/about2.jpg" alt=""></div>

            </div>
          </div>
        </div>

      </div>
    </section>
     <section class="about">
      <div class="container">
        <h3 class="title q-mb-lg ">Доход</h3>

        <div class="row q-col-gutter-md-xl">
          <div class=" col-12 col-md-12">
            <p class="q-mb-md q-mb-md-lg text-lh-200">
Мы выработали систему, которая приносит доход от каждой картины. Наша экспозиционная деятельность позволяет сформировать доходность для каждой картины, при этом уровень ликвидности не зависит от художественной ценности и материальной стоимости актива, прибыль с картин получается при условии участия в экспозиционной и продажной деятельности на территории Китая и России.
            </p>
            <div class="text-center">
          <q-btn :to="{name:'profit'}" size="18px" class="text-montserrat q-px-xl" no-caps rounded unelevated color="dark" text-color="white" label="Подробнее"/>
        </div>
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
                <div class="gallery-item">
                  <div class="gallery-item__img q-mb-lg">
                    <img  :src="slide.img" alt="">
                    <div class="gallery-item__img-overlay">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
                      </svg>

                    </div>
                  </div>
                  <p class="q-mb-sm text-left gallery-item__title text-avenir-450 text-dark">{{slide.title}}</p>
                  <p class="text-left gallery-item__subtitle text-dark">{{slide.subtitle}}</p>

                  <p class="q-mb-none text-left text-caption">Артикул № {{slide.art}}</p>
                  <p class="q-mb-md text-left text-caption">Размер {{slide.size}}</p>
                  <p class="q-mb-none text-left text-fs18 text-avenir-450 text-warning">{{slide.price}}</p>
                </div>
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
          <div class="overlay-img" v-for="(i,index) in 8" :key="i">
            <img class="img" :src="`i${index+1}.jpg`" alt="">
            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>
        </div>
        <div class="text-center">
          <q-btn size="18px" class="text-montserrat q-px-xl" no-caps rounded unelevated color="dark" text-color="white" label="Загрузить ещё"/>
        </div>
      </div>
    </section>
     <section class="news">
      <div class="container">

        <div class="news-grid">
          <div class="news-item" v-for="(item,index) in interierItems" :key="index">

            <p class="text-playfair text-h5 text-dark">{{item.title}}</p>
            <div class="news-item__text">
              <p class="no-margin text-montserrat text-body2 text-lh-150 text-grey-7">
                {{item.text}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="docs">
      <div class="container">
        <h3 class="title">Документы и реквизиты</h3>
        <div class="row q-gutter-md-xl">
          <div class="col-12 col-md-7 docs-grid q-mb-lg q-mb-lg-none">

             <div class="overlay-img " >
            <img class="img" src="~assets/doc.jpg" alt="">
            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>

             <div class="overlay-img " >
            <img class="img" src="~assets/doc.jpg" alt="">
            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>

             <div class="gt-sm overlay-img " >
            <img class="img" src="~assets/doc.jpg" alt="">
            <div class="overlay-img__overlay">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 8.9999H10.9999V5.9999C10.9999 5.73469 10.8945 5.48033 10.707 5.2928C10.5195 5.10526 10.2651 4.9999 9.9999 4.9999C9.73469 4.9999 9.48033 5.10526 9.2928 5.2928C9.10526 5.48033 8.9999 5.73469 8.9999 5.9999V8.9999H5.9999C5.73469 8.9999 5.48033 9.10526 5.2928 9.2928C5.10526 9.48033 4.9999 9.73469 4.9999 9.9999C4.9999 10.2651 5.10526 10.5195 5.2928 10.707C5.48033 10.8945 5.73469 10.9999 5.9999 10.9999H8.9999V13.9999C8.9999 14.2651 9.10526 14.5195 9.2928 14.707C9.48033 14.8945 9.73469 14.9999 9.9999 14.9999C10.2651 14.9999 10.5195 14.8945 10.707 14.707C10.8945 14.5195 10.9999 14.2651 10.9999 13.9999V10.9999H13.9999C14.2651 10.9999 14.5195 10.8945 14.707 10.707C14.8945 10.5195 14.9999 10.2651 14.9999 9.9999C14.9999 9.73469 14.8945 9.48033 14.707 9.2928C14.5195 9.10526 14.2651 8.9999 13.9999 8.9999ZM20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z" fill="white"/>
              </svg>

            </div>
          </div>

          </div>
          <div class="col-12 col-md-4 offer-1 flex column items-start justify-between">
             <p class="q-mb-lg lt-md"><a href="" class="link">Скачать документы PDF</a></p>
            <div class="">
                  <p class="text-avenir-300 text-lh-200 text-body2">Lorem ipsum dolor sit amet nulla quibusdam reprehenderit tenetur? Ad atque, beatae dolores dolorum facilis fugit illum inventore nihil odio voluptatum!</p>
            <p class="text-avenir-300 q-mb-none text-lh-200 text-body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aut earum fuga, necessitatibus nulla quibusdam reprehenderit tenetur?</p>

            </div>
              <p class="no-margin gt-sm"><a href="" class="link">Скачать документы PDF</a></p>
         </div>
        </div>
      </div>
     </section>
     <section class="faq">
      <div class="container">
        <h3 class="title text-center">FAQ</h3>
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
          </div>
        </div>
      </div>
    </section>
     <section class="team">
      <div class="container">
        <h3 class="title">Наша команда</h3>
        <div class="team-grid">
          <div class="team-item text-center" v-for="(item,index) in teamItems" :key="index">
            <img class="img" :src="item.img" alt="">
            <p class="text-avenir-450 q-mb-sm text-body2">{{item.name}}</p>
            <p class="text-montserrat text-grey-6 q-mb-none text-body2">{{item.work}}</p>
          </div>
        </div>
        <div class="text-right">

         <q-btn  icon="chat_bubble_outline" round unelevated color="dark"  class="q-mr-sm" text-color="white"  />
           <q-btn  icon="phone" round unelevated color="dark" text-color="white"  />

        </div>
      </div>
    </section>
  </q-page>
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

      offerSlides:[
        {title:'Наши картины - как облигации на фондовом рынке',text:'Каждая картина, купленная у нас, имеет доходность 24% в год. Платим 6% в квартал от суммы покупки. Возврат картины и средств возможен в любое время.',img:'slide1.png'},
         {title:'Доходное искусство слайд1',text:'1Наши картины, как облигации на фондовом рынке, всегда приносят гарантированный доход своему владельцу. приносят гарантированный доход своему владельцу.',img:'slide2.jpg'},
         // {title:'Доходное искусство слайд2',text:'1Наши картины, как облигации на фондовом рынке, всегда приносят гарантированный доход своему владельцу.',img:'slide3.png'},
      ],
      gallerySlides:[
        {img:'gallery_slide1.jpg',title:'«Утро в лесу»',subtitle:'Репродукция акварели музейного качества',art:'001007',size:'40х60 см',price:'38 000 ₽'},
        {img:'gallery_slide2.jpg',title:'«Утро в лесу»',subtitle:'Репродукция акварели музейного качества',art:'001007',size:'40х60 см',price:'38 000 ₽'},
        {img:'gallery_slide3.jpg',title:'«Утро в лесу»',subtitle:'Репродукция акварели музейного качества',art:'001007',size:'40х60 см',price:'38 000 ₽'},
        {img:'gallery_slide4.jpg',title:'«Утро в лесу»',subtitle:'Репродукция акварели музейного качества',art:'001007',size:'40х60 см',price:'38 000 ₽'},
        {img:'gallery_slide5.jpg',title:'«Утро в лесу»',subtitle:'Репродукция акварели музейного качества',art:'001007',size:'40х60 см',price:'38 000 ₽'},

      ],
      faqItems:[
        {question:'Зачем вам платить доход каждому покупателю картин?',answer:'- Этим мы стимулируем наших клиентов  для активных действий на сайте и популяризации нашего ресурса.'},
        {question:'Почему вы работаете через ИП, а не через ООО?',answer:'- Так гораздо меньше издержек и документооборота. Мы все равно являемся предпринимателем, со всей степенью ответственности, только расходы на содержание команды и всевозможные выплаты меньше.'},
        {question:'Как, и когда я смогу вернуть свои потраченные на покупку картины деньги?',answer:'- Согласно Договору Управления, вы получаете от нас в течение года, каждый квартал выплаты,  потом можете продлить Договор, или вернуть нам картину и забрать потраченную на ее покупку деньги, весь раннее полученный доход остается у вас.  '},
      ],
      newsItems:[
        {date:'Сентябрь 02, 2021', tag:'Искусствовед',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus sollicitudin at lobortis cursus accumsan vitae nisl purus. Adipiscing et quam felis quisque eu. Justo, quis neque convallis tristique sed augue morbi etiam. Ac id mi non amet, turpis massa.'},
        {date:'Сентябрь 02, 2021', tag:'Директор',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus sollicitudin at lobortis cursus accumsan vitae nisl purus. Adipiscing et quam felis quisque eu. Justo, quis neque convallis tristique sed augue morbi etiam. Ac id mi non amet, turpis massa.'},
        {date:'Сентябрь 02, 2021', tag:'Менеджер',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus sollicitudin at lobortis cursus accumsan vitae nisl purus. Adipiscing et quam felis quisque eu. Justo, quis neque convallis tristique sed augue morbi etiam. Ac id mi non amet, turpis massa.'},
      ],
      interierItems:[
        {title:'Заказ экспозиции',text:'Заказать экспозицию вы сможете после регистрации на нашем сайте в личном кабинете.'},
        {title:'Доставка',text:'Доставка картины до вашего адреса осуществляется за наш счет транспортными компаниями: СДЭК, Почта России'},
        {title:'Возврат',text:'Возврат денежных средств осуществляется по 54-ФЗ переводом на ваш счет от нашей компании'},
      ],
      teamItems:[
        {img:'team1.jpg',name:'Lindsey Rosser',work:'Директор'},
        {img:'team2.jpg',name:'Jordyn Vetrovs',work:'Искусствовед'},
        {img:'team3.jpg',name:'Hannah Herwitz',work:'Юрист'},
        {img:'team4.jpg',name:'Paityn Bergson',work:'Менеджер'},

      ]

    }
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
.offer
  background: $grey-2

  &-slider
    height: 800px
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


.interier
  &-grid
    display: grid
    grid-template-columns: repeat(4,1fr)
    grid-column-gap: 20px
    grid-row-gap: 14px
    margin-bottom: 70px
@media (max-width: 1024px)
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
    grid-template-columns: repeat(2, 1fr)
.news-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  border: 1px solid #E5E5E5
  box-sizing: border-box
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
    &:last-child
      border-bottom:  none
.team
  margin-bottom: 45px
  &-grid
    display: grid
    grid-template-columns: repeat(4,1fr)
    grid-gap: 60px
    margin-bottom: 45px
  .team-item
    img
      margin-bottom: 40px
    &:nth-child(even)
      margin-top: 50px
@media (max-width: 1024px)
  .team-grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 15px
    grid-row-gap: 40px
    .team-item
      img
        margin-bottom: 20px
      &:nth-child(even)
        margin-top: 30px
</style>
