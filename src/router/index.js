import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Library',
    component: () => import('../views/Library.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresGuest: true
    },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/admin',
    name: 'AdminProfile',
    component: () => import('../views/AdminProfile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/book-update/:id',
    name: 'EditBook',
    component: () => import('../components/Book/UpdateBook.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router
