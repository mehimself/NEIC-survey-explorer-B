<template>
  <v-app id="inspire">
    <v-header></v-header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import VHeader from '../../components/VHeader'

  export default {
    data: () => ({
      dialog: false
    }),
    props: {
      source: String
    },
    components: {
      VHeader
    }
  }
</script>
<style>
  body {
    font-size: 16px;
  }

  .cards {
    margin-left: 1em;
    margin-right: 1em;
  }

  .cards .card {
    margin-top: 1em;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 1em;
  }

  .clear {
    background-color: transparent !important;
  }

  .glass {
    background-color: rgba(0, 12, 25, 0.4) !important;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .7));
    border-top: #3e4e52 1px solid;
    border-left: #3e4e52 1px solid;
    border-right: #222d3c 1px solid;
  }

  .cards .white {
    color: black !important;
    background-color: rgba(255, 255, 255, 0.95) !important;
  }

  .page {
    background-image: url('/images/laptop-3174729_1920.jpg');
    background-size: cover;
  }

  .card.dark {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    border-radius: 0.2em;
    padding: 1em;
  }

</style>
