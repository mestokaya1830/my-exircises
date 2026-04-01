<template>
  <div>
    <h2>{{ title }}</h2>

    <div class="canvas-con">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers';
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Page',
    }
  },
  mounted() {
    this.setChart()
  },
  methods: {
    async setChart() {
      Chart.defaults.elements.bar.borderWidth = 10
      //plugins
      const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'lightGreen';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      }

      //labels
      const label = ['Javascript', 'C#', 'Php', 'Python', 'Go', 'Ruby', 'Java', 'C++']
      const color = ['#f0db4f', '#903ba7', '#8993be', '#4584b6', '#00aed9', 'darkred', '#f58312', '#00589d']
      const data = [8, 6, 3, 7, 2, 5, 8, 3]

      //data
      let myChart = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: label,
          datasets: [{
            label: 'Bar Chart',
            data: data,
            backgroundColor: color,
            barPercentage: 0.5,
            categoryPercentage: 1,
            borderRadius: 5
          }]
        },
        scales: {
          yAxis: {
            min: 0,
            stepSize: 1
          }
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Title',
              font: { size: 30 },
              padding: {
                top: 0,
                bottom: 0
              }
            },
            subtitle: {
              display: true,
              text: 'Subtitle'
            },
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: 'blue',
                font: { size: 10 }
              }
            }
          }
        }
      })
    }
  }
};
</script>

<style>
  .canvas-con{
      width: 700px;
      height: 400px;
      margin-top: 50px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 0 10px;
    }
</style>