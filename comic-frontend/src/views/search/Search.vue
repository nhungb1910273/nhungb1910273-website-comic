<template>
    <div class="container row" style="padding-top:30px;">
            <div class="col-10">
                <div>
                    <h3 style="color:#e74c3c;">Result <span style="color:#cccccc;">({{ this.findComics.length }})</span></h3>
                    <div v-if="findComics.length > 0" class="row">
                        <h5 class="text-white my-2">Result with " {{ this.search }} "</h5>
                        <div class="col-3 mb-4" v-for="comic in findComics" :key="comic._id">
                                <router-link class="item_info" :to="{
                                        name: 'comic.detail',
                                        params: { id: comic._id },
                                    }" >
                                    <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
                                </router-link>
                                <p class="name_item">{{ comic.name }}</p>
                                <GenreName :id="comic._idGenre"/>                            
                        </div>
                    </div>
                    <h5 class="text-white" v-else >
                        No result with " {{ this.search }} "
                    </h5>
                </div>
            </div>
            <ul class="col-2">
                <li><h5 style="color:#e74c3c;">Recommend</h5></li>
                <li class="rounded my-3 p-1 li_search" 
                    v-for="comic in comics" 
                    :key="comic._id">
                    <router-link :to="{
                                    name: 'comic.detail',
                                    params: { id: comic._id },
                                }">
                        {{ comic.name }}
                    </router-link>
                </li>
               
            </ul>
        </div>
</template>

<script>
import comicService from "@/services/comic.service";
import GenreName from "../../components/GenreName.vue";

    export default{
    data() {
        return {
            findComics: [],
            search: this.$route.query.search,
            comics:[]
        };
    },
    methods: {
        async findComic() {
            try {
                var find = await comicService.findComicByName(this.search.normalize("NFD").replace(/\p{Diacritic}/gu, ""));
               if(find && find.errCode == 0){
                this.findComics = find.comics;
               }
            }
            catch (error) {
                console.log(error);
            }
        },
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
    mounted() {
        this.findComic();
        this.retrieveComics();
    },
    components: { GenreName }
}
</script>

