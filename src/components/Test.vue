<template>
  <div class="test">
    <p>{{ msg }}</p>   
    <a href="">SomeLink</a> 
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Some other Text'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #00f;
}
a {
  text-decoration: none;
  color: green;
  font-size:1.5em;
}
</style>
