<script>
import ListUserVue from "../../components/ListUser.vue";
import Navbar from "../Navbar.vue";
import userService from "@/services/user.service";

export default {
    components:{
        Navbar,
        ListUserVue
    },
    props: {
            id: { type: String, required: true },
    },
    data() {
            return {
                users: [],
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
            // Chuyển các đối tượng user thành chuỗi để tiện cho tìm kiếm.
            userStrings() {
                return this.users.map((user) => {
                    const { name, email } = user;
                    return [name, email].join("");
                });
            },
            // Trả về các user có chứa thông tin cần tìm kiếm.
            filteredUsers() {
                if (!this.searchText) return this.users;
                return this.users.filter((_user, index) =>
                    this.userStrings[index].includes(this.searchText)
                );
            },
            activeUser() {
                if (this.activeIndex < 0) return null;
                    return this.filteredUsers[this.activeIndex];
                },
            filteredUsersCount() {
                return this.filteredUsers.length;
            },
        },
        methods: {
            async retrieveUsers() {
                try {
                    var users = await userService.getAll();
                    if(users && users.errCode == 0){
                        this.users = users.users;
                    } 
                    
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveUsers();
                this.activeIndex = -1;
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

   <Navbar v-model="searchText" />

   <!-- Begin Page Content -->
   <div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">Users</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">List Users</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <span>Amount : {{ filteredUsers.length }}</span>
            <ListUserVue
                v-if="filteredUsersCount > 0"
                :users="filteredUsers"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>No users</p>
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