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
  data() {
    return {
      text: 'click',
      text1: 'click',
      text2: 'click'
    }
  },
  mounted () {
    console.log('mounted')
  },  
  methods: {
    test () {
      console.log('clicked')
    }
  },
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
