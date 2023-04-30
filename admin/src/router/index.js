import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Dashboard.vue"),
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
