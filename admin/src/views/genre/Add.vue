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
        <h6 class="m-0 font-weight-bold text-primary">Add Genre</h6>
    </div>
    <div class="card-body">
        <FormGenre
            :genre="genre"
            @submit:genre="addGenre"
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
        data() {
            return {
                genre: {},
                message: "",
            };
        },
        methods: {
            async addGenre(data) {
                try {
                    var genre = await genreService.create(data);
                    if(genre && genre.errCode == 0){
                        toast.success(genre.message);
                        this.genre={};
                        this.$router.push({ name: "genre.list" });
                    }else{
                        toast.error(genre.message);
                    }
                } catch (error) {
                    toast.error(error);
                }
            },
        },
    };
</script>
