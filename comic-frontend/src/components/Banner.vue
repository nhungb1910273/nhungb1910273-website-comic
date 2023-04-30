
<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-bind:class="getClass(index)" v-for="(comic,index) in comics" :key="comic._id">
                <div class="banner" v-bind:style='{ backgroundImage: `url("http://localhost:3000/assets/pdf/${comic.photo}")` }'>
                </div>
                <div class="carousel-caption banner-content">
                    <div class="banner-info">
                        <h1 class="banner-info-title">
                           {{ comic.name }}
                        </h1>
                        <p class="banner-info-overview">
                            {{ comic.description }}
                        </p>
                        <button class="btn">
                            <router-link :to="{
                                    name: 'comic.detail',
                                    params: { id: comic._id },
                                }" 
                                class="banner-button-link">
                                Watch now
                            </router-link>
                        </button>
                    </div>
                    <div class="banner-poster">
                        <img :src="'http://localhost:3000/assets/pdf/'+comic.photo">
                    </div>
                </div>
            </div>
            
            <!-- <div class="carousel-item">
                <div class="banner" style="background-image: url('../../src/assets/img/Girl-Taking-Over-A-Lois-Lane-Story-2023-.jpg');"></div>
                <div class="carousel-caption banner-content">
                    <div class="banner-info">
                        <h1 class="banner-info-title">
                            Câu Lạc Bộ Anti Nhân Vật Chính
                        </h1>
                        <p class="banner-info-overview">
                            Vì lỡ buông lời mạt sát một tiểu thuyết rác mà 4 cô bạn thân bị lôi vào chính cuốn truyện đó. Nhiệm vụ của họ là phải khiến nam nữ chính đến với nhau mà không dựa vào những tình huống nhảm nhí mà chính họ căm ghét. Vì mục tiêu quay lại thế giới cũ, 4 cô anti đành hạ IQ của mình xuống bằng IQ của nhân vật chính, nhưng có hạ bao nhiêu cũng không đủ…
                        </p>
                        <button class="btn">
                            <a href="caulacboanti.php" class="banner-button-link">Xem Ngay</a>
                        </button>
                    </div>
                    <div class="banner-poster">
                        <img alt="Câu Lạc Bộ Anti Nhân Vật Chính" title="Câu Lạc Bộ Anti Nhân Vật Chính" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_thumbnail-1514ac86d743-1628478322840-Il7X9bC4.jpg?v=0&amp;maxW=420&amp;format=jpg">
                    </div>
                </div>
            </div>
             -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  </div>
</template>

<script>

import comicService from '../services/comic.service';
export default {
    data(){
        return{
            comics:[],
            // carousel-item
        }

    },
    methods:{
        getClass(index){
        return {
                'carousel-item active': index == 0,  
                'carousel-item': index != 0
            }
        },
            
        async retrieveComics() {
            try {
                var comics = await comicService.getAll();
                if(comics && comics.errCode == 0){
                    this.comics = comics.comics;

                } 

                
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted(){
        this.retrieveComics();
    }
}
</script>
