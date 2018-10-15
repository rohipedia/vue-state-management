<template>
    <div>
        <button class="btn btn-primary" @click="increment({ by: 100, delay: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="decrement({ by: 50, delay: 2000 })">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    import * as types from '../store/types';
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
            ...mapActions({
                'increment': types.ASYNC_INCREMENT,
                'decrement': types.ASYNC_DECREMENT
            })
        }
    }
</script>