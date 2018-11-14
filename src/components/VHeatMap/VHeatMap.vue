<template>
  <div>

    <div
      :ref="uuid"
      class="blur"
    ></div>

    <svg height="0">
      <defs>
        <filter id="wherearemyglasses" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
        </filter>
      </defs>
    </svg>

  </div>
</template>
<script>
  // todo: motion blur https://tympanus.net/codrops/2015/04/08/motion-blur-effect-svg/
  // todo: title styling https://github.com/plotly/plotly.js/blob/edc166f62d0d958194c04d830501a741cf6c7175/test/image/mocks/titles-avoid-labels.json
  import Plotly from 'plotly.js-dist'
  import Color from 'tinycolor2'
  function createColorScale(startAngle, endAngle) {
    const blueHue = 240
    const redHue = 0
    if (endAngle === undefined) endAngle = blueHue
    if (startAngle === undefined) startAngle = redHue
    const degrees = endAngle - startAngle
    const steps = 10
    let scale = []
    for (let i = 0; i < steps; i++) {
      let color
      if (i < 5) {
        color = Color({h: startAngle, s: 1 - i / 5, v: 1}).toString()
      } else {
        color = Color({h: endAngle, s: 1 - (9 - i) / 5, v: 1}).toString()
      }
      scale.push([i / 10, color])
      scale.push([(i + 1) / 10, color])
    }
    return scale
  }
  const colorscale = createColorScale()
  export default {
    name: 'VHeatMap',
    data() {
      return {
        graph: {}
      }
    },
    props: [
      'uuid',
      'title',
      'zmin',
      'zmax',
      'x',
      'y',
      'z'
    ],
    mounted() {
      Plotly.newPlot(
        this.$refs[this.uuid],
        [
          {
            z: this.z,
            x: this.x,
            y: this.y,
            transforms: {
              zmin: this.zmin,
              zmax: this.zmax
            },
            type: 'heatmap',
            colorbar: {
              autotick: false,
              tick0: 0,
              dtick: 0.1
            },
            colorscale
          }
        ],
        {
          title: this.title
        }
      )
    },
    watch: {
      z: {
        handler: function () {
          Plotly.react(
            this.$refs[this.uuid],
            [
              {
                z: this.z,
                x: this.x,
                y: this.y,
                transforms: {
                  zmin: this.zmin,
                  zmax: this.zmax
                },
                type: 'heatmap',
                colorbar: {
                  autotick: false,
                  tick0: 0,
                  dtick: 0.1
                },
                colorscale
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
  .bglayer, .nsewdrag, .zoomlayer {
    filter: url(#wherearemyglasses);
  }

</style>
