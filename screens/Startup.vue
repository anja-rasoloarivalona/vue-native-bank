<template>
    <view class="screen">
        <activity-indicator size="large" color="red"></activity-indicator>
    </view>
</template>

<script>
import store from '../store'
export default {
    mounted () {
        this.tryLogin()
    },
    methods: {
        tryLogin: async function () {
                const isAuthed = await store.dispatch('tryLogin')
                if(!isAuthed){
                    this.navigation.navigate('Auth')
                }
        }
    },
    props: {
        navigation: Object
    }
}
</script>

<style lang="scss" scoped>
.screen {
    flex: 1;
    justify-content: center;
    align-items: center;
}
</style>