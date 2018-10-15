<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import * as types from '../store/types';
    import { mapMutations } from 'vuex';
    export default {
        // methods: {
        //     increment() {
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         this.$store.commit('decrement');
        //     }
        // }
        methods: {
            ...mapMutations({
                'increment': types.INCREMENT,
                'decrement': types.DECREMENT
                
            })
        }
    }
</script>