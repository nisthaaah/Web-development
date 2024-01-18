import HomePage from "./HomePage.vue";
import LoginPage from "./LoginPage.vue";
import SignUp from "./SignUp.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: "/log-in"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
