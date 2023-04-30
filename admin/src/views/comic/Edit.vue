<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

<!-- Main Content -->
<div id="content">

<Navbar />

<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">Comics</h1>

<!-- Add -->
<div class="card shadow mb-4">
<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Edit Comic</h6>
</div>
<div class="card-body">
    <FormComic
        :comic="comic"
        :content="content"
        @submit:comic="updateComic"
    />
</div>
</div>

</div>
<!-- /.container-fluid -->

</div>
<!-- End of Main Content -->

<!-- Footer -->
<footer class="sticky-footer bg-white">
<div class="container my-auto">
    <div class="copyright text-center my-auto">
        <span>Copyright &copy; Your Website 2021</span>
    </div>
</div>
</footer>
<!-- End of Footer -->

</div>

</template>

<script>
import FormComic from '../../components/FormComic.vue';
import Navbar from '../Navbar.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import comicService from "@/services/comic.service";

export default {
    components: {
        Navbar,
        FormComic
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            comic: null,
            content: null,
        };
    },
    methods: {
        async getComic(id) {
            try {
                var comic = await comicService.get(id);
                this.comic = comic;
                
            } catch (error) {
                toast.error(error);
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
        async getContent(id) {
            try {
                var content = await comicService.getContent(id);
                this.content = content.contents;
                console.log(this.content);
            } catch (error) {
                toast.error(error);
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
        async updateComic(data,input) {
            try {
                var formDataComic = new FormData();
                formDataComic.append('name',data.name);
                formDataComic.append('actor',data.actor);
                formDataComic.append('photo',data.photo);
                formDataComic.append('description',data.description);
                formDataComic.append('trending',data.trending);
                formDataComic.append('schedule',data.schedule);
                formDataComic.append('_idGenre',data._idGenre);
                var update = await comicService.update(this.comic._id, formDataComic);
                console.log(update);
                if(update && update.errCode == 0){
                    var formData = new FormData();
                    formData.append('name',data.name);
                    for(var i=0;i<input.length;i++){
                        formData.append('nameContent',input[i].nameContent);
                        formData.append('content',input[i].content);
                    }
                    var contentUpdate = await comicService.updateContent(this.comic._id,formData);
                    if(contentUpdate && contentUpdate.errCode == 0){
                        toast.success(contentUpdate.message);
                        // this.comic = {};
                        // this.$router.push({ name: "comic.list" });
                    }else{
                        toast.error(contentUpdate.message);
                    }
                    
                }else{
                    toast.error(update.message);
                }
                
            } catch (error) {
                toast.error(error);
            }
        },
        
        // async deleteContact() {
        //     if (confirm("Bạn muốn xóa Liên hệ này?")) {
        //         try {
        //             await comicService.delete(this.comic._id);
        //             this.$router.push({ name: "contactbook" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getComic(this.id);
        this.getContent(this.id);
    },
};
</script>
