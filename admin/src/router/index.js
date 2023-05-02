import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue"),
        
    },
    {
        path: "/",
        name: "home",
        component: () => 
        {
            var login=JSON.parse(localStorage.getItem('user'));
            if(login){
                return import("@/views/RootView.vue");
            }else{
                return import("@/views/Login.vue");
            }
        },
        children:[
            {
                path: "/",
                name: "dashboard",
                component: () => import("@/views/dashboard/Dashboard.vue"),
            },
            {
                path: "/comic/list",
                name: "comic.list",
                component: () => import("@/views/comic/List.vue"),
            },
            {
                path: "/comic/add",
                name: "comic.add",
                component: () => import("@/views/comic/Add.vue"),
            },
            {
                path: "/comic/edit/:id",
                name: "comic.edit",
                component: () => import("@/views/comic/Edit.vue"),
                props: true
            },
            {
                path: "/genre/list",
                name: "genre.list",
                component: () => import("@/views/genre/List.vue"),
            },
            {
                path: "/genre/add",
                name: "genre.add",
                component: () => import("@/views/genre/Add.vue"),
            },
            {
                path: "/genre/edit/:id",
                name: "genre.edit",
                component: () => import("@/views/genre/Edit.vue"),
                props: true
            },
            {
                path: "/user/list",
                name: "user.list",
                component: () => import("@/views/user/List.vue"),
            },
            {
                path: "/comment/list",
                name: "comment.list",
                component: () => import("@/views/comment/List.vue"),
            },
        ]
    },
    
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "notfound",
    //     component: () => import("@/views/NotFound.vue"),
    // },
    
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
