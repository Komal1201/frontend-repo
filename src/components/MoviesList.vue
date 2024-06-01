<template>
  <div>
    <h1>Movies</h1>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Search movies" />
    </div>
    <ul>
      <li v-for="movie in filteredMovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">{{ movie.attributes.Name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '../axios';

export default {
  name: 'MoviesList',
  data() {
    return {
      movies: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie =>
        movie.attributes.Name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    apiClient.get('/movies')
      .then(response => {
        this.movies = response.data.data;
      })
      .catch(error => {
        console.error("There was an error fetching the movies:", error);
      });
  }
};
</script>

<style>
html {
  text-align: center;
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

input {
  padding: 0.5rem;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
