<template>
  <div class="survey-container">
    <h1>自我领导风格评测</h1>
    <div class="question-container" v-if="currentQuestion < questions.length">
      <h2>问题 {{ currentQuestion + 1 }}/{{ questions.length }}</h2>
      <p><strong>{{ questions[currentQuestion].question }}</strong></p>
      <div class="options">
        <div
          class="option"
          v-for="(option, index) in questions[currentQuestion].options"
          :key="index"
          @click="selectOption(index)"
          :class="{ selected: answers[currentQuestion] === index }"
        >
          {{ getOptionLabel(index) }}. {{ option }}
        </div>
      </div>
      <div class="navigation">
        <button @click="prevQuestion" :disabled="currentQuestion === 0">上一题</button>
        <button v-if="currentQuestion < questions.length - 1" @click="nextQuestion">下一题</button>
        <button v-else @click="submitAnswers">提交答案</button>
      </div>
    </div>
    <div v-else>
      <div v-if="result" class="result-container">
        <h1>评测结果</h1>
        <div class="result-info">
          <p><strong>领导风格：</strong>{{ result.leadershipStyle }}</p>
          <p><strong>表现评价：</strong>{{ result.performanceEvaluation }}</p>
        </div>
        <div class="chart-container">
          <div ref="flexibilityChart" class="chart"></div>
          <div ref="efficiencyChart" class="chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {surveyQuestions} from '../data2.js';
import * as echarts from 'echarts';

