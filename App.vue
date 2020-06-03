<template>
  <safe-area-view class="container">
      <text-input v-model="text" class="input"/>
       <text-input v-model="text1" class="input"/>
        <text-input v-model="text2" class="input"/>
      <!-- <text class="text-color-primary">{{ text }}</text>
      <button :title="text" @click="test"></button> -->
  </safe-area-view>
</template>

<script>
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
  }
}

</script>


<style>
.container {
  flex: 1;
  background-color: red;
  /* padding-top: 30; */
  align-items: center;
  justify-content: flex-start;
}
.input {
  background-color: white;
  width: 90%;
  padding: 10;
  margin-bottom: 30;
}
</style>
