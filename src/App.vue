// src/App.vue
<template>
  <div id="app">
    <SiteNavbar />
    <router-view />
  </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue';

export default {
  components: {
    SiteNavbar
  }
};
</script>

<style>
/* Add global styles if needed */
body {
  font-family: Arial, sans-serif;
}
</style>