export default {
  name: 'SurveyQuestion',
  data() {
    return {
      result: null,
      currentQuestion: 0,
      answers: [],
      questions: surveyQuestions,
      actualValues: {
        S1: 0,
        S2: 0,
        S3: 0,
        S4: 0
      },
      pfgeValues: {
        P: 0,
        F: 0,
        G: 0,
        E: 0
      },
      pfgeMapping: [
        {A: 'G', B: 'P', C: 'E', D: 'F'}, // 第1题
        {A: 'E', B: 'F', C: 'G', D: 'P'}, // 第2题
        {A: 'G', B: 'E', C: 'F', D: 'P'}, // 第3题
        {A: 'P', B: 'G', C: 'E', D: 'F'}, // 第4题
        {A: 'G', B: 'F', C: 'E', D: 'P'}, // 第5题
        {A: 'P', B: 'G', C: 'F', D: 'E'}, // 第6题
        {A: 'F', B: 'E', C: 'P', D: 'G'}, // 第7题
        {A: 'E', B: 'F', C: 'P', D: 'G'}, // 第8题
        {A: 'G', B: 'F', C: 'E', D: 'P'}, // 第9题
        {A: 'P', B: 'F', C: 'E', D: 'G'}, // 第10题
        {A: 'E', B: 'P', C: 'F', D: 'G'}, // 第11题
        {A: 'P', B: 'E', C: 'F', D: 'G'}, // 第12题
        {A: 'P', B: 'E', C: 'G', D: 'F'}, // 第13题
        {A: 'E', B: 'F', C: 'G', D: 'P'}, // 第14题
        {A: 'P', B: 'G', C: 'F', D: 'E'}, // 第15题
        {A: 'E', B: 'P', C: 'G', D: 'F'}, // 第16题
        {A: 'G', B: 'P', C: 'E', D: 'F'}, // 第17题
        {A: 'G', B: 'E', C: 'F', D: 'P'}, // 第18题
        {A: 'F', B: 'E', C: 'P', D: 'G'}, // 第19题
        {A: 'E', B: 'P', C: 'F', D: 'G'}  // 第20题
      ],
      answerMapping: [
        {A: 'S1', B: 'S2', C: 'S3', D: 'S4'}, // 第1题
        {A: 'S1', B: 'S2', C: 'S3', D: 'S4'}, // 第2题
        {A: 'S1', B: 'S2', C: 'S3', D: 'S4'}, // 第3题
        {A: 'S3', B: 'S2', C: 'S4', D: 'S1'}, // 第4题
        {A: 'S4', B: 'S1', C: 'S3', D: 'S2'}, // 第5题
        {A: 'S1', B: 'S2', C: 'S3', D: 'S4'}, // 第6题
        {A: 'S2', B: 'S4', C: 'S1', D: 'S3'}, // 第7题
        {A: 'S3', B: 'S2', C: 'S1', D: 'S4'}, // 第8题
        {A: 'S4', B: 'S2', C: 'S1', D: 'S3'}, // 第9题
        {A: 'S2', B: 'S3', C: 'S4', D: 'S1'}, // 第10题
        {A: 'S2', B: 'S3', C: 'S4', D: 'S1'}, // 第11题
        {A: 'S1', B: 'S3', C: 'S2', D: 'S4'}, // 第12题
        {A: 'S2', B: 'S3', C: 'S4', D: 'S1'}, // 第13题
        {A: 'S4', B: 'S2', C: 'S1', D: 'S3'}, // 第14题
        {A: 'S1', B: 'S3', C: 'S2', D: 'S4'}, // 第15题
        {A: 'S2', B: 'S4', C: 'S3', D: 'S1'}, // 第16题
        {A: 'S2', B: 'S4', C: 'S1', D: 'S3'}, // 第17题
        {A: 'S2', B: 'S1', C: 'S3', D: 'S4'}, // 第18题
        {A: 'S4', B: 'S2', C: 'S1', D: 'S3'}, // 第19题
        {A: 'S4', B: 'S1', C: 'S3', D: 'S2'}  // 第20题
      ]
    };
  },
  methods: {
    mounted() {
      this.initCharts();
    },
    selectOption(index) {
      this.$set(this.answers, this.currentQuestion, index);
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    nextQuestion() {
      // 添加判断：如果当前问题未选择答案，则不允许跳转到下一题
      if (this.answers[this.currentQuestion] === undefined || this.answers[this.currentQuestion] === null) {
        alert("请先选择一个选项！");
        return; // 阻止跳转
      }
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    submitAnswers() {
      // 添加判断：如果当前问题未选择答案，则不允许跳转到下一题
      if (this.answers[this.currentQuestion] === undefined || this.answers[this.currentQuestion] === null) {
        alert("请先选择一个选项！");
        return; // 阻止跳转
      }
      this.calculateActualValues(this.answerMapping, this.actualValues);
      this.calculateActualValues(this.pfgeMapping, this.pfgeValues);

      const leadershipStyle = this.getMostFrequentValue(this.actualValues, {
        S1: '高指挥低支持',
        S2: '高指挥高支持',
        S3: '低指挥高支持',
        S4: '低指挥低支持'
      });

      const performanceEvaluation = this.getMostFrequentValue(this.pfgeValues, {
        P: '差',
        F: '一般',
        G: '良好',
        E: '突出'
      });

      let sumOfAbsoluteDifferences = 0;
      for (const key in this.actualValues) {
        sumOfAbsoluteDifferences += Math.abs(this.actualValues[key] - 5);
      }
      sumOfAbsoluteDifferences = Math.abs(sumOfAbsoluteDifferences - 30);

      let weightedSumOfPfge = 0;
      weightedSumOfPfge += this.pfgeValues.P * 1;
      weightedSumOfPfge += this.pfgeValues.F * 2;
      weightedSumOfPfge += this.pfgeValues.G * 3;
      weightedSumOfPfge += this.pfgeValues.E * 4;

      this.result = {
        leadershipStyle,
        performanceEvaluation,
        sumOfAbsoluteDifferences,
        weightedSumOfPfge
      };

      this.currentQuestion = this.questions.length;

      console.log()
      this.$nextTick(this.initCharts);
    },
    initCharts() {
      this.initFlexibilityChart();
      this.initEfficiencyChart();
    },
    initFlexibilityChart() {
      const flexibilityChart = echarts.init(this.$refs.flexibilityChart);
      const option = {
        title: {
          text: '风格灵活性坐标'
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 30,
          splitNumber: 6
        },
        yAxis: {
          type: 'category',
          data: ['得分']
        },
        series: [{
          data: [this.result ? this.result.sumOfAbsoluteDifferences : 0],
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            color: '#3498db'
          }
        }]
      };
      flexibilityChart.setOption(option);
    },
    initEfficiencyChart() {
      const efficiencyChart = echarts.init(this.$refs.efficiencyChart);
      const option = {
        title: {
          text: '风格效率性坐标'
        },
        xAxis: {
          type: 'value',
          min: 20,
          max: 80,
          splitNumber: 6
        },
        yAxis: {
          type: 'category',
          data: ['得分']
        },
        series: [{
          data: [this.result ? this.result.weightedSumOfPfge : 0],
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            color: '#2ecc71'
          }
        }]
      };
      efficiencyChart.setOption(option);
    },
    getMostFrequentValue(values, descriptions) {
      let maxCount = 0;
      let mostFrequentKey = null;

      for (const key in values) {
        if (values[key] > maxCount) {
          maxCount = values[key];
          mostFrequentKey = key;
        }
      }

      return descriptions[mostFrequentKey];
    },
    calculateActualValues(answerMapping, actualValues) {
      for (let i = 0; i < this.answers.length; i++) {
        const selectedOption = this.getOptionLabel(this.answers[i]);
        const mapping = answerMapping[i];
        actualValues[mapping[selectedOption]]++;
      }
    },
    getOptionLabel(index) {
      return String.fromCharCode(65 + index);
    }
  },
  created() {
    this.answers = new Array(this.questions.length).fill(null);
  }
};
</script>

<style scoped>
.survey-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  transition: all 0.3s ease;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
}

.question-container {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  animation: fadeIn 0.5s ease;
}

h2 {
  color: #34495e;
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  color: #34495e;
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 25px;
}

.options {
  margin-top: 25px;
}

.option {
  margin: 12px 0;
  padding: 18px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  color: #495057;
}

.option:hover {
  background-color: #e9ecef;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.option.selected {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

button:first-child {
  background-color: #6c757d;
  color: white;
}

button:first-child:hover {
  background-color: #5a6268;
}

button:not(:first-child) {
  background-color: #3498db;
  color: white;
}

button:not(:first-child):hover {
  background-color: #2980b9;
}

.result-container {
  padding: 30px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.result-info {
  margin-bottom: 30px;
}

.result-info p {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 10px;
}

.chart-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.chart {
  width: 48%;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

@media (max-width: 900px) {
  .survey-container {
    padding: 20px;
  }

  .question-container {
    padding: 20px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }

  .chart {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .survey-container {
    padding: 15px;
  }

  h1 {
    font-size: 24px;
  }

  .question-container {
    padding: 15px;
  }

  .navigation {
    flex-direction: column;
    gap: 10px;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }

  .option {
    font-size: 14px;
    padding: 12px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
