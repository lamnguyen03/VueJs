import { createRouter, createWebHistory } from 'vue-router'

import AddForm from "@/components/AddForm";
import ShowUsers from "@/components/ShowUsers";
const routes = [
    {
        path: '/add',
        component: AddForm
    },
    {
        path: '/show',
        component: ShowUsers
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router