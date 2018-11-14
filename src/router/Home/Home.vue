<template>
  <div>
    <v-layout wrap align-center>
      <v-flex xs12 d-flex>
        <v-card>
          <v-card-text>
            <v-select
              v-model="chosenContrastModel"
              :items="models"
              label="Contrast models"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout
      class="bland"
      wrap
      align-center>
      <v-flex xs4>
        <v-card>
          <v-card-text>
            <v-heat-map
              :uuid="'Survey'"
              title="Survey"
              :x="xLabels"
              :y="yLabels"
              :z="data.department.models.survey"
              :zMin="minZValue"
              :zMax="maxZValue"
            />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-card-text>

            <v-heat-map
              :key="1"
              :uuid="'random'"
              title="Random"
              :x="xLabels"
              :y="yLabels"
              :z="randomModel"
              :zMin="minZValue"
              :zMax="maxZValue"
            />

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-card-text>

            <div style="overflow: no-display; overflow: hidden">

              <v-heat-map
                :uuid="'contrast'"
                :key="1"
                :title="contrastTitle"
                :x="xLabels"
                :y="yLabels"
                :z="contrastModel"
                :zMin="minZValue"
                :zMax="maxZValue"
              />

            </div>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout wrap align-center>

      <v-flex xs12 d-flex>
        <v-card>
          <v-card-text>
            <v-histogram
              uuid="distance"
              :title="distanceTitle"
              :x="distanceModel"
            />
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>

  </div>
</template>
<script>
  import VHeatMap from '../../components/VHeatMap'
  import VHistogram from '../../components/VHistogram'
  import data from './data'
  export default {
    data() {
      return {
        windowSize: 40,
        data: data,
        chosenContrastModel: 'bland',
        distanceContrastModel: 'bland',
        models: ['bland', 'nightmare', 'yesWeCan'],
        xLabels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        yLabels: ['a', 'b', 'c', 'd', 'e']
      }
    },
    computed: {
      minZValue: function () {
        const minValues = [
          Math.min(...data.department.models.survey),
          Math.min(...data.department.models.bland),
          Math.min(...data.department.models.random_bland),
          Math.min(...data.department.models.nightmare),
          Math.min(...data.department.models.random_nightmare),
          Math.min(...data.department.models.yesWeCan),
          Math.min(...data.department.models.random_yesWeCan)
        ]
        return Math.min(...minValues)
      },
      maxZValue: function () {
        const maxValues = [
          Math.max(...data.department.models.survey),
          Math.max(...data.department.models.bland),
          Math.max(...data.department.models.random_bland),
          Math.max(...data.department.models.nightmare),
          Math.max(...data.department.models.random_nightmare),
          Math.max(...data.department.models.yesWeCan),
          Math.max(...data.department.models.random_yesWeCan)
        ]
        return Math.max(...maxValues)
      },
      randomModel: function () {
        return data.department.models['random_' + this.chosenContrastModel]
      },
      contrastModel: function () {
        return data.department.models[this.chosenContrastModel]
      },
      distanceModel: function () {
        return data.department.contrasts[this.chosenContrastModel]
      },
      contrastTitle: function () {
        const titles = {
          'bland': 'Bland Model',
          'nightmare': 'Nightmare Model',
          'yesWeCan': '"Yes We Can!" Model'
        }
        return titles[this.chosenContrastModel]
      },
      distanceTitle: function () {
        const titles = {
          'bland': 'Distance between Survey and Bland Model',
          'nightmare': 'Distance between Survey and Nightmare Model',
          'yesWeCan': 'Distance between Survey and "Yes We Can!" Model'
        }
        return titles[this.chosenContrastModel]
      }
    },
    components: {
      VHeatMap,
      VHistogram
    },
    mounted() {
      let that = this
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowSize = window.innerWidth / 15
        })
      })
      that.windowSize = window.innerWidth / 15
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
