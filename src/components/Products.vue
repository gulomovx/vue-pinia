<template>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        <div v-for="product in products" :key="product.id" class="product-card mx-auto border rounded-lg p-4">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
            <div class="group relative overflow-hidden">
              <img class="w-full h-64 object-cover rounded-lg" :src="product.images[0]" alt="Product Image">
            </div>
            <h3 class="mt-4">{{ product.title.substring(0, 30) }}...</h3>
            <p>{{ product.price }} USD</p>
          </router-link>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    
    const products = ref([]);
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    onMounted(() => {
      fetchProducts();
    });
    </script>
    