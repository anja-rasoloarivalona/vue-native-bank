<template>
  <view class="container">
    <navigator />
  </view>
</template>

<script>
import Navigator from './navigator'
import { Ionicons } from '@expo/vector-icons'
import Vue from 'vue-native-core'
Vue.component('icon', Ionicons)

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
