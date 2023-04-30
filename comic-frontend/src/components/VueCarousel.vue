<template>
    <div class="col-8 align-self-center genre">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="comic in comics" :key="comic._id">
            <router-link :to="{
                name: 'comic.detail',
                params: { id: comic._id },
            }"  class="carousel__item">
                <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
                <figcaption>{{ comic.name }}</figcaption>
            </router-link>
              
        </Slide>
        
        <template #addons>
            <Navigation />
        </template>
        </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Navigation, Slide } from 'vue3-carousel';
  
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'Breakpoints',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    props:{
       comics: { type: Array, default: [] },
    },
    data: () => ({
      // carousel settings
      settings: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
      },
    }),
  })
  </script>
  