<template>
    <div class="my-3">
      <h5 class="text-white">View Comment</h5>
      <div class="border px-3 py-2" style="border-radius:5px;" v-for="comment in comments" :key="comment._id">
        <div v-if="comment.isPost==true">
          <div class="text-white">
            <b style="color:#e74c3c;">{{ comment.username }}</b>
            <i class="fa-solid fa-caret-right mx-1"></i>
            {{ format_date(comment.createAt) }}
          </div>
          <div class="text-white ms-1 mt-1">
            {{ comment.comment }}
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import moment from 'moment';
import commentService from "@/services/comment.service";
export default{
  data(){
    return{
      comments:[]
    }
  },
  methods:{
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
    format_date(value){
         if (value) {
           return moment(String(value)).format('YYYY-MM-DD hh:mm')
          }
      },
  },
  mounted(){
    this.retrieveComments();
  }
}
</script>