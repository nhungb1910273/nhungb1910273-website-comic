<script>
import { toast } from 'vue3-toastify';
import ListComment from '../../components/ListComment.vue';
import Navbar from '../Navbar.vue';
import commentService from "@/services/comment.service";

export default {
    components:{
        Navbar,
        ListComment
    },
    props: {
            id: { type: String, required: true },
    },
    data() {
            return {
                comments: [],
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
            // Chuyển các đối tượng comment thành chuỗi để tiện cho tìm kiếm.
            commentStrings() {
                
                return this.comments.map((index) => {
                    const { comment, username, nameComic } = index;
                    return [ comment, username, nameComic ].join("");
                });
            },
            // Trả về các comment có chứa thông tin cần tìm kiếm.
            filteredComments() {
                if (!this.searchText) return this.comments;
                return this.comments.filter((_comment, index) =>
                    this.commentStrings[index].includes(this.searchText)
                );
            },
            activeComment() {
                if (this.activeIndex < 0) return null;
                    return this.filteredComments[this.activeIndex];
                },
            filteredCommentsCount() {
                return this.filteredComments.length;
            },
        },
        methods: {
            async retrieveComments() {
                try {
                    var data = await commentService.getAll();
                    console.log(data);
                    if(data && data.errCode == 0){
                        this.comments = data.comment;
                    } 
                    console.log(this.comments);
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveComments();
                this.activeIndex = -1;
            },

            // async removeAllcomments() {
            //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
            //         try {
            //             await commentService.deleteAll();
            //             this.refreshList();
            //         } catch (error) {
            //             console.log(error);
            //         }
            //     }
            // },
            async deleteComment(id) {
                if (confirm("Are you sure remove ?")) {
                    try {
                        var remove = await commentService.delete(id);
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

   <Navbar v-model="searchText"/>

   <!-- Begin Page Content -->
   <div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">Comments</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">List comments</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <span>Amount : {{ filteredComments.length }}</span>
            <ListComment
                v-if="filteredCommentsCount > 0"
                :comments="filteredComments"
                v-model:activeIndex="activeIndex"
                @delete="deleteComment"
            />
            <p v-else>No comments.</p>
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