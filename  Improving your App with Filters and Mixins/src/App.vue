<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixin</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')"> Add New Item </button>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(item, index) in filteredFruits" :key="index">{{ item }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin';

    export default {
        mixins:[fruitMixin],
        data(){
            return{
                text : 'Hello There!',
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appList : List,
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
