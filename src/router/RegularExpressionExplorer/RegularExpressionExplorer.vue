<template>
  <v-container fluid fill-height class="page">
    <v-layout fluid fill-height grid-list-lg>
      <v-flex xs10 offset-xs1 class="cards">
        <v-card class="glass dark">
          <v-card-title primary-title>
            <h1>DATAKUBEN</h1>
          </v-card-title>
          <v-card-text>
            We are a mobile task-force on a Mission to Empower Social Sciences and the Humanities with
            infrastructure, resources, data, and services around High Performance Computing (HPC)
          </v-card-text>
        </v-card>
        <v-card class="glass dark">
          <v-card-title>
            <h3>Research Data Repositories</h3>
          </v-card-title>
          <v-card-text>
            We are engaged in finding new data repositories. We research, acquire, and create new sources for scientific
            data, create new highly useable research tools and disseminate best research practices for the Humanities
            and Social Sciences.
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
      <v-flex xs10 offset-xs1>
        <div
          v-if="attributeJock"
          xs3 offset-xs9
          class="attribution dark">
          Art by
          <a href="http://www.fractal-recursions.com/">
            Jock Cooper
          </a>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/us/">
            <img alt="Creative Commons License" style="border-width:0"
                 src="http://i.creativecommons.org/l/by-nc/3.0/us/88x31.png">
          </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        attributeJock: false
      }
    },
    mounted() {
      let back = document.querySelector('.page')
      let jockThreshold = 2
      let imageNumber = Math.ceil(Math.random() * 20)
      back.style.backgroundImage = 'url(/cubes/' + imageNumber + '.jpg)'
      this.attributeJock = imageNumber >= jockThreshold
    }
  }
</script>
<style scoped>
  .page {
    background-size: 100% 100%;
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
