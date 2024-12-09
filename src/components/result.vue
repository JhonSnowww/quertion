<template>
  <div class="container">
    <div ref="chart" style="width: 350px; height: 300px;margin-left: 42px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'; // 直接引入 ECharts

export default {
  name: 'testDemo',
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart); // 使用 echarts.init
      const option = {
        color: ['#FFC481', '#8EC6F8', '#56D8CD'],

        legend: {},
        radar: {
          indicator: [
            {name: '财务动机', max: 20, min: 0},
            {name: '表彰和称赞', max: 20, min: 0},
            {name: '责任', max: 20, min: 0},
            {name: '和经理的关系', max: 20, min: 0},
            {name: '升职', max: 20, min: 0},
            {name: '工作上的成就', max: 20, min: 0},
            {name: '工作内容——工作的本身', max: 20, min: 0},
            {name: '人际和谐', max: 20, min: 0},
          ],
          radius: 95,
          startAngle: 0,
          splitNumber: 5,
          triggerEvent: true,
          name: {
            rich: {
              a: {
                color: '#333',
                fontSize: 12,
              },
              b: {
                color: '#333',
                fontSize: 12,
              },
            },
          },
        },
        textStyle: {
          color: '#333333',
        },
        series: [
          {
            type: 'radar',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: 'rgba(255, 196, 129, 0.8)'},
                  {offset: 1, color: 'rgba(255, 196, 129, 0.3)'},
                ]),
                opacity: 0.8,
              },
            },
            data: [
              {
                value: this.chartData, // 使用传递的数据

              },
            ],
          },
        ],
      };
      this.chart.setOption(option);
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
  width: 100rem;
  margin: 6rem auto;
  color: #555;
}
</style>
