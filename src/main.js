import Vue from 'vue';
import App from './App.vue';
import Test from './components/Test';

new Vue({
  el: '#app',
  render: h => h(Test)
});