<template>
  <view class="container">
    <navigator />
  </view>
</template>

<script>
import axios from 'axios'
import Navigator from './navigator'
import { Ionicons } from '@expo/vector-icons'
import Vue from 'vue-native-core'
import BasicInput from './components/Input/BasicInput'
import Button from './components/Button'

Vue.component('icon', Ionicons)
Vue.component('app-basic-input', BasicInput)
Vue.component('app-btn', Button)

axios.defaults.baseURL = 'http://10.0.2.2:8000/graphql'

export default {
  components: {
    Navigator
  }
}

</script>


<style>
.container {
  flex: 1;
}
</style>
