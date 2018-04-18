<template>
  <div id="app">    
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'just a test'
    }
  }
}
</script>

<style lang="css">
  #app {
    color: black;
  }
</style>