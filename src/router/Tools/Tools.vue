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
                <h1>Tools</h1>
              </v-flex>
              <v-flex
                v-if="isAuthenticated"
                xs6
                class="text-xs-right">
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <p>
                  <router-link to="/nox">
                    <a>NodeWorks</a>
                  </router-link>
                </p>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        <v-nox/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>
