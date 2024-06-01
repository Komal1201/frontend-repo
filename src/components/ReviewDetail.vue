// src/components/ReviewDetail.vue
<template>
  <div v-if="review">
    <h1>{{ review.title }}</h1>
    <p>{{ review.content }}</p>
    <p>Rating: {{ review.rating }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      review: null
    };
  },
  created() {
    const reviewId = this.$route.params.id;
    axios.get(`http://localhost:1337/reviews/${reviewId}`)
      .then(response => {
        this.review = response.data;
      });
  }
};
</script>

<style>
h1 {
  text-align: center;
}

p {
  margin: 1rem 0;
}
</style>
