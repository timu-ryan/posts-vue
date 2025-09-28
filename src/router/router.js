import {createRouter, createWebHistory} from "vue-router";
import Main from '@/pages/Main.vue'
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPageId from "@/pages/PostPageId.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostPageId
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
