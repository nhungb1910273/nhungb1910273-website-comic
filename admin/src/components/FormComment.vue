<template>

<Form @submit="submitComment" class="d-flex">
    <select class="custom-select" v-model="commentLocal.isPost">
        <option :value='true'>Yes</option>
        <option :value='false'>No</option>
    </select>
    <button class="btn">
        <i class="fas fa-save text-success"></i>
    </button>
</Form>
</template>
<script>
    // import genreService from "@/services/genre.service";
    // import comicService from "@/services/comic.service";
    // import { toast } from 'vue3-toastify';
    import { Form } from "vee-validate";
    import 'vue3-toastify/dist/index.css';

    export default {
        components:{
            Form
        },
        emits: ["submit:comment"],
        props: {
            comment: { type: Object, required: true },
            
        },
        data() {
            return {
                    commentLocal: this.comment,
                    
                                        
            };
        },
        methods: {
            submitComment() {
                // console.log(this.commentLocal);
                this.$emit("submit:comment", this.commentLocal);
            },
            
        },
        mounted(){
            console.log(this.commentLocal);
        }
    };
</script>