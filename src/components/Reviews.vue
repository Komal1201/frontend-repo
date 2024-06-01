// src/components/Reviews.vue
<template>
  <div>
    <h1>Reviews</h1>
    <input v-model="searchQuery" placeholder="Search reviews" />
    <ul>
      <li v-for="review in filteredReviews" :key="review.id">
        <router-link :to="'/review/' + review.id">{{ review.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reviews: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredReviews() {
      return this.reviews.filter(review =>
        review.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    axios.get('http://localhost:1337/reviews')
      .then(response => {
        this.reviews = response.data;
      });
  }
};
</script>

<style>
h1 {
  text-align: center;
}

input {
  display: block;
  margin: 1rem auto;
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
