<template>
    <view class="screen">
        <view class="auth">
            <basic-input
                :value="email"
                @change="email = $event"
                placeholder="Email"
                keyboardType='email-address'
            />
            <basic-input
                :value="password"
                @change="password = $event"
                placeholder="Password"
                keyboardType='default'
            />
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },    
}
</script>

<style lang="scss" scoped>
.screen {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.auth {
    width: 80%;
}
</style>