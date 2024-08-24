<!-- src/components/ProductDetail.vue -->
<template>
      <div class="container w-[500px] border rounded-xl p-2 mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>
        <img  :src="product.category.image" alt="Product Image" class="w-full h-[300px]  rounded-lg mb-4">
        <p class="text-lg mb-4">{{ product.description }}</p>
        <p class="text-xl font-semibold">Price: {{ product.price }} USD</p>
      </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    
    const product = ref({});
    const route = useRoute();
    
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${route.params.id}`);
        product.value = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    
    onMounted(() => {
      fetchProduct();
    });
    </script>
    