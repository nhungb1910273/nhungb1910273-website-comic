<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

<!-- Main Content -->
<div id="content">

<Navbar />

<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">Genres</h1>

<!-- Add -->
<div class="card shadow mb-4">
<div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Edit Genre</h6>
</div>
<div class="card-body">
    <FormGenre
        :genre="genre"
        @submit:genre="updateGenre"
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
import FormGenre from '../../components/FormGenre.vue';
import Navbar from '../Navbar.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import genreService from "@/services/genre.service";

export default {
    components: {
        Navbar,
        FormGenre
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            genre: null,
        };
    },
    methods: {
        async getGenre(id) {
            try {
                var genre = await genreService.get(id);
                this.genre = genre;
                
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
        async updateGenre(data) {
            console.log(data);
            try {
                var update = await genreService.update(this.genre._id, data);
                if(update && update.errCode==0){
                    toast.success(update.message);
                    this.$router.push({ name: "genre.list" });
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
        //             await genreService.delete(this.genre._id);
        //             this.$router.push({ name: "contactbook" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getGenre(this.id);
    },
};
</script>
