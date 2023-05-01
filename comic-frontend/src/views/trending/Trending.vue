<template>
    <main class="container mt-4">
        <div class="my-5">
            <h3 class="text-white text-center">New & Trending</h3>
            <swiper
                :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mySwiper2 my-2"
            >
                <swiper-slide v-for="comic in comics" :key="comic._id" class="swi">
                        <div class="col-4">
                            <img :src="'http://localhost:3000/assets/pdf/'+comic.photo"/>
                        </div>
                        <div class="col-7">
                            <p class="name m-0">{{ comic.name }}</p>
                            <GenreName :id="comic._idGenre" class="mb-3"/>
                            <p class="description">{{ comic.description }}</p>
                            <button class="btn">
                                <router-link :to="{
                                        name: 'comic.detail',
                                        params: { id: comic._id },
                                    }" 
                                    class="banner-button-link">
                                    Watch now
                                </router-link>
                            </button>
                        </div>
                    
                </swiper-slide>
            </swiper>
            <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="8"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="comic in comics" :key="comic._id">
                    <img :src="'http://localhost:3000/assets/pdf/'+comic.photo"/>
                </swiper-slide>
            </swiper>
        </div>
       
        <div class="">
            <h3 class="text-white text-center">New & Trending By Genre</h3>
            <TrendingGenre />
        </div>
    </main>
  </template>
  <script>
    import { ref } from 'vue';
    import {FreeMode,Navigation,Thumbs} from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    import "swiper/css/free-mode"
    import "swiper/css/navigation"
    import "swiper/css/thumbs"

    import comicService from '@/services/comic.service';
import GenreName from '../../components/GenreName.vue';
import TrendingGenre from './TrendingGenre.vue';
  
    export default {
      components: {
    Swiper,
    SwiperSlide,
    GenreName,
    TrendingGenre
},
      data(){
        return{
            comics:[]
        }
      },
      methods:{
        async retrieveComics(){
                    try {
                        var comics = await comicService.getTrending();
                        if(comics && comics.errCode == 0){
                            this.comics = comics.comics;
                        }
                    } catch (error) {
                        console.log(error);
                    }
            },
      },
      setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
          thumbsSwiper.value = swiper;
        };
        return {
          thumbsSwiper,
          setThumbsSwiper,
          modules: [FreeMode,Navigation,Thumbs],
        };
      },
      mounted(){
        this.retrieveComics();
      }
    };
  </script>
  <style>
    .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
    color: #ffffff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 85%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide .description{
    font-size: 14px;
    word-spacing: 2px;
}
.swiper-slide.swi{
    padding: 20px 90px;
    
}

</style>