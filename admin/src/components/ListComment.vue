<script>
import { toast } from 'vue3-toastify';
import FormComment from './FormComment.vue';
import commentService from '@/services/comment.service';
export default {
    components:{
        FormComment
    },
    props: {
        comments: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    data(){
        return{
            show: true,

        }
    },
    emits: ["update:activeIndex","delete"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        deleteComment(id) {
            this.$emit("delete", id);
        },
       isShow(){
        this.show = !this.show
        
       },
       async updateComment(data) {
            try {
                var dataStatus = {
                    isPost:data.isPost
                }
                console.log(dataStatus)
                var update = await commentService.update(data._id,dataStatus);
                    
                    toast.success(update.message);
                    this.$router.go(0);
                    
                
            } catch (error) {
                toast.error(error);
            }
        },
    }
};
</script>
<style>
  .invisible {
    visibility: hidden;
  }
</style>

<template>
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th class="text-center">#</th>
                <th>Username</th>
                <th>Comment</th>
                <th class="col-2">Status</th>
                <th class="col-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(comment, index) in comments"
                :key="comment._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >

                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ comment.username }}</td>
                <td>{{ comment.comment }}</td>
                <td>
                    <span :class="{ invisible: !show }">
                        <span v-if="comment.isPost==true" class="text-success">Yes</span>
                        <span v-else class="text-danger">No</span>
                    </span>
                    <span :class="{ invisible: show }">
                        <FormComment :comment="comment" @submit:comment="updateComment"/>
                    </span>
                    

                </td>
                <td>
                    <button class="btn" @click="isShow" >
                        <i v-if="show" class="far fa-edit text-success" style="padding-right: 8px;"></i>
                    </button>
                    <button class="btn" @click="deleteComment(comment._id)">
                        <i class="far fa-trash-alt text-danger"></i>
                    </button>
                    
                </td>
                
            </tr>
            
        </tbody>
    </table>
    
</template>