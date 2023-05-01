<template>
    <p class="name_topic">{{ genreName }}</p>
</template>
<script>
import genreService from '@/services/genre.service';
export default{
    props:{
        id:{type:String,default:"",required:true}
    },
    data(){
        return{
            genreName:''
        }

    },
    methods:{
        async getGenre (){
            var genre = await genreService.get(this.id);
            console.log("GEnreName",genre);
            this.genreName = genre.name;
        }
    },
    mounted(){
        this.getGenre();
    }
}
</script>