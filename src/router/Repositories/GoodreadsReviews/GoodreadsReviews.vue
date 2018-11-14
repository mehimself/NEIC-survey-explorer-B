<template>
  <v-container fluid fill-height class="page">
    <v-layout fluid fill-height grid-list-lg>
      <v-flex xs10 offset-xs1 class="cards">
        <v-card class="glass dark white--text">
          <v-card-title primary-title>
            <h1>Goodreads Reviews</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              id="isbn"
              :model="isbn"
              :value="isbn"
              label="ISBN-10 or ISBN-13"
            ></v-text-field>
            <v-btn @click="getGoodreadsReviews">
              get reviews
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card v-if="results">
          <v-card-text>
            {{results}}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        results: null,
        isbn: 1234567890
      }
    },
    methods: {
      getGoodreadsReviews: function () {
        axios.get('/data/goodreadsReviews/' + this.isbn)
          .then(function (response) {
            this.results = response
          })
      }
    }
  }
</script>
