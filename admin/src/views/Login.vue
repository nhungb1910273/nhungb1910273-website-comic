<template>

<body class="bg-gradient-primary">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <FormLogin 
                                    :user="user"
                                    @submit:user="Login"
                                    />
                                    <hr>
                                    
                                    <div class="text-center">
                                        <router-link class="small" to="/register">Create an Account!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</template>

<script>
import FormLogin from '../components/FormLogin.vue';
import UserService from '@/services/user.service';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default{
    components:{
    FormLogin
},
data() {
        return {
            user: {},
        };
    },
    methods: {
        
        async Login(data) {
            try {
                var login = await UserService.login(data);
                console.log(login);
                if(login.errCode == 0){
                    localStorage.setItem('user', JSON.stringify(login.user));
                    toast.success(login.message);
                    this.user = {};
                    this.$router.push({name:"home"})
                }else{
                    toast.error(login.message);
                }
            } catch (error) {
                console.log("ERROR",error)
            }
        },
        // getUserName (){
            
        //     const user= JSON.parse(localStorage.getItem('user'));
        //     if(user){
        //         this.username = user.name;
        //     }
        //     console.log(this.username);

        // },
        // logout(){
        //     localStorage.removeItem('user');
        //     this.$router.go(0);
        // }
    },
    // mounted(){
    //     this.getUserName();
    // }
}
</script>