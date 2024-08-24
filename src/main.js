import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
// Import your components
import Home from './views/Home.vue';
import About from './views/About.vue';
import Products from './components/Products.vue';
import Contact from './views/Contact.vue';
import ProductDetail from './components/ProductDetail.vue'
// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
//   { path: '/products', component: Products },
  { path: '/contact', component: Contact },
  { path: '/products', component: Products },

  { path: '/product/:id', component: ProductDetail, name: 'ProductDetail' },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
