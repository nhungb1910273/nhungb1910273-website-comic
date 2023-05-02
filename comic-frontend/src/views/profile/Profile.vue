<template>

<div class="container">
    <div class="main-body">
        <h3 class="text-center text-white py-2">My Account</h3>
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <div class="mt-3">
                      <h4>{{ user.name }}</h4>
                      <p class="text-muted font-size-sm">{{ user.email }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <router-link to="/profile">
                    <li class="list-group-item py-3">
                    <i class="fa-solid fa-user me-3"></i>
                    <span class="">My Profile</span>
                  </li>
                  </router-link>
                  <router-link to="/comment">
                    <li class="list-group-item py-3">
                        <i class="fa-solid fa-comments me-3"></i>
                        <span class="">My comment</span>
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <router-view />
            </div>
          </div>

        </div>
    </div>
</template>
<script>
export default{

    data(){
        return{
            user:{},
        }
    },
    methods:{
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
<style>
/* body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
} */
.main-body {
    padding: 15px;
}
.main-body a.router-link-active.router-link-exact-active li.list-group-item.py-3{
    color: #e74c3c!important;
    border-left: 3px solid;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>