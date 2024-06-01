<template>
  <div v-if="movie">
    <h1>{{ movie.attributes.Name }}</h1>
    <p>{{ movie.attributes.Content }}</p>
    <p>Director: {{ movie.attributes.Director }}</p>
    <p>Year: {{ movie.attributes.Year }}</p>
    <p>Rating: {{ movie.attributes.Rating }}</p>
    <p>Genre: {{ movie.attributes.Genre }}</p>
  </div>
</template>

<script>
import apiClient from '../axios';

export default {
  name: 'MovieDetail',
  data() {
    return {
      movie: null
    };
  },
  created() {
    const movieId = this.$route.params.id;
    apiClient.get(`/movies/${movieId}`)
      .then(response => {
        this.movie = response.data.data;
      })
      .catch(error => {
        console.error("There was an error fetching the movie:", error);
      });
  }
};
</script>

<style>
/* Add some basic styling */
h1 {
  text-align: center;
}

p {
  margin: 1rem 0;
}
</style>
