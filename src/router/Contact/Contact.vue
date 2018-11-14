<template>
  <v-container fluid fill-height class="page">
    <v-layout fluid fill-height grid-list-lg>
      <v-flex xs12 lg10 offset-lg1 class="cards">
        <v-card
          class="white"
        >
          <v-card-text primary-title>
            <v-layout>
              <v-flex xs6>
                <h1>Contact</h1>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <p>
                  Feel free to <a href="mailto:knielbo@sdu.dk">contact us about collaborations</a>.
                </p>
              </v-flex>
            </v-layout>
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
      return {}
    },
    computed: {
      ...mapState([
        'isAuthenticated'
      ])
    }
  }
</script>
<style scoped>
</style>
