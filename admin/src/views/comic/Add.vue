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
        <h6 class="m-0 font-weight-bold text-primary">Add Comics</h6>
    </div>
    <div class="card-body">
        <FormComic
            :comic="comic"
            @submit:comic="addComic"
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
    import comicService from "@/services/comic.service";
    import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

    export default {
        components: {
            Navbar,
            FormComic
        },
        data() {
            return {
                comic: {},
            };
        },
        methods: {
            async addComic(data,input) {
                try {
                    
                    var comic = await comicService.create(data);
                    if(comic && comic.errCode ==0){
                       var formData = new FormData();
                       formData.append('name',data.name);
                       for(var i=0;i<input.length;i++){
                        formData.append('nameContent',input[i].nameContent);
                        formData.append('content',input[i].content);
                       }
                        var content = await comicService.createContent(formData);
                        if(content && content.errCode == 0){
                            toast.success(content.message);
                            // this.comic = {};
                            this.$router.push({ name: "comic.list" });
                        }else{
                            toast.error(content.message);
                        }
                        
                    }else{
                        toast.error(comic.message);
                    }
                } catch (error) {
                    toast.error(error);
                }
            },
            
        },
    };
</script>
