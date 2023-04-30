<template>
<main>
        <div class="container" style="margin-top: 40px;">
            <div class="row m-3 p-4">
              <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <img class="justify-content-md-center" style="width:270px; height: 380px; border-radius:5px;" :src="'http://localhost:3000/assets/pdf/'+comic.photo" alt="{{ comic.name }}">
              </div>
              <div class="col-7">
                  <h1 class="text-white mt-2">{{ comic.name }}</h1>
                    <div class="mb-3 text-white">Actor: {{ comic.actor }}</div>
                    <div class="mb-3 text-white">Genre: {{ genreName }}</div>
                    <div class="mb-3 text-white">Chapter: {{ contents.length }}</div>
                    <div class="row mb-3 mx-3">
                        <router-link v-for="(content,index) in contents" :key="content._id" class="text-white col-12 mb-2" :to="{
                                    name: 'comic.detail.read',
                                    params: { id: content._id },
                                }">
                            Chapter {{ index+1 }} : {{ content.nameContent }}
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
                
    </div></main>
</template>

<script>
import comicService from '@/services/comic.service';
import genreService from "@/services/genre.service";

export default {
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            comic: {},
            genreName: '',
            contents:[],
        };
    },
    methods:{
        async getComic(id) {
            try {
                var comic = await comicService.get(id);
                this.comic = comic;
                var genre = await genreService.get(comic._idGenre);
                this.genreName = genre.name;
                var content = await comicService.getContent(id);
                if(content && content.errCode == 0){
                    this.contents=content.contents;
                }
            } catch (error) {
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
       
    },
    created() {
        this.getComic(this.id);
    },
}
</script>