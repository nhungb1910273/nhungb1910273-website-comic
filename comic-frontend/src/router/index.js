import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/Home.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/profile/Profile.vue"),
        children: [
            {
                path: "/profile",
                name: "profile",
                component: () => import("@/views/profile/ViewProfile.vue"),
                
            },
            {
                path: "/comment",
                name: "comment",
                component: () => import("@/views/profile/Comment.vue"),
            },
        ]
    },
   
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/genre",
        name: "genre",
        component: () => import("@/views/genre/Genre.vue"),
    },
    {
        path: "/comic/detail/:id",
        name: "comic.detail",
        component: () => import("@/views/comic/detailComic.vue"),
        props: true
    },
    {
        path: "/comic/detail/read/:id",
        name: "comic.detail.read",
        component: () => import("@/views/comic/readComic.vue"),
        props: true
    },
    {
        path: "/search",
        name: "comic.search",
        component: () => import("@/views/search/Search.vue"),
        // props: true
    },
    // {
    //     path: "/comic/:id",
    //     name: "genre",
    //     component: () => import("@/views/genre/Genre.vue"),
    // },
    {
        path: "/trending",
        name: "trending",
        component: () => import("@/views/trending/Trending.vue"),
    },
    

    
    // {
    //     path: "/contacts",
    //     name: "contact.add",
    //     component: () => import("@/views/ContactAdd.vue"),
    // }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
