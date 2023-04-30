<template>
    <header class="header">
        <div class="container inner_header">
            <div class="left_header">
                <router-link to="/" class="logo">
                    COMIC
                </router-link>
                <nav>
                    <ul class="main_menu">
                        <li>
                            <router-link to="/" class="items_menu">Home</router-link>
                        </li>
                        <li>
                            <router-link to="schedule" class="items_menu">Schedule</router-link>
                        </li>
                        <li>
                            <router-link to="genre" class="items_menu">Genre</router-link>
                        </li>
                        <li>
                            <router-link to="trending" class="items_menu">Trending</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="right_header">
                <!-- search -->
                <div>
                    <form @submit.prevent="search" method="post" class="search_box me-3">
                        <input type="search" name="search" class="search_text" placeholder="Search" required>
                        <button class="search_btn" type="submit" name="ok">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    
                </div>
                <div class="taotk">
                    <button class="account me-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Register
                    </button>
                    <button class="account" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            Login
                    </button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="text-center">
                                    <h5 class="m-0" style="font-weight: 600; color: #555555;">Create New Account</h5>
                                    <p class="m-0 p-0" style="color:#666666">Please register by filling in your personal data</p>
                                </div>
                                <RegisterForm  
                                    :user="user"
                                    @submit:user="Register"
                                />
                                <!-- <p class="text-danger">{{ message }}</p> -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- login -->
                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="text-center">
                                    <h5 class="m-0" style="font-weight: 600; color: #555555;">Login First To Your Account</h5>
                                </div>
                                <LoginForm 
                                    :user="user"
                                    @submit:user="Login" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                          
                <!-- menu -->
                <label for="nav_menu_input" class="nav_menu_icon">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" hidden id="nav_menu_input" class="nav_input">
                <label for="nav_menu_input" class="nev_menu_icon"></label>
                <!-- man xam -->
                <div class="overlay_header"></div>
                <!-- menu -->
                <nav class="nav_menu">
                    <div class="d-flex border-bottom">
                        <div class="logo mt-2 ms-2">
                            COMIC
                        </div>
                        <label for="nav_menu_input" class="nav_menu_close">
                            <i class="fa-solid fa-xmark"></i>
                        </label>
                    </div>
                  
                    <div class="taotk">
                        <button class="dropdown-toggle text-light account" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        <ul class="dropdown-menu account_ul" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Login</a></li>
                            <li><a class="dropdown-item" href="#">Register</a></li>
                        </ul>
                    </div>
                    <ul class="nav_menu_list border border-1">
                        <li><a class="nav_menu_item border-bottom" href="trangchu.php">
                            Trang Chủ
                        </a></li>
                        <li><a class="nav_menu_item border-bottom" href="lichtruyen.php">
                            Lịch Ra Truyện
                        </a></li>
                        <li><a class="nav_menu_item border-bottom" href="theloai.php">
                            Thể Loại
                        </a></li>
                        <li><a class="nav_menu_item" href="truyenmoi.php">
                        New Tredding
                        </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <Banner />
    
</template>

<script>
import Banner from './Banner.vue';
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginForm.vue';
import UserService from '@/services/user.service';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    components:{
        Banner,
        RegisterForm,
        LoginForm
    },
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async Register(data) {
            try {
                var register = await UserService.register(data);
                console.log(register);
                if(register && register.errCode == 0){
                    toast.success(register.errMessage);
                    this.user = {};
                    router.push({ path: '/' })
                }else{
                    toast.error(register.errMessage);
                }
            } catch (error) {
                toast.error(error);
            }
        },
        async Login(data) {
            try {
                console.log(data);
                var login = await UserService.login(data);
                if(login && login.errCode == 0){
                    toast.success(login.errMessage);
                    this.user = {};
                    router.push({ path: '/' })
                }else{
                    toast.error(login.errMessage);
                }
            } catch (error) {
                toast.error(error);
            }
        },
    },
    
}
</script>