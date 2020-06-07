<template>
    <view class="screen">
        <activity-indicator size="large" color="red"></activity-indicator>
    </view>
</template>

<script>
import store from '../store'
export default {
    mounted: async function () {
        await store.dispatch('logout')
        this.checkIfUserIsAuthed()
    },
    methods: {
        checkIfUserIsAuthed: async function () {
                console.log('checking')
                const isAuthed = await store.dispatch('checkIfUserIsAuthed')
                if(!isAuthed){
                    this.navigation.navigate('Auth')
                } else {
                    this.navigation.navigate('Main')
                    console.log('connected')
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