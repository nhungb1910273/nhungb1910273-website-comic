<template>
    <hr />
<footer>
    <div class="container">
        <!-- <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> -->
        <div class="row m-3 p-4">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <a href="#" class="logo justify-content-md-center">
                  COMIC
              </a>
              <p>
                  Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù hợp mọi độ tuổi và an toàn cho trẻ em.
              </p>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 link_web ">
              <ul>
                  <h5>Trang</h5>
                  <li>Trang Chủ</li>
                  <li>Lịch ra truyện</li>
                  <li>Thể loại</li>
                  <li>New Tredding</li>
                  <h5>Đánh Giá</h5>
                  <li class="widget">
                      <!-- Đánh giá -->
                      <div class="rating">
                          <input type="radio" name="rate" id="rate-5">
                          <label for="rate-5"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-4">
                          <label for="rate-4"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-3">
                          <label for="rate-3"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-2">
                          <label for="rate-2"><i class="fa-solid fa-star"></i></label>
                          <input type="radio" name="rate" id="rate-1">
                          <label for="rate-1"><i class="fa-solid fa-star"></i></label>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div>
                  <h5>Thông tin liên lạc</h5>
                  <form class="py-1">
                      <div class="mb-3">
                          <label style="color: #fff;" for="exampleFormControlInput1" class="form-label">Họ Tên:</label>
                          <input type="text" class="form-control" style="width: fit-content;" id="exampleFormControlInput1">
                      </div>
                      <div class="mb-3">
                          <label style="color: #fff;" for="exampleFormControlInput2" class="form-label">Email:</label>
                          <input type="email" class="form-control" style="width: fit-content;" id="exampleFormControlInput2" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                          <label style="color: #fff;" for="exampleFormControlTextarea1" class="form-label">Nhận xét:</label>
                          <textarea class="form-control" style="width: fit-content;" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button type="submit" class="btn" style="background-color: #e74c3c; width: fit-content;">Gửi</button>
                  </form>
                  <h5>Liên kết mạng xã hội</h5>
                  <ul class="row p-0">
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-facebook-f" style="font-size: 25px; color: #fff;"></i>
                      </a></li>
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-instagram" style="font-size: 25px; color: #fff;"></i>
                      </a></li>
                      <li class="col-3"><a href="#">
                          <i class="fa-brands fa-twitter" style="font-size: 25px; color: #fff;"></i>
                      </a></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>
</template>
<script>
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $('.header').addClass('fixed');
            }
            else{
                $('.header').removeClass('fixed');
            }
        })
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })


    
    // var mybutton = document.getElementById("myBtn");
    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //     mybutton.style.display = "block";
    //     } else {
    //     mybutton.style.display = "none";
    //     }
    // }
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

   
</script>
