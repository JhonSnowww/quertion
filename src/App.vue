<template>
  <div id="app">
  	<v-header></v-header>
  	<router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/Header'

export default {
  name: 'App',
  components: {
  	vHeader
  },
}
</script>

<style>
@import "style/reset";

#app {
  max-width: 100%;
  height: 100%;
  font-family: arial;
  background-color: #efefef;
  overflow: auto;
}
</style>
