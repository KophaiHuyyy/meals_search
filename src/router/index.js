import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../components/DefaultLayout.vue"),
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("../views/Home.vue"),
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: () => import("../views/MealsByName.vue")
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: () => import("../views/MealsByLetter.vue")
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: () => import("../views/Ingredients.vue")
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: () => import("../views/MealsByIngredient.vue")
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: () => import("../views/MealDetails.vue")
            }
        ],
    },
    {
        path: "/guest",
        component: () => import("../components/GuestLayout.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;