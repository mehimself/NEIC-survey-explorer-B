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
                <h1>Safinaz lands in Denmark</h1>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <v-jumbotron color="blue lighten-2">
                  <v-container fill-height>
                    <v-layout align-center>
                      <v-flex>
                        <h3 class="display-3">
                          <span>{{days}}</span>d
                          <span>{{hours}}</span>:
                          <span>{{minutes}}</span>:
                          <span>{{seconds}}</span>
                        </h3>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-jumbotron>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        eventTime: moment('30-06-2018 10:30:00')
      }
    },
    computed: {
      days: function () {
        return this.eventTime.getHours()
      }
    }
  }
</script>
<style scoped>
</style>
