import Vue from "vue";
import VueRouter from "vue-router";
import Node from "@/views/Node.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/1"
  },
  {
    path: "/:id", // requirement: display navigable history in the base url
    name: "Node",
    component: Node,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
