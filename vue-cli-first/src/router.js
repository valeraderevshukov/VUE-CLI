import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Users from "@/views/Users.vue";

Vue.use(Router);

export default new Router({
    linkActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/users",
            name: "Users",
            component: Users
        }
    ]
});
