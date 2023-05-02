<template>
    <div class="card mb-3">
        <h4 class="card-header py-3">My profile</h4>
        <div class="card-body">
            <form @submit="submitChange" class="row">
                <div class="col-12 mb-3">
                        <label class="form-label" for="account-fn">Username</label>
                        <input class="form-control" type="text" id="account-fn" v-model="user.name" required disabled>
                </div>
                
                <div class="col-12 mb-3">
                        <label class="form-label" for="account-email">E-mail Address</label>
                        <input class="form-control" name="email" type="email" id="account-email" v-model="user.email" :disabled="isUpdate" required @blur="validateEmail">
                        <span class="text-danger" v-if="msg.email">{{msg.email}}</span>
                </div>
                
                <div class="col-12">
                    <hr class="mt-2 mb-3">
                    <div v-if="isUpdate" class="text-end">
                        <button @click="ChangeEmail" class="btn" type="button" style="color:#ffffff; background-color: #e74c3c;">Update</button>
                    </div>
                    <div v-else class="text-end">
                        <button type="submit" class="btn" style="color:#ffffff; background-color: #e74c3c;">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import userService from '@/services/user.service';
import FormProfile from '../../components/FormProfile.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default{
    components:{
    FormProfile
},
    data(){
        return{
            isUpdate: true,
            user:{},
            msg:[]
        }
    },
    methods:{
        validateEmail() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
                this.msg['email'] = '';
            } else {
                
                this.msg['email'] = 'Please enter a valid email address';
            }
        },
        async submitChange(event){
            event.preventDefault();
            console.log(this.msg.length);
            if(this.msg.length == 0){
                var data = {
                email: this.user.email,
                }
                var update= await userService.update(this.user._id,data);
                console.log(data);
                if(update && update.errCode==0){
                    toast.success(update.message);
                    localStorage.setItem('user', JSON.stringify(update.user));
                    this.getUser();
                    this.$router.go(0);
                }else{
                    toast.error(update.message);
                }
            }

        },
        async ChangeEmail(){
            this.isUpdate= !this.isUpdate;
            
        },
    //    async UpdateEmail(data){
    //             var update= await userService.update(this.user._id,data);
    //             if(update && update.errCode==0){
    //                 toast.success(update.message);
    //                 this.isUpdate= false;
    //             }else{
    //                 toast.error(update.message);
    //             }

    //     },
        async getUser(){
            const userData = JSON.parse(localStorage.getItem('user'));
            if(userData){
                this.user = userData;
            }
        }

    },
    mounted(){
        this.getUser();
    }
}
</script>