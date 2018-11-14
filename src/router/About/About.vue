<template>
  <v-container fluid fill-height class="page">
    <v-layout fluid fill-height grid-list-lg>
      <v-flex xs10 offset-xs1 class="cards">
        <v-card class="white">
          <v-card-title primary-title>
            <h1>DATAKUBEN</h1>
          </v-card-title>
          <v-card-text>
            DATAKUBEN is a mobile task-force with a Mission to Empower Social Sciences and the Humanities with
            infrastructure, resources, data, and services powered by High Performance Computing (HPC)
          </v-card-text>
        </v-card>
        <v-card class="white">
          <v-card-title>
            <h3>Research Data Repositories</h3>
          </v-card-title>
          <v-card-text>
            We are engaged in finding new data repositories. We research, acquire, and create new sources for scientific
            data, create new highly useable research tools and disseminate best research practices for the Humanities
            and Social Sciences.
          </v-card-text>
        </v-card>
        <v-card class="white">
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
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        id: 'about'
      }
    },
    computed: {
      ...mapState([
        'isAuthenticated'
      ]),
      title: {
        get() {
          return this.$store.state.texts.texts[this.id].title
        },
        set(value) {
          const update = (
            {
              id: this.id,
              attributeName: 'title',
              value: value
            })
          this.$store.dispatch('texts/putItemAttribute', update)
        }
      },
      body: {
        get() {
          return this.$store.state.news.news[this.id].body
        },
        set(value) {
          const update = (
            {
              id: this.id,
              attributeName: 'body',
              value: value
            })
          this.$store.dispatch('texts/putItemAttribute', update)
        }
      }
    }
  }
</script>
<style scoped>

</style>
