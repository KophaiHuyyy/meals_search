<template>
    <!-- target="_blank" sử dụng để chỉ định liên kết đc click, sẽ mở liên kết đó trong 1 tab hoặc cửa sổ trình duyệt khác.-->
    <a :href="href" 
       target="_blank" 
       class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition">
       <slot></slot>
   </a>
</template>

<script setup>
   const props = defineProps({
       href: String
   })
</script>