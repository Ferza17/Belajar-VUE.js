<template>
    <div>
            
                <h1>Filters & Mixin</h1>
                
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(item, index) in filteredFruits" :key="index">{{ item }}</li>
                </ul>
            
    </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin.js';

    export default{
        mixins : [fruitMixin],
        created() {
            console.log('Inside list created');
        },
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
