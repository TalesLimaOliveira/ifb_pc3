import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue from 'vue';
import Luisa from 'luisa-vue'
Vue.use(Luisa);

<template>
  <div class="">
    <Luisa design="a2aa10az2iLb0Ao2DrTWqsqFPggbOKzNwgCywsL4tRuj9wFvpRajsRkwyQ3y" v-model="viewModel"/>
  </div>
</template>


export default {
name: 'PC3 APP',
data: function () {
    return {
    viewModel: {
        celular: '',
        cpf: '',
        email: '',
        email-login: '',
        endereco01: '',
        endereco02: '',
        nome: '',
    }
    }
},
components: {
},
methods: {

}


// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
//   },
//   {
//     path: '/:screenName.html',
//     name: 'qux',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router