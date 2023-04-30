<template>
    <h4 class="text-white text-center mt-5">{{ content.nameContent }}</h4>
    <div class="container">
        <vue-pdf-embed :source="'http://localhost:3000/assets/pdf/'+content.content" />
    </div>

</template>

<script>
import comicService from '@/services/comic.service';
import VuePdfEmbed from 'vue-pdf-embed';

export default {
    components:{
        VuePdfEmbed,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            content: {},
        };
    },
    methods:{
        async getContent(id) {
            try {
                var comic = await comicService.getContentById(id);
                console.log(comic);
                this.content = comic;
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
        this.getContent(this.id);
    },
}
</script>