<template>
    <main class="container">
  <!-- responsive -->
  <div class="btn-group">
    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Schedule
    </button>
    <ul class="dropdown-menu">
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'monday')}" @click="filterArray('monday')">Monday</li>
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'tuesday')}" @click="filterArray('tuesday')">Tuesday</li>
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'wednesday')}" @click="filterArray('wednesday')">Wednesday</li>
        <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'thursday')}" @click="filterArray('thursday')">Thursday</li>
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'friday')}" @click="filterArray('friday')">Friday</li>
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'saturday')}" @click="filterArray('saturday')">Saturday</li>
      <li class="list dropdown-item" :class=" {'active_topic': (activeId === 'sunday')}" @click="filterArray('sunday')">Sunday</li>
      
    </ul>
  </div>
  <section class="section">
    <ul class="nav">
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'monday')}" @click="filterArray('monday')">Monday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'tuesday')}" @click="filterArray('tuesday')">Tuesday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'wednesday')}" @click="filterArray('wednesday')">Wednesday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'thursday')}" @click="filterArray('thursday')">Thursday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'friday')}" @click="filterArray('friday')">Friday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'saturday')}" @click="filterArray('saturday')">Saturday</li>
      <li class="nav-item list" :class=" {'active_topic': (activeId === 'sunday')}" @click="filterArray('sunday')">Sunday</li>
    </ul>
  </section>
  <div class="comic">
    <!-- row1 -->
      <div class="item" :data-filter="comic.schedule" v-for="(comic,index) in comics" :key="comic._id">
        <router-link :to="{
              name: 'comic.detail',
              params: { id: comic._id },
          }"  class="item_info">
          <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" />
        </router-link>
        <p class="name_item">{{ comic.name }}</p>
        <GenreName :id="comic._idGenre"/>
      </div>
    
  </div>
</main>
</template>

<script>

import comicService from "@/services/comic.service";
import GenreName from "../../components/GenreName.vue";
export default{
  components:{
    GenreName
  },
    data() {
        return {
            comics: [],
            activeId: "",
            // date: new Date()
        };
    },
    methods: {
        async retrieveComicsHome() {
            try {
                var comics = await comicService.getComicBySchedule("monday");
                if (comics && comics.errCode == 0) {
                    this.comics = comics.comics;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        async filterArray(id) {
            try {
                var comics = await comicService.getComicBySchedule(id);
                this.activeId = id;
                if (comics && comics.errCode == 0) {
                    this.comics = comics.comics;
                }
                console.log(this.activeId);
            }
            catch (error) {
                console.log(error);
            }
        },
        getDay() {
            var date = new Date();
            // Lấy số thứ tự của ngày hiện tại
            var current_day = date.getDay();
            var day_name = "";
            // Lấy tên thứ của ngày hiện tại
            switch (current_day) {
                case 0:
                    day_name = "sunday";
                    break;
                case 1:
                    day_name = "monday";
                    break;
                case 2:
                    day_name = "tuesday";
                    break;
                case 3:
                    day_name = "wednesday";
                    break;
                case 4:
                    day_name = "thursday";
                    break;
                case 5:
                    day_name = "friday";
                    break;
                case 6:
                    day_name = "saturday";
            }
            this.activeId = day_name;
        }
    },
    mounted() {
        this.retrieveComicsHome();
        this.getDay();
    },
    components: { GenreName }
}
</script>