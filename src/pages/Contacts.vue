<template>
  <q-page class="page">
    <div class="container">
      <q-breadcrumbs class="breadcrumbs">
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />

        <q-breadcrumbs-el label="Контакты" />
      </q-breadcrumbs>
      <section>
        <h1 class="title q-mb-lg q-mb-lg-xl">Контакты</h1>
      </section>
      <section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 flex items-center">
            <svg class="q-mr-md" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31 22.75H29.5C29.4994 22.1534 29.2622 21.5815 28.8403 21.1597C28.4185 20.7378 27.8466 20.5006 27.25 20.5V19C28.2442 19.0012 29.1973 19.3967 29.9003 20.0997C30.6033 20.8027 30.9988 21.7558 31 22.75Z" fill="#3F3838"/>
              <path d="M34 22.75H32.5C32.4984 21.3581 31.9448 20.0237 30.9606 19.0394C29.9763 18.0552 28.6419 17.5016 27.25 17.5V16C29.0396 16.002 30.7553 16.7138 32.0208 17.9792C33.2862 19.2447 33.998 20.9604 34 22.75Z" fill="#3F3838"/>
              <path d="M32.5 34.75H32.3725C17.635 33.9025 15.5425 21.4675 15.25 17.6725C15.2043 17.0776 15.3968 16.4888 15.7851 16.0358C16.1735 15.5828 16.7258 15.3025 17.3208 15.2568C17.3803 15.2523 17.44 15.25 17.5 15.25H21.4525C21.7529 15.2497 22.0465 15.3396 22.2953 15.5081C22.544 15.6766 22.7364 15.9159 22.8475 16.195L23.9875 19C24.0973 19.2727 24.1245 19.5716 24.0659 19.8596C24.0072 20.1476 23.8652 20.412 23.6575 20.62L22.06 22.2325C22.3085 23.651 22.9873 24.9587 24.0043 25.9784C25.0212 26.998 26.3272 27.6802 27.745 27.9325L29.3725 26.32C29.5836 26.1146 29.8506 25.9759 30.14 25.9213C30.4294 25.8666 30.7285 25.8983 31 26.0125L33.8275 27.145C34.1024 27.2597 34.3369 27.4536 34.5012 27.702C34.6655 27.9504 34.7521 28.2422 34.75 28.54V32.5C34.75 33.0967 34.513 33.669 34.091 34.091C33.6691 34.5129 33.0968 34.75 32.5 34.75ZM17.5 16.75C17.4015 16.7497 17.3039 16.7688 17.2128 16.8062C17.1217 16.8436 17.0389 16.8986 16.969 16.9681C16.8992 17.0375 16.8437 17.12 16.8057 17.2109C16.7678 17.3018 16.7481 17.3993 16.7478 17.4978C16.7478 17.5188 16.7485 17.5395 16.75 17.56C17.095 22 19.3075 32.5 32.455 33.25C32.6535 33.2619 32.8486 33.1945 32.9974 33.0625C33.1462 32.9306 33.2366 32.745 33.2485 32.5465L33.25 32.5V28.54L30.4225 27.4075L28.27 29.545L27.91 29.5C21.385 28.6825 20.5 22.1575 20.5 22.09L20.455 21.73L22.585 19.5775L21.46 16.75H17.5Z" fill="#3F3838"/>
              <circle cx="25" cy="25" r="24.5" stroke="#393939"/>
            </svg>
            <div class="">
              <p class="no-margin text-dark">+7 925 509 40 90</p>
              <q-separator/>
              <p class="no-margin text-body1 text-grey-15">с 10 до 18 пн-пт</p>
            </div>
          </div>
          <div class="col-12 col-md-4 flex items-center">
            <svg width="50" class="q-mr-md" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9638 27.1835C29.6906 27.047 28.3513 26.3888 28.102 26.2971C27.8527 26.2064 27.6712 26.1615 27.4888 26.4346C27.3073 26.706 26.7857 27.3201 26.6271 27.5016C26.4676 27.684 26.309 27.706 26.0367 27.5704C25.7645 27.4329 24.8863 27.146 23.8459 26.2183C23.0365 25.496 22.4893 24.604 22.3307 24.3309C22.1721 24.0586 22.3133 23.911 22.4498 23.7754C22.5727 23.6535 22.7221 23.4573 22.8587 23.2987C22.9952 23.1392 23.0402 23.0255 23.1309 22.8431C23.2226 22.6616 23.1768 22.503 23.108 22.3665C23.0402 22.2299 22.4957 20.8888 22.2683 20.3434C22.0474 19.8126 21.8228 19.885 21.656 19.8759C21.4965 19.8685 21.315 19.8667 21.1335 19.8667C20.952 19.8667 20.6568 19.9345 20.4075 20.2077C20.1572 20.48 19.4542 21.139 19.4542 22.4801C19.4542 23.8203 20.4295 25.1155 20.5661 25.298C20.7027 25.4795 22.4865 28.2313 25.2191 29.411C25.8699 29.6915 26.3768 29.8593 26.7719 29.984C27.4246 30.192 28.0186 30.1627 28.4879 30.0921C29.0104 30.0142 30.0994 29.433 30.3268 28.7969C30.5532 28.1607 30.5532 27.6153 30.4853 27.5016C30.4175 27.388 30.236 27.3201 29.9628 27.1835H29.9638ZM24.9936 33.9696H24.9899C23.3669 33.9699 21.7737 33.5336 20.3772 32.7065L20.0473 32.5103L16.6171 33.4105L17.5328 30.0665L17.3174 29.7236C16.41 28.2793 15.9299 26.6077 15.9323 24.902C15.9342 19.9061 19.9987 15.8416 24.9972 15.8416C27.4172 15.8416 29.6924 16.7858 31.4029 18.4981C32.2466 19.3383 32.9153 20.3375 33.3703 21.4378C33.8254 22.5381 34.0577 23.7177 34.0539 24.9084C34.0521 29.9042 29.9876 33.9696 24.9936 33.9696ZM32.7046 17.1974C31.6946 16.1807 30.4929 15.3746 29.1691 14.8258C27.8453 14.2769 26.4257 13.9963 24.9927 14C18.9848 14 14.0935 18.8905 14.0917 24.901C14.0908 26.8224 14.5922 28.6979 15.5464 30.3506L14 36L19.7787 34.4839C21.3772 35.3548 23.1686 35.8112 24.989 35.8112H24.9936C31.0014 35.8112 35.8927 30.9208 35.8946 24.9093C35.899 23.4768 35.6194 22.0576 35.0718 20.7339C34.5243 19.4102 33.7197 18.2082 32.7046 17.1974Z" fill="#3F3838"/>
              </g>
              <circle cx="25" cy="25" r="24.5" stroke="#393939"/>
              <defs>
                <clipPath id="clip0">
                  <rect width="22" height="22" fill="white" transform="translate(14 14)"/>
                </clipPath>
              </defs>
            </svg>

            <div class="">
              <p class="no-margin text-dark">+7 925 509 40 90</p>
              <q-separator/>
              <p class="no-margin text-body1 text-grey-15">с 10 до 18 пн-пт</p>
            </div>
          </div>
          <div class="col-12 col-md-4 flex items-center">
            <svg class="q-mr-md" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.25 17H31.75C32.5801 16.9999 33.3788 17.3176 33.9822 17.8877C34.5856 18.4578 34.948 19.2372 34.995 20.066L35 20.25V29.75C35.0001 30.5801 34.6824 31.3788 34.1123 31.9822C33.5422 32.5856 32.7628 32.948 31.934 32.995L31.75 33H18.25C17.4199 33.0001 16.6212 32.6824 16.0178 32.1123C15.4144 31.5422 15.052 30.7628 15.005 29.934L15 29.75V20.25C14.9999 19.4199 15.3176 18.6212 15.8877 18.0178C16.4578 17.4144 17.2372 17.052 18.066 17.005L18.25 17H31.75H18.25ZM33.5 22.373L25.35 26.663C25.258 26.7116 25.1568 26.7405 25.053 26.7479C24.9492 26.7553 24.845 26.7411 24.747 26.706L24.651 26.664L16.5 22.374V29.75C16.5 30.1892 16.6652 30.6123 16.9627 30.9354C17.2602 31.2585 17.6683 31.4579 18.106 31.494L18.25 31.5H31.75C32.1893 31.5 32.6126 31.3347 32.9357 31.037C33.2588 30.7392 33.4581 30.3309 33.494 29.893L33.5 29.75V22.373ZM31.75 18.5H18.25C17.8108 18.5 17.3877 18.6652 17.0646 18.9627C16.7415 19.2602 16.5421 19.6683 16.506 20.106L16.5 20.25V20.679L25 25.152L33.5 20.678V20.25C33.5 19.8107 33.3347 19.3874 33.037 19.0643C32.7392 18.7412 32.3309 18.5419 31.893 18.506L31.75 18.5Z" fill="#3F3838"/>
              <circle cx="25" cy="25" r="24.5" stroke="#393939"/>
            </svg>

            <div class="">
              <p class="no-margin text-dark">info@artdox.ru</p>
              <q-separator/>
              <p class="no-margin text-body1 text-grey-15">Отвечаем в течении 24 часов</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 class="title q-mb-lg q-mb-lg-xl">Написать нам</h3>
        <div class="row  items-center">
          <div class="col-12 col-md-6 q-mb-xl q-mb-md-none">
            <p>Тема</p>
            <q-input class="q-mb-lg " v-model="subject" borderless  bg-color="grey-3" />
            <p>Сообщение</p>
            <q-input class="q-mb-lg"  v-model="text" type="textarea" borderless bg-color="grey-3" />
            <div class="q-gutter-lg">
              <q-btn :loading="is_loading" unelevated color="dark"
                     :disable="!text || !subject"
                     label="Отправить" @click="send" no-caps rounded size="18px" class="q-px-xl"/>

              <q-btn :loading="is_loading" unelevated :color="file? 'positive' :  'white'" :text-color="file? 'positive' :  'dark'" label="Прикрепить файл" outline no-caps rounded size="18px" class="q-px-xl">
                 <q-file style="width: 100%;position: absolute;opacity: 0" class="q-mb-md " rounded outlined   v-model="file" label="Прикрепить файл" />
              </q-btn>
            </div>
          </div>
          <div class="col-12 col-md-4 offset-0 offset-md-2" >
            <p>Если вы художник - отправьте нам ваши работы, мы оценим их стоимость и вышлем вам предложенеи!<br><br>

              Если вы меценат - то мы с вами свяжемся.</p>
          </div>
        </div>

      </section>

      <section>
        <h3 class="title q-mb-lg q-mb-lg-xl">Реквизиты</h3>
        <div class="row  ">
          <div class="col-12 col-md-4">
            <p class="no-margin">
