import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import(/* webpackChunkName: "todos" */ '../views/Todos.vue')
  },
  {
    path: '/todos/create',
    name: 'todos-create',
    component: () => import(/* webpackChunkName: "todos-create" */ '../views/TodoCreate.vue')
  },
  {
    path: '/todos/:id/update',
    name: 'todos-update',
    component: () => import(/* webpackChunkName: "todos-update" */ '../views/TodoUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
