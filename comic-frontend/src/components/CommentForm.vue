<template>
    <!-- <div class="mt-3">
        <div class="mb-4">
            <Field type="text" class="form-control" name="comment" placeholder="Add a comment..." 
                :value="comment"
                @keyup.enter="submit"/>
            <ErrorMessage name="comment" class="text-danger mt-1" />
        </div>
    </div> -->
    <form @submit.prevent="submitComment">
      <div class="form-group mt-3">
        <textarea
          v-model="newComment"
          rows="4"
          required
          cols="50"
          class="form-control mb-3"
          placeholder="Add a comment..."
        />
        <button type="submit" class="btn text-light" style="background-color: #e74c3c;">Send</button>
      </div>
    </form>
</template>

<script>
    
    export default {        
        data() {
            
            return {
                // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                // user để liên kết với các input trên form
                newComment: this.comment ? this.comment : '',
                };
        },
        methods: {
            submitComment() {
                this.$emit("submit:comment", this.newComment);
            },
        },
    };
</script>