ИП Пономарев Петр Олегович<br>
                ИНН 772642720112<br>
                Банк АО "Тинькофф банк"<br>
            Р/С 40802810000002728312
            </p>
          </div>
          <div class="col-12 col-md-4 offset-0 offset-md-4">
            <p class="no-margin text-lh-200 ">
<a href="/d-of-ARTDOX.pdf" target="_blank" class="link ">Договор Оферты</a><br>
            <a href="/d-z.pdf" target="_blank" class="link ">Договор Заклада</a><br>
            <a href="/d-o-i-u.pdf" target="_blank" class="link ">Договор Хранения</a><br>
            <a href="/ARTDOX-p-s.pdf" target="_blank" class="link ">Пользовательское соглашение</a><br>
            <a href="/ARTDOX-conf.pdf" target="_blank" class="link ">Политика Конфиденциальности</a>
            </p>
          </div>
        </div>
      </section>


    </div>



  </q-page>
</template>
<script>

export default {

  data(){
    return{
      is_loading:false,
      subject:'',
      text:'',
      file:null
    }
  },
  methods:{
    async send(){
      this.is_loading = !this.is_loading
      let formData = new FormData()
      formData.set('subject',this.subject)
      formData.set('text',this.text)
      if(this.file){
        formData.set('file',this.file)
      }
      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/data/c_form',
        data: formData
      })
      this.$q.notify({
        message: 'Сообщение отправлено',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      this.subject=''
      this.text=''
      this.file=null
      this.is_loading = !this.is_loading
    }
  }

}
</script>

<style lang="sass" scoped>
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
