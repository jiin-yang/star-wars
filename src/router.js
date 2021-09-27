import Vue from "vue";
import VueRouter from "vue-router";

import PeopleHome from "@/components/people/PeopleHome";
import PlanetHome from "@/components/planet/PlanetHome";
import StarshipHome from "@/components/starship/StarshipHome";

Vue.use(VueRouter)

const routes = [
    { path: "/", component: PeopleHome},
    { path: "/people", component: PeopleHome},
    { path: "/planet", component: PlanetHome},
    { path: "/starship", component: StarshipHome},
]

export const router = new VueRouter({
    mode: "history",
    routes
});