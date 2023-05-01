<template>
    <Carousel :itemsToShow="4.95" :wrapAround="true" :transition="500" :autoplay="2000">
      <Slide v-for="slide in comics" :key="slide._id">
          <div class="item">
            <router-link :to="{
                name: 'comic.detail',
                params: { id: slide._id },
            }"  class="item_info">
                <img :src="'http://localhost:3000/assets/pdf/'+slide.photo" />
                
            </router-link>
            <p class="name_item">{{ slide.name }}</p>
                <GenreName :id="slide._idGenre" />
          </div>
      </Slide>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css';
  import comicService from '@/services/comic.service';
import GenreName from './GenreName.vue';
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
    Carousel,
    Slide,
    Pagination,
    GenreName
},
    data(){
      return{
        comics:[]
      }

    },
    methods:{
      async getComicTrending (){
        try {
          var trending = await comicService.getTrending();
          if(trending && trending.errCode==0){
            this.comics = trending.comics;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    mounted(){
      this.getComicTrending()
    }
  })
  </script>
  
  <style scoped>
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  </style>