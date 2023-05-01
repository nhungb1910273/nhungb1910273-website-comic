<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="comic in comics" :key="comic._id">
        <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
        </swiper-slide>
        
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  import comicService from "@/services/comic.service";

  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:{
        idGenre:{type:String,required:true,default:null}
    },
    data(){
        return{
            comics:[],
        }
    },
    methods:{
        async getComicByGenre() {
                try {
                    var comics = await comicService.getComicByGenre(this.idGenre);
                    if(comics && comics.errCode == 0){
                        this.comics = comics.comics;
                        
                    }
                } catch (error) {
                    console.log(error);
                }
            },
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
    mounted(){
        this.getComicByGenre();
    }
  };
  </script>
  