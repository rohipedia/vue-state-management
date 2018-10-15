<template>
    <div>
        <!-- <p>Counter is: {{ counter }}</p>
        <p>{{ clicks }}</p> -->
        <!-- <p>Counter is: {{ doubleCounter }}</p>
        <p>{{ stringCounter }}</p> -->
        <p>Counter is: {{ counterOfDouble }}</p>
        <p>{{ counterOfStrings }}</p>
        <p>{{ ourOwn }}</p>
    </div>    
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
        // computed: mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        // ])
        computed: {
            ...mapGetters({
               'counterOfDouble': types.DOUBLE_COUNTER,
               'counterOfStrings': types.CLICK_COUNTER
            }),
            ourOwn() {
                return 'our own';
            }
        },
        // computed: mapGetters({
        //     'counterOfDouble': 'doubleCounter',
        //     'counterOfStrings': 'stringCounter'
        // })
    }
</script>