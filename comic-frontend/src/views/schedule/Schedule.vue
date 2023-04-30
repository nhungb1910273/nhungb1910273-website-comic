<script>
$(document).ready(function(){
    var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:6,
            loop:true,
            margin:15,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })
});
</script>
<template>
    <main class="container">    
        <div class="container">
            
            <div class="mb-3">
                <h5 class="h3">Monday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Tiến Sĩ Hoàng Hậu" title="Tiến Sĩ Hoàng Hậu" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_poster-3170a5b8df52-1626849396278-yKxEmjwq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                        <p>Tiến Sĩ Hoàng Hậu</p>    
                        <p class="name_topic" style="margin-top: -15px;">Lãng Mạn/Tình Cảm</p> 
                    </div>
                    <div class="item">
                        <img alt="Hãy Mang Anh Trai Tôi Đi " title="Hãy Mang Anh Trai Tôi Đi " src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/anhtoi_thumb_640x960-a3d8ec5effc3-1636098262183-qYi3meqj.jpg?v=0&amp;maxW=260&amp;format=jpg">
                        <p>Hãy Mang Anh Trai Tôi Đi</p>
                        <p class="name_topic" style="margin-top: -15px;">Hài Hước</p> 
                    </div>
                    <div class="item">
                        <img alt="Lullabye - Giai Điệu Cuối" title="Lullabye - Giai Điệu Cuối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/lullabye_thumb_640x960-de5d6ecbc6af-1631264408902-2vEnRSdp.jpeg?v=0&amp;maxW=260&amp;format=jpg">
                        <p>Lullabye - Giai Điệu Cuối</p>
                        <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div><div class="item">
                        <img alt="Kiều Nữ Độc Phi " title="Kiều Nữ Độc Phi " src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/kieunudocphi__thumb_640x960-c8939e2909a8-1597291023434-6GlL3keP.jpg?v=0&amp;maxW=420&amp;format=jpg">
                        <p>Kiều Nữ Độc Phi</p>
                        <p class="name_topic" style="margin-top: -15px;">Lãng Mạn/Cổ Trang</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Tuesday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Sếp Tôi Là Chó" title="Sếp Tôi Là Chó" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/copy_of_sepcho_thumb_640x960-89b4259b013e-1643171873622-gGqayTHg.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Sếp Tôi Là Chó</p>
                    <p class="name_topic" style="margin-top: -15px;" >Hài Hước</p>
                    </div>
                    <div class="item">
                        <img alt="Cuộn Băng Thời Gian" title="Cuộn Băng Thời Gian" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cbtg_thumb_640x960-74575dd50f47-1593759782471-QUSToAAY.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Cuộn Băng Thời Gian</p>
                    <p class="name_topic" style="margin-top: -15px;">Đời Thường</p>
                    </div>
                    <div class="item">
                        <img alt="Trao Trọn Con Tim" title="Trao Trọn Con Tim" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/traotroncontim_thumb_640x960-b778594afbbe-1600749397266-OU0DhuOr.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Trao Trọn Con Tim</p>
                    <p class="name_topic" style="margin-top: -15px;">Lãng Mạn/Tình Cảm</p>
                    </div><div class="item">
                        <img alt="Bước Lên Gác Vàng" title="Bước Lên Gác Vàng" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/buoclengacvang_thumb_640x960-71f352bb049b-1596018657183-nh6roleG.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Bước Lên Gác Vàng</p>
                    <p class="name_topic" style="margin-top: -15px;">Hài Hước</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Wednesday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Tuyệt Đỉnh" title="Tuyệt Đỉnh" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tuyetdinh_thumb_640x960-729813bd9c90-1629440877452-7BhOAsWq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Tuyệt Đỉnh</p>
                    <p class="name_topic" style="margin-top: -15px;">Hành Động</p>
                    </div>
                    <div class="item">
                        <img alt="Lullabye - Giai Điệu Cuối" title="Lullabye - Giai Điệu Cuối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/lullabye_thumb_640x960-de5d6ecbc6af-1631264408902-2vEnRSdp.jpeg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Lullabye - Giai Điệu Cuối</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                    <div class="item">
                        <img alt="Bỗng Một Ngày Trở Thành Con Gái Nhà Vua" title="Bỗng Một Ngày Trở Thành Con Gái Nhà Vua" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cgnv_thumb_640x960-efc26c426e5a-1628236333906-FJaLHrt0.jpg?v=0&maxW=420&format=jpg">
                    <p>Bỗng Một Ngày Trở Thành Con Gái Nhà Vua</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                    <div class="item">
                        <img alt="Kịch Rối" title="Kịch Rối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/kichroi_thumb_640x960-78aabfabc24d-1629973765010-0UE3o33x.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Kịch Rối</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Thursday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Bước Lên Gác Vàng" title="Bước Lên Gác Vàng" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/buoclengacvang_thumb_640x960-71f352bb049b-1596018657183-nh6roleG.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Bước Lên Gác Vàng</p>
                    <p class="name_topic" style="margin-top: -15px;">Hài Hước</p>
                    </div>
                    <div class="item">
                        <img alt="Tuyệt Đỉnh" title="Tuyệt Đỉnh" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tuyetdinh_thumb_640x960-729813bd9c90-1629440877452-7BhOAsWq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Tuyệt Đỉnh</p>
                    <p class="name_topic" style="margin-top: -15px;">Hành động</p>
                    </div>
                    <div class="item">
                        <img alt="Cleaner K - Kẻ Dọn Dẹp K" title="Cleaner K - Kẻ Dọn Dẹp K" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cleanerk_thumb_640x960-280f7f3b048a-1617782888461-pLC01CpF.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Cleaner K - Kẻ Dọn Dẹp K</p>
                    <p class="name_topic" style="margin-top: -15px;">Hành Động</p>
                    </div><div class="item">
                        <img alt="Midnight CITY" title="Midnight CITY" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/mn_thumb_640x960-aeab84869637-1635158417412-QQWaI7pK.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Midnight CITY</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Friday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Ngọn Gió Đời Tôi" title="Ngọn Gió Đời Tôi" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960-807594ff1a53-1590052730072-bWRfojp4.jpg?v=0&amp;maxW=260&amp;format=jpg" >
                    <p>Ngọn Gió Đời Tôi</p>
                    <p class="name_topic" style="margin-top: -15px;">Đời Thường</p>
                    </div>
                    <div class="item">
                        <img alt="Cộng Sự Lúc Nửa Đêm" title="Cộng Sự Lúc Nửa Đêm" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/congsu_thumb_640x960-0f6fcfae7579-1612511565203-TuST7MwE.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Cộng Sự Lúc Nửa Đêm</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                    <div class="item">
                        <img alt="Kiếp Văn Phòng" title="Kiếp Văn Phòng" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/new_verticle_thumb_640x960-15f3b155b380-1640256073132-KwEwwZwL.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Kiếp Văn Phòng</p>
                    <p class="name_topic" style="margin-top: -15px;">Hài Hước/Series</p>
                    </div>
                    <div class="item">
                        <img alt="Kiều Nữ Độc Phi " title="Kiều Nữ Độc Phi " src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/kieunudocphi__thumb_640x960-c8939e2909a8-1597291023434-6GlL3keP.jpg?v=0&amp;maxW=420&amp;format=jpg">
                    <p>Kiều Nữ Độc Phi</p>
                    <p class="name_topic" style="margin-top: -15px;">Lãng mạn/Cổ Trang</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Saturday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Shark - Cá Mập" title="Shark - Cá Mập" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/shark_thumb_640x960-0a4f74557138-1616473865665-u7RV4a8u.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Shark - Cá Mập</p>
                    <p class="name_topic" style="margin-top: -15px;">Hành Động</p>
                    </div>
                    <div class="item">
                        <img alt="Ngọn Gió Đời Tôi" title="Ngọn Gió Đời Tôi" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/640x960-807594ff1a53-1590052730072-bWRfojp4.jpg?v=0&amp;maxW=260&amp;format=jpg" >
                    <p>Ngọn Gió Đời Tôi</p>
                    <p class="name_topic" style="margin-top: -15px;">Đời Thường</p>
                    </div>
                    <div class="item">
                        <img alt="Nàng Dâu Của Thiên Giới" title="Nàng Dâu Của Thiên Giới" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/nangdau_thumb_640x960__1_-774ec797c7ff-1624526315861-F5rbzQ1T.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Nàng Dâu Của Thiên Giới</p>
                    <p class="name_topic" style="margin-top: -15px;">Lãng Mạn/Tình Cảm</p>
                    </div>
                    <div class="item">
                        <img  class="lich" alt="Những mùa " title="Những mùa " src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cover_do_c-c3451671f173-1637833034738-Rere9VT9.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Những mùa</p>
                    <p class="name_topic" style="margin-top: -15px;">Đời Thường</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <h5 class="h3">Sunday</h5>
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img alt="Lullabye - Giai Điệu Cuối" title="Lullabye - Giai Điệu Cuối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/lullabye_thumb_640x960-de5d6ecbc6af-1631264408902-2vEnRSdp.jpeg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Lullabye - Giai Điệu Cuối</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                    <div class="item">
                        <img alt="Tiến Sĩ Hoàng Hậu" title="Tiến Sĩ Hoàng Hậu" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_poster-3170a5b8df52-1626849396278-yKxEmjwq.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Tiến Sĩ Hoàng Hậu</p>
                    <p class="name_topic" style="margin-top: -15px;">Lãng Mạn/Tình Cảm</p>
                    </div>
                    <div class="item">
                        <img alt="Kịch Rối" title="Kịch Rối" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/kichroi_thumb_640x960-78aabfabc24d-1629973765010-0UE3o33x.jpg?v=0&amp;maxW=260&amp;format=jpg">
                    <p>Kịch Rối</p>
                    <p class="name_topic" style="margin-top: -15px;">Kinh Dị</p>
                    </div>
                    <div class="item">
                        <img alt="Cuộn Băng Thời Gian" title="Cuộn Băng Thời Gian" src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/cbtg_thumb_640x960-74575dd50f47-1593759782471-QUSToAAY.jpg?v=0&amp;maxW=260&amp;format=jpg">
                        <p>Cuộn Băng Thời Gian</p>
                        <p class="name_topic" style="margin-top: -15px;">Lãng mạn</p>
                    </div>
                </div>
            </div>                
        </div>
    </main>
</template>