import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SimpleForm from "@/views/SimpleForm";
import LoginForm from "@/views/LoginForm";
import ComponentsForm from "@/views/ComponentsForm";

const routes = [
  {
    path: "/",
    name: "Form",
    component: SimpleForm,
  },
  {
    path: "/complexForm",
    name: "ComplexForm",
    component: ComponentsForm,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
