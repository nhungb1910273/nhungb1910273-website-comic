<template>
    <main class="container">
        <!-- lich ra truyen -->
        <div class="mt-4">
            <div class="title">
                <h1 class="topic">Schedule</h1>
                <a href="lichtruyen.php">
                    <span class="btn_all">See All</span>
                </a>
            </div>
            <div class="btn-group">
                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Schedule
                </button>
                <ul class="dropdown-menu">
                  <li class="list dropdown-item active_topic" data-filter="all">All</li>
                  <li class="list dropdown-item" data-filter="t2">Monday</li>
                  <li class="list dropdown-item" data-filter="t3">Tuesday</li>
                  <li class="list dropdown-item" data-filter="t4">Wednesday</li>
                  <li class="list dropdown-item" data-filter="t5">Thursday</li>
                  <li class="list dropdown-item" data-filter="t6">Friday</li>
                  <li class="list dropdown-item" data-filter="t7">Saturday</li>
                  <li class="list dropdown-item" data-filter="cn">Sunday</li>
                </ul>
            </div>
            <section class="section">
                <ul class="nav">
                  <li class="nav-item list active_topic" data-filter="all">All</li>
                  <li class="nav-item list" data-filter="t2">Monday</li>
                  <li class="nav-item list" data-filter="t3">Tuesday</li>
                  <li class="nav-item list" data-filter="t4">Wednesday</li>
                  <li class="nav-item list" data-filter="t5">Thursday</li>
                  <li class="nav-item list" data-filter="t6">Friday</li>
                  <li class="nav-item list" data-filter="t7">Saturday</li>
                  <li class="nav-item list" data-filter="cn">Sunday</li>
                </ul>
            </section>
            <div class="comic">
                <!-- row1 -->
                <div class="t2 item">
                  <a href="haymanganhtrai.php" class="item_info">
                    <img alt="Hãy Mang Anh Trai Tôi Đi " title="Hãy Mang Anh Trai Tôi Đi " src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/anhtoi_thumb_640x960-a3d8ec5effc3-1636098262183-qYi3meqj.jpg?v=0&amp;maxW=260&amp;format=jpg">
                  </a>
                  <p class="name_item">Hãy Mang Anh Trai Tôi Đi</p>
                  <p class="name_topic">Hài Hước</p>
                </div>
                <div class="t3 item">
                  <a href="tiensihoanghau.php" class="item_info">
                    <img alt="Tiến Sĩ Hoàng Hậu" title="Tiến Sĩ Hoàng Hậu" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_poster-3170a5b8df52-1626849396278-yKxEmjwq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                  </a>
                    <p class="name_item">Tiến Sĩ Hoàng Hậu</p>
                    <p class="name_topic">Lãng Mạn/Tình Cảm</p>
                </div>
                <div class="t4 item">
                  <a href="cuonbangthoigian.php" class="item_info">
                    <img alt="Cuộn Băng Thời Gian" title="Cuộn Băng Thời Gian" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cbtg_thumb_640x960-74575dd50f47-1593759782471-QUSToAAY.jpg?v=0&amp;maxW=260&amp;format=jpg">
                  </a>
                  <p class="name_item">Cuộn Băng Thời Gian</p>
                    <p class="name_topic">Đời Thường</p>
                </div>
                <div class="t5 item">
                  <a href="tuyetdinh.php" class="item_info">
                    <img alt="Tuyệt Đỉnh" title="Tuyệt Đỉnh" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tuyetdinh_thumb_640x960-729813bd9c90-1629440877452-7BhOAsWq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                  </a>
                  <p class="name_item">Tuyệt Đỉnh</p>
                    <p class="name_topic">Hành Động</p>
                </div>
                <div class="t6 item">
                  <a href="lullabye.php" class="item_info">
                    <img alt="Lullabye - Giai Điệu Cuối" title="Lullabye - Giai Điệu Cuối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/lullabye_thumb_640x960-de5d6ecbc6af-1631264408902-2vEnRSdp.jpeg?v=0&amp;maxW=260&amp;format=jpg">
                  </a>
                  <p class="name_item">Lullabye - Giai Điệu Cuối</p>
                    <p class="name_topic">Kinh Dị</p>
                </div>
                <div class="t7 item">
                    <a href="buoclengacvang.php" class="item_info">
                      <img alt="Bước Lên Gác Vàng" title="Bước Lên Gác Vàng" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/buoclengacvang_thumb_640x960-71f352bb049b-1596018657183-nh6roleG.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    </a>
                    <p class="name_item">Bước Lên Gác Vàng</p>
                    <p class="name_topic">Hài Hước</p>
                </div>
                <div class="cn item">
                    <a href="traotroncontim.php" class="item_info">
                    <img alt="Trao Trọn Con Tim" title="Trao Trọn Con Tim" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/traotroncontim_thumb_640x960-b778594afbbe-1600749397266-OU0DhuOr.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    </a>
                    <p class="name_item">Trao Trọn Con Tim</p>
                    <p class="name_topic">Lãng Mạn/Tình Cảm</p>
                </div>
                
            </div>
        </div>
        
        <!-- truyen moi -->
        <div class="mt-4">
            <div class="title">
                <h1 class="topic">New & Trending</h1>
                <a href="truyenmoi.php">
                    <span class="btn_all">See all</span>
                </a>
            </div>
            <div>
                <VueCarouselNew />
            </div>
        </div>
        
        <!-- the loai -->
        <div class="mt-4 ">
            <div class="title">
                <h1 class="topic">Genres</h1>
                <a href="theloai.php">
                    <span class="btn_all">See all</span>
                </a>
            </div>
            <div v-for="(genre,index) in genres" :key="genre._id">
                <div v-if="index < 2" class="row justify-content-between mt-4">
                  <div class="col-3 m-2 topic_items">
                      <h5>{{ genre.name }}</h5>
                      <p>{{ genre.description }}</p>
                  </div>
                  <a href="theloai.php" class="topic_small">{{ genre.name }}</a>
                  <ComicGenre :id="genre._id" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>


        $(document).ready(function(){
          $('.list').click(function(){
            const value = $(this).attr('data-filter');
            if (value == 'all'){
              $('.item').show('1000');
            }
            else{
              $('.item').not('.'+value).hide('1000');
              $('.item').filter('.'+value).show('1000');
    
            }
          })
          // add active class on selected item
          $('.list').click(function(){
            $(this).addClass('active_topic').siblings().removeClass('active_topic');
          })
        })

import comicService from "@/services/comic.service";
import genreService from "@/services/genre.service";
import ComicGenre from './ComicGenre.vue';
import VueCarouselNew from "../../components/VueCarouselNew.vue";
    export default {
        components:{
    ComicGenre,
    VueCarouselNew
},
        data(){
            return{
                genres:[],
                comics:[],
            }
        },
        methods:{
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    console.log(genres)
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            },
            async retrieveComicsHome() {
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
        mounted() {
            this.retrieveGenres();
            this.retrieveComicsHome();
        },
        
    }
</script>