// src/components/SiteNavbar.vue
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/movies">Movies</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar'
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
