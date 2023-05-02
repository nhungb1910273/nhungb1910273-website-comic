<template>
<main>
        <div class="container detail" style="margin-top: 40px;">
            <div class="row m-3 p-4">
              <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <img class="justify-content-md-center" style="width:270px; height: 380px; border-radius:5px;" :src="'http://localhost:3000/assets/pdf/'+comic.photo" alt="{{ comic.name }}">
              </div>
              <div class="col-7">
                  <h1 class="text-white">{{ comic.name }}</h1>
                    <div class="mb-3 text-white">Actor: <span class="title-detail">{{ comic.actor }}</span></div>
                    <div class="mb-3 text-white">Genre: <span class="title-detail">{{ genreName }}</span></div>
                    <div class="mb-3 text-white">Chapter:</div>
                    <div class="row mb-3">
                        <router-link v-for="(content,index) in contents" :key="content._id" class="text-white col-12 mb-2 chapter" :to="{
                                    name: 'comic.detail.read',
                                    params: { id: content._id },
                                }">
                            <i class="fa-solid fa-play mx-1"></i> Chapter {{ index+1 }} : {{ content.nameContent }}
                        </router-link>
                    </div>
                    <!-- <button class="read mb-3"> 
                        <router-link :to="{
                                    name: 'comic.detail.read',
                                    params: { id: comic._id },
                                }" >
                            ĐỌC NGAY
                        </router-link>
                    </button> -->
                    <div class="text-white">
                            Description: {{ comic.description }}
                       </div>
                    
                </div>
            </div>
            <div class="mt-5">
                <h3 class="text-white text-center">Comic Suggestions</h3>
                <swiper
                    :effect="'coverflow'"
                    :grabCursor="true"
                    :centeredSlides="true"
                    :slidesPerView="'auto'"
                    :coverflowEffect="{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }"
                    :pagination="true"
                    :modules="modules"
                    class="mySwiper"
                    >
                        <swiper-slide v-for="comic in comics" :key="comic._id">
                            <div>
                                <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
                                <p class="name_item">{{ comic.name }}</p>
                                <GenreName :id="comic._idGenre" />
                            </div>

                        </swiper-slide>
                        
                    </swiper>
            </div>
            <div class="mt-5">
                <h3 class="text-white">Comment</h3>
                <div class="text-white">Start a discussion, not a fire, Post with kindness</div>
                <CommentFormVue :comment="comment" @submit:comment="addComment"/>
                <CommentView :nameComic="comic.name" />

            </div>


                
        </div>
    </main>
</template>

<script>
import comicService from '@/services/comic.service';
import genreService from "@/services/genre.service";
import commentService from '@/services/comment.service';


import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import GenreName from '../../components/GenreName.vue';
import CommentFormVue from '../../components/CommentForm.vue';
import { toast } from 'vue3-toastify';
import CommentView from './CommentView.vue';

export default {
    
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            comic: {},
            genreName: "",
            contents: [],
            comics:[],
            comment:''
        };
    },
    methods: {
        async getComic(id) {
            try {
                var comic = await comicService.get(id);
                this.comic = comic;
                var genre = await genreService.get(comic._idGenre);
                this.genreName = genre.name;
                var content = await comicService.getContent(id);
                if (content && content.errCode == 0) {
                    this.contents = content.contents;
                }
                var comics = await comicService.getComicByGenre(comic._idGenre);
                if(comics && comics.errCode == 0){
                    this.comics = comics.comics;
                    
                }
            }
            catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                // this.$router.push({
                //     name: "notfound",
                //     params: {
                //         pathMatch: this.$route.path.split("/").slice(1)
                //     },
                // query: this.$route.query,
                // hash: this.$route.hash,
                // });
            }
        },
        async addComment(comment) {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                if(user){
                    const data = {
                        comment:comment,
                        username: user.name,
                        isPost: 'false',
                        nameComic: this.comic.name,
                    }
                    console.log(data);
                    var add = await commentService.addComment(data);
                    if(add && add.errCode==0){
                        this.comment='';
                        toast.success(add.message);
                        this.$router.go(0);
                        
                    }else{
                        toast.error(add.message);
                    }
                }else{
                    toast.error("Please login or register!")
                }
                // var register = await UserService.register(data);
                
                // if(register && register.errCode == 0){
                //     toast.success(register.message);
                //     this.user = {};
                //     this.$router.go(0);
                // }else{
                //     toast.error(register.message);
                // }
            } catch (error) {
                toast.error(error);
            }
        },
    },
    created() {
        this.getComic(this.id);
        
    },
    
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
    components: { Swiper, SwiperSlide, GenreName, CommentFormVue, CommentView },
      
}
</script>
<style>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 270px;
    height: 410px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>