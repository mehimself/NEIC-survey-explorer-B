<template>
  <v-container fluid fill-height class="page">
    <v-layout fluid fill-height grid-list-lg>
      <v-flex xs10 offset-xs1 class="cards">
        <v-card class="glass dark">
          <v-card-title primary-title>
            <h1>Data Services</h1>
          </v-card-title>
          <v-card-text>
            Our team is on the constant lookout for new data respositories and services. Below we list our current publicly accessible resources. Contact us if you have or require resources not listed here.
          </v-card-text>
        </v-card>
        <v-card class="glass dark">
          <v-card-title>
            <h3>Goodreads Reviews</h3>
          </v-card-title>
          <v-card-text>
            Go to <a @click="$router.push('/goodreadsReviews')">Goodreads Reviews</a>
          </v-card-text>
        </v-card>
        <v-card class="glass dark">
          <v-card-title>
            <h3>Upcoming Platform for Custom Research Applications</h3>
          </v-card-title>
          <v-card-text>
            Part of our activities focus on developing avant-garde research resources for customized High Performance
            Computing (HPC) research applications
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
  .page {
    background-image: url('images/skyscrapers-3096215_1920.jpg');
    background-size: cover;
  }
  .dark {
    color: white;
    background-color: rgba(0,0,0,0.6);
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    border-radius: 0.2em;
    padding: 1em;
  }
  .card {
    color: white !important;
  }
  .attribution {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0 1em;
    margin: 1em;
  }
  .attribution a {
    color: #FFF;
  }
</style>
