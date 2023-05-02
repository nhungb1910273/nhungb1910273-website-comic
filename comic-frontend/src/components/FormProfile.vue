<template>
    
    
</template>

<script>
export default{
    data(){
        return{
            isUpdate: true,
            userLocal:this.user ? this.user : '',
        }
    },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true },
        },
    methods:{
       async ChangeEmail(){
            this.isUpdate= !this.isUpdate;
            if(this.isUpdate){
                console.log(this.userLocal)
                // this.$emit("submit:user", this.userLocal);

                // var update= await userService.update(this.user._id,);
                // if(update && update.errCode==0){
                //     toast.success(update.message);
                //     this.isUpdate= false;
                // }else{
                //     toast.error(update.message);
                // }

            }
        },
    },
    mounted(){
        console.log(this.userLocal)
    }
   
}
</script>