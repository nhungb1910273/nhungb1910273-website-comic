<script>
import { toast } from 'vue3-toastify';
import Navbar from '../Navbar.vue';
import comicService from "@/services/comic.service";
import ListComic from '../../components/ListComic.vue';

export default {
    components:{
    Navbar,
    ListComic
},
    props: {
            id: { type: String, required: true },
    },
    data() {
            return {
                comics: [],
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
            // Chuyển các đối tượng comic thành chuỗi để tiện cho tìm kiếm.
            comicStrings() {
                return this.comics.map((comic) => {
                    const { name, actor, description, photo, trending } = comic;
                    return [name, actor, description, photo, trending ].join("");
                });
            },
            // Trả về các comic có chứa thông tin cần tìm kiếm.
            filteredComics() {
                if (!this.searchText) return this.comics;
                return this.comics.filter((_comic, index) =>
                    this.comicStrings[index].includes(this.searchText)
                );
            },
            activecomic() {
                if (this.activeIndex < 0) return null;
                    return this.filteredComics[this.activeIndex];
                },
            filteredComicsCount() {
                return this.filteredComics.length;
            },
        },
        methods: {
            async retrieveComics() {
                try {
                    var comics = await comicService.getAll();
                    if(comics && comics.errCode == 0){
                        this.comics = comics.comics;
                    } 
                    
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveComics();
                this.activeIndex = -1;
            },

            // async removeAllcomics() {
            //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
            //         try {
            //             await comicService.deleteAll();
            //             this.refreshList();
            //         } catch (error) {
            //             console.log(error);
            //         }
            //     }
            // },
            async deleteComic(id) {
                if (confirm("Are you sure remove ?")) {
                    try {
                        // console.log(id)
                        var remove = await comicService.delete(id);
                        console.log(remove);
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
            goToAddComic() {
                this.$router.push({ name: "comic.add" });
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
<h1 class="h3 mb-2 text-gray-800">Comics</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">List Comics</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <ListComic
                v-if="filteredComicsCount > 0"
                :comics="filteredComics"
                v-model:activeIndex="activeIndex"
                @delete="deleteComic"
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