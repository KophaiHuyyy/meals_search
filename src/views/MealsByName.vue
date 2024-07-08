<template>
    <div class="flex flex-col p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" @change="searchMeals">
    </div>
    <Meals :meals="meals"></Meals>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals);

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value);
    } else {
        store.commit("searchMeals", [])
    }
}

onMounted(() =>{
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals();
    }
})

</script>

<style>

</style>