<template>
        <main class="container">
      <!-- responsive -->
      <div class="btn-group">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Thể loại
        </button>
        <ul class="dropdown-menu">
          <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'all')}" @click="filterArray('all')">All comic</li>
          <li class="list dropdown-item" :class=" {'active_topic': (activeId === genre._id)}" @click="filterArray(genre._id)" v-for="(genre,index) in genres" :key="genre._id">{{ genre.name}}</li>
          
        </ul>
      </div>
      <section class="section">
        <ul class="nav">
          <li :class=" {'active_topic': (activeId === 'all')}" class="nav-item list" @click="filterArray('all')">All comic</li>
          <li :class=" {'active_topic': (activeId === genre._id)}" class="nav-item list" @click="filterArray(genre._id)" v-for="(genre,index) in genres" :key="genre._id">{{ genre.name}}</li>
        </ul>
      </section>
      <div class="comic">
        <!-- row1 -->
          <div class="item" :data-filter="comic._idGenre" v-for="(comic,index) in comics" :key="comic._id">
            <a href="haymanganhtrai.php" class="item_info">
              <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
            </a>
            <p class="name_item">{{ comic.name }}</p>
            <!-- <p class="name_topic">{{ genre.name }}</p> -->
          </div>
        
      </div>
    </main>
</template>

<script>

import comicService from "@/services/comic.service";
import genreService from "@/services/genre.service";
    export default{
       
        data(){
            return{
                genres:[],
                comics:[],
                activeId : 'all',
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
            async retrieveComicsHome(){
              try {
                var comics = await comicService.getAll();
                if(comics && comics.errCode == 0){
                    this.comics = comics.comics;
                }
              } catch (error) {
                  console.log(error);
              }
            },
            async filterArray(id) {
                try {
                  if(id == 'all'){
                    this.retrieveComicsHome();
                    this.activeId = id;
                  }else{
                    var comics = await comicService.getComicByGenre(id);
                    this.activeId = id;
                  }
                    if(comics && comics.errCode == 0){
                        this.comics = comics.comics;
                        
                    }
                    console.log(this.activeId);
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