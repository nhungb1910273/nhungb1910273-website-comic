<template>
    <main class="container">
       <div class="mt-4">
            <h1 class="topic truyenmoi">Trending</h1>
           <div>
               <div class="row">
                   <a href="bongmotngay.php" class="img_new col-3"> 
                       <img alt="Bỗng Một Ngày Trở Thành Con Gái Nhà Vua" title="Bỗng Một Ngày Trở Thành Con Gái Nhà Vua" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cgnv_thumb_640x960-efc26c426e5a-1628236333906-FJaLHrt0.jpg?v=0&amp;maxW=420&amp;format=jpg">
                       <span class="title-new" title="Bỗng Một Ngày Trở Thành Con Gái Nhà Vua">Bỗng Một Ngày Trở Thành Con Gái Nhà Vua</span>
                       <p>Hài Hước</p>
                   </a>
                   <a href="anhtraitoilakhunglong.php" class="img_new col-3">
                       <img alt="Anh Trai Tôi Là Khủng Long" title="Anh Trai Tôi Là Khủng Long" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/ssss-ab295d70f870-1589186041046-Pd1lE9x5.jpg?v=0&amp;maxW=420&amp;format=jpg">
                       <span class="title-new" title="Anh Trai Tôi Là Khủng Long">Anh Trai Tôi Là Khủng Long</span>
                       <p>Đời Thường</p>
                   </a>
                   <a href="nhatkysongsot.php" class="img_new col-3"> 
                       <img alt="Nhật Kí Sống Sót Của Nữ Phụ Phản Diện" title="Nhật Kí Sống Sót Của Nữ Phụ Phản Diện" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/nuphu_thumb_640x960-b49f611cd199-1634696296441-g3GPK9dp.jpg?v=0&amp;maxW=420&amp;format=jpg"> 
                       <span class="title-new" title="Nhật Kí Sống Sót Của Nữ Phụ Phản Diện">Nhật Kí Sống Sót Của Nữ Phụ Phản Diện</span>
                       <p>Lạng Mạn/Tình Cảm</p>
                   </a>
                   <a href="caulacboanti.php" class="img_new col-3"> 
                       <img alt="Câu Lạc Bộ Anti Nhân Vật Chính" title="Câu Lạc Bộ Anti Nhân Vật Chính" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_thumbnail-1514ac86d743-1628478322840-Il7X9bC4.jpg?v=0&amp;maxW=420&amp;format=jpg">     
                       <span class="title-new" title="Câu Lạc Bộ Anti Nhân Vật Chính">Câu Lạc Bộ Anti Nhân Vật Chính</span>
                       <p>Hài Hước</p>
                   </a>      
               </div>  

                     
           </div>
       </div>
      
       
   </main>
</template>

<script>
    
    import comicService from '@/services/comic.service';
    import genreService from '@/services/genre.service';
    export default {
        data(){
            return{
                genreName:[],
                comics:[],
                
            }
        },
        
        methods:{
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            },
            async retrieveComics(){
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
            this.retrieveComics();
        },
    }
    </script>