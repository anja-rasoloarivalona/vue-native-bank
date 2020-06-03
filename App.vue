<template>
  <view>App 1</view>
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
