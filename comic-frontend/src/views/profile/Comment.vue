<template>
<div>
    <div v-for="comment in comments" :key="comment._id" >
        <div v-if="comment.username == user.name && comment.isPost==true" class="cart-item d-md-flex justify-content-between">
          <span @click="deleteComment(comment._id)" class="remove-item"><i class="fa fa-times"></i></span>
          
          <div class="px-3 my-3">
              <div class="cart-item-product">
                  <div class="cart-item-product-info">
                      <h4 class="cart-item-product-title">{{ comment.comment }}</h4>
                      <div class="text-lg text-body font-weight-medium pb-1">{{ format_date(comment.createAt) }}</div>
                      <span>Comic: <span class="text-success font-weight-medium">{{ comment.nameComic }}</span></span>
                  </div>
              </div>
          </div>
      </div>
      <div v-else class="text-white">
        No comments
      </div>
    </div>
    
    
</div>
</template>
<script>
import moment from "moment";
import commentService from "@/services/comment.service";
export default{
  data(){
    return{
      comments:{},
      user:{}
    }
  },
 
  methods:{
    async retrieveComments() {
        try {
            var data = await commentService.getAll();
            if(data && data.errCode == 0){
                this.comments = data.comment;
            } 
            console.log(this.comments);
        } catch (error) {
            console.log(error);
        }
    },
    async getUser(){
      const userData = JSON.parse(localStorage.getItem('user'));
      if(userData){
          this.user = userData;
      }
    },
    format_date(value){
         if (value) {
           return moment(String(value)).format('YYYY-MM-DD hh:mm')
          }
      },
      async deleteComment(id) {
            if (confirm("Are you sure remove ?")) {
                try {
                    var remove = await commentService.delete(id);
                    if(remove && remove.errCode==0){
                        toast.success(remove.message);
                        this.retrieveComments();
                    }else{
                        toast.error(remove.message);
                    }
                } catch (error) {
                    toast.error(error);
                }
            }
        },
    
  },
  mounted(){
    this.retrieveComments();
    this.getUser();
  }
}
</script>
<style>
.cart-item {
  position: relative;
  margin-bottom: 30px;
  padding: 0 50px 0 10px;
  background-color: #fff;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.cart-item .cart-item-label {
  display: block;
  margin-bottom: 15px;
  color: #8c8c8c;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}
.cart-item .cart-item-product {
  display: table;
  width: 420px;
  text-decoration: none;
}
.cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
  display: table-cell;
  vertical-align: top;
}
.cart-item .cart-item-product-thumb {
  width: 110px;
}
.cart-item .cart-item-product-thumb > img {
  display: block;
  width: 100%;
}
.cart-item .cart-item-product-info {
  padding-top: 5px;
  padding-left: 15px;
}
.cart-item .cart-item-product-info > span {
  display: block;
  margin-bottom: 2px;
  color: #404040;
  font-size: 12px;
}
.cart-item .cart-item-product-title {
  margin-bottom: 8px;
  transition: color, 0.3s;
  color: #343b43;
  font-size: 16px;
  font-weight: bold;
}
.cart-item .cart-item-product:hover .cart-item-product-title {
  color: #ac32e4;
}
.cart-item .count-input {
  display: inline-block;
  width: 85px;
}
.cart-item .remove-item {
  right: -10px !important;
}
@media (max-width: 991px) {
  .cart-item {
    padding-right: 30px;
  }
  .cart-item .cart-item-product {
    width: auto;
  }
}
@media (max-width: 768px) {
  .cart-item {
    padding-right: 10px;
    padding-bottom: 15px;
  }
  .cart-item .cart-item-product {
    display: block;
    width: 100%;
    text-align: center;
  }
  .cart-item .cart-item-product-thumb, .cart-item .cart-item-product-info {
    display: block;
  }
  .cart-item .cart-item-product-thumb {
    margin: 0 auto 10px;
  }
  .cart-item .cart-item-product-info {
    padding-left: 0;
  }
  .cart-item .cart-item-label {
    margin-bottom: 8px;
  }
}
.comparison-table {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.comparison-table table {
  min-width: 750px;
  table-layout: fixed;
}
.comparison-table .comparison-item {
  position: relative;
  margin-bottom: 10px;
  padding: 13px 12px 18px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, .09);
}
.comparison-table .comparison-item .comparison-item-thumb {
  display: block;
  width: 80px;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
}
.comparison-table .comparison-item .comparison-item-thumb > img {
  display: block;
  width: 100%;
}
.comparison-table .comparison-item .comparison-item-title {
  display: block;
  margin-bottom: 14px;
  transition: color 0.25s;
  color: #404040;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.comparison-table .comparison-item .comparison-item-title:hover {
  color: #ac32e4;
}
.remove-item {
  display: block;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 22px;
  height: 22px;
  padding-left: 1px;
  border-radius: 50%;
  background-color: #ff5252;
  color: #fff;
  line-height: 23px;
  text-align: center;
  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, .5);
  cursor: pointer;
}
.card-wrapper {
  margin: 30px -15px;
}
@media (max-width: 576px) {
  .card-wrapper .jp-card-container {
    width: 260px !important;
  }
  .card-wrapper .jp-card {
    min-width: 250px !important;
  }
}
</style>