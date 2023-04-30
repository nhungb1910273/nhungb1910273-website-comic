<template>
    <!-- <div class="col-8 align-self-center row genre">
            <a href="midnight.php" class="col-3" v-for="(comic,index) in comics" :key="comic._id">
                <div class="movie-item">
                    <img :src="'http://localhost:3000/assets/pdf/'+comic.photo">
                    <p class="name_item" >{{ comic.name }}</p>
                </div>
            </a>
    </div> -->
    <VueCarousel :comics="comics" />
    
</template>
<script>

import comicService from '@/services/comic.service';
import VueCarousel from '../../components/VueCarousel.vue';
export default{
    components:{
        VueCarousel,
    },
    props: {
        id: { type: String, default: "" },
    },
    data() {
        return {
            comics: [],
        };
    },
    methods: {
        async retrieveComics() {
            try {
                var comics = await comicService.getComicByGenre(this.id);
                if (comics && comics.errCode == 0) {
                    this.comics = comics.comics;
                    console.log(this.comics);
                }
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.retrieveComics();
    },
}
</script>