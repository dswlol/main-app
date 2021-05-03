import { createRouter, createWebHistory } from "vue-router";
const Home = { template: '<div>Home</div>' }

const routes = [{
        path: "/",
        name: "head",
        component: () =>
            import ('../componts/index.vue'),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ('../componts/about.vue'),
    },
];
// 导出路由
const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;