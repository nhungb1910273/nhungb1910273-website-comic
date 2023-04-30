<script>
import { toast } from 'vue3-toastify';
import ListGenre from '../../components/ListGenre.vue';
import Navbar from '../Navbar.vue';
import genreService from "@/services/genre.service";

export default {
    components:{
        Navbar,
        ListGenre
    },
    props: {
            id: { type: String, required: true },
    },
    data() {
            return {
                genres: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
            // Chuyển các đối tượng genre thành chuỗi để tiện cho tìm kiếm.
            genreStrings() {
                return this.genres.map((genre) => {
                    const { name, description } = genre;
                    return [name, description].join("");
                });
            },
            // Trả về các genre có chứa thông tin cần tìm kiếm.
            filteredGenres() {
                if (!this.searchText) return this.genres;
                return this.genres.filter((_genre, index) =>
                    this.genreStrings[index].includes(this.searchText)
                );
            },
            activeGenre() {
                if (this.activeIndex < 0) return null;
                    return this.filteredGenres[this.activeIndex];
                },
            filteredGenresCount() {
                return this.filteredGenres.length;
            },
        },
        methods: {
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    } 
                    
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveGenres();
                this.activeIndex = -1;
            },

            // async removeAllGenres() {
            //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
            //         try {
            //             await genreService.deleteAll();
            //             this.refreshList();
            //         } catch (error) {
            //             console.log(error);
            //         }
            //     }
            // },
            async deleteGenre(id) {
                if (confirm("Are you sure remove ?")) {
                    try {
                        // console.log(id)
                        var remove = await genreService.delete(id);
                        if(remove && remove.errCode==0){
                            toast.success(remove.message);
                            this.refreshList();
                        }else{
                            toast.error(remove.message);
                        }
                    } catch (error) {
                        toast.error(error);
                    }
                }
            },
            goToAddGenre() {
                this.$router.push({ name: "genre.add" });
            },
        },
        mounted() {
            this.refreshList();
        },
}
</script>

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

<!-- DataTales Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">List Genres</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <ListGenre
                v-if="filteredGenresCount > 0"
                :genres="filteredGenres"
                v-model:activeIndex="activeIndex"
                @delete="deleteGenre"
            />
            <p v-else>Không có liên hệ nào.</p>
        </div>
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