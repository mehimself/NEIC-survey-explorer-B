<template>
  <div
    :ref="uuid"
  ></div>
</template>
<script>
  // todo: motion blur https://tympanus.net/codrops/2015/04/08/motion-blur-effect-svg/
  // todo: title styling https://github.com/plotly/plotly.js/blob/edc166f62d0d958194c04d830501a741cf6c7175/test/image/mocks/titles-avoid-labels.json
  import Plotly from 'plotly.js-dist'
  // statistical methods https://www.npmjs.com/package/spm-simple-statistics
  import stats from 'spm-simple-statistics'

  function gaussCurve(xs) {
    let mean = stats.median(xs)
    let standardDeviation = stats.standard_deviation(xs)
    const min = Math.min(...xs)
    const max = Math.max(...xs)
    const stepSize = max - min / 1000
    let ys = []
    for (let i = min; i < max; i += stepSize) {
      let y = Math.pow(Math.E, -(Math.pow(i - mean, 2) / Math.pow(2 * standardDeviation, 2)))
      ys.push(y)
    }
    return ys
  }

  export default {
    name: 'VHistogram',
    data() {
      return {
        graph: {}
      }
    },
    props: [
      'uuid',
      'title',
      'x'
    ],
    mounted() {
      this.graph =
      Plotly.newPlot(
        this.$refs[this.uuid],
        [
          {
            x: this.x,
            type: 'histogram'
          },
          {
            x: gaussCurve(this.x),
            fill: 'tozeroy',
            type: 'lines',
            mode: 'none'
          }
        ],
        {
          title: this.title
        }
      )
    },
    watch: {
      x: {
        handler: function () {
          Plotly.react(
            this.$refs[this.uuid],
            [
              {
                x: this.x,
                type: 'histogram'
              },
              {
                x: gaussCurve(this.x),
                fill: 'tozeroy',
                type: 'lines',
                mode: 'none'
              }
            ],
            {
              title: this.title
            }
          )
        },
        deep: true
      }
    }
  }
</script>
<style>
  .modebar {
    display: none
  }
</style>
