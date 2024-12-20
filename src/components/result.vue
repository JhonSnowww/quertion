<template>
  <div class="container">
    <div ref="chart" style="width: 400px; height: 300px;margin-left: -15px"></div>
<!--    <button @click="saveChartAsImage">保存为图片</button>-->

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
      console.log('this.chartData',this.chartData)
      const option = {
        color: ['#FFC481', '#8EC6F8', '#56D8CD'],
        legend: {},
        radar: {
          indicator: [
            {name: 'A财务动机:'+this.chartData[0], max: 30, min: 0},
            {name: 'B表彰和称赞:'+this.chartData[1], max: 30, min: 0},
            {name: 'C责任:'+this.chartData[2], max: 30, min: 0},
            {name: 'D和经理的关系:'+this.chartData[3], max: 30, min: 0},
            {name: 'E升职:'+this.chartData[4], max: 30, min: 0},
            {name: 'F工作上的成就:'+this.chartData[5], max: 30, min: 0},
            {name: 'H工作的本身:'+this.chartData[6], max: 30, min: 0},
            {name: 'I人际和谐:'+this.chartData[7], max: 30, min: 0},
          ],
          radius: 95,
          startAngle: 90,
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
    },
    saveChartAsImage() {
      const imgUrl = this.chart.getDataURL({
        type: 'png', // 可以选择 'png' 或 'jpeg'
        pixelRatio: 2, // 提高图片质量
        backgroundColor: '#fff', // 设置背景色为白色，或根据需要调整
      });

      // 创建一个临时的 <a> 标签来触发下载
      const a = document.createElement('a');
      a.href = imgUrl;
      a.download = 'radar-chart.png'; // 设置下载的文件名
      document.body.appendChild(a);
      a.click(); // 触发下载
      a.remove(); // 下载后移除 <a> 标签
    },
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
