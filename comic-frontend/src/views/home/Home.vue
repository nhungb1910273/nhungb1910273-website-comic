<template>
    <main class="container">
        <!-- lich ra truyen -->
        <div class="mt-4">
            <div class="title">
                <h1 class="topic">Schedule</h1>
            </div>
            <ScheduleHome />
            
        </div>
        
        <!-- truyen moi -->
        <div class="mt-4">
            <div class="title">
                <h1 class="topic">New & Trending</h1>
                <router-link to="trending">
                    <span class="btn_all">See all</span>
                </router-link>
            </div>
            <div>
                <VueCarouselNew />
            </div>
        </div>
        
        <!-- the loai -->
        <div class="mt-4 ">
            <div class="title">
                <h1 class="topic">Genres</h1>
                <router-link to="genre">
                    <span class="btn_all">See all</span>
                </router-link>
            </div>
            <div v-for="(genre,index) in genres" :key="genre._id">
                <div v-if="index < 2" class="row justify-content-between mt-4">
                  <div class="col-3 m-2 topic_items">
                      <h5>{{ genre.name }}</h5>
                      <p>{{ genre.description }}</p>
                  </div>
                  <a href="theloai.php" class="topic_small">{{ genre.name }}</a>
                  <ComicGenre :id="genre._id" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import comicService from "@/services/comic.service";
import genreService from "@/services/genre.service";
import ComicGenre from './ComicGenre.vue';
import VueCarouselNew from "../../components/VueCarouselNew.vue";
import ScheduleHome from "./ScheduleHome.vue";
    export default {
        components:{
    ComicGenre,
    VueCarouselNew,
    ScheduleHome
},
        data(){
            return{
                genres:[],
                comics:[],
                day:'',
            }
        },
        methods:{
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            },
            async retrieveComicsHome() {
                try {
                    var comics = await comicService.getAll();
                    if(comics && comics.errCode == 0){
                        this.comics = comics.comics;
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            },
           
           
        },
        mounted() {
            this.retrieveGenres();
            this.retrieveComicsHome();
            
        },
        
    }
</script>