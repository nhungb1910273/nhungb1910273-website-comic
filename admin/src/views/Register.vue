<template>
<body class="bg-gradient-primary">
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <FormRegister 
                                :user="user"
                                @submit:user="Register"
                            />
                            <hr>
                            
                            <div class="text-center">
                                <router-link class="small" to="/login">Already have an account? Login!</router-link>
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
import FormRegister from '../components/FormRegister.vue';
import UserService from '@/services/user.service';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default{
    components:{
    FormRegister
    },
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async Register(data) {
            try {
                console.log("DATA",data);
                var register = await UserService.register(data);
                
                if(register && register.errCode == 0){
                    toast.success(register.message);
                    this.user = {};
                    this.$router.push({name:"login"});
                }else{
                    toast.error(register.message);
                }
            } catch (error) {
                toast.error(error);
            }
        },
        async Login(data) {
            try {
                var login = await UserService.login(data);
                console.log(login);
                if(login.errCode == 0){
                    localStorage.setItem('user', JSON.stringify(login.user));
                    toast.success(login.message);
                    this.user = {};
                    this.$router.go(0);
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