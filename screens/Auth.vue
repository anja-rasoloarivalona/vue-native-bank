<template>
    <view class="screen">
        <view class="auth">
            <app-basic-input
                :value="userInput.email"
                @change="userInput.email = $event"
                placeholder="Email"
                keyboardType='email-address'
            />
            <app-basic-input
                :value="userInput.password"
                @change="userInput.password = $event"
                placeholder="Password"
                keyboardType='default'
            />
            <app-btn :color="Colors.primary" @onPress="login" solid>Login</app-btn>
            <app-btn :color="Colors.primary" @onPress="press" transparent>Sign up</app-btn>

        </view>
    </view>
</template>

<script>
import { Colors } from '../theme'
import store from '../store'
export default {
    data() {
        return {
            userInput: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        Colors () {
            return Colors
        }
    },
    methods: {
        login: async function () {
            const result = await store.dispatch('login', this.userInput)
            if(result.success){
                this.navigation.navigate('Main')
                console.log('login succeeded')
            }
        }
    },
    props: {
        navigation: Object
    }
}
</script>

<style>
.screen {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.auth {
    width: 80%;
    /* background-color: green; */
}

</style>