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
      <h2>提交成功！</h2>
      <p>感谢您的参与！</p>
    </div>
  </div>
</template>

<script>
import { surveyQuestions } from '../data2.js';

export default {
  name: 'SurveyQuestion',
  data() {
    return {
      currentQuestion: 0,
      answers: [],
      questions: surveyQuestions
    };
  },
  methods: {
    selectOption(index) {
      this.$set(this.answers, this.currentQuestion, index);
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    submitAnswers() {
      if (this.answers.length !== this.questions.length) {
        alert("请完成所有问题！");
        return;
      }
      console.log("用户答案：", this.answers);
      this.currentQuestion = this.questions.length;
    },
    getOptionLabel(index) {
      return String.fromCharCode(65 + index); // 将索引转换为 A, B, C, D
    }
  },
  created() {
    // 初始化答案数组
    this.answers = new Array(this.questions.length).fill(null);
  }
};
</script>

<style scoped>
.survey-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 28px;
}

.question-container {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h2 {
  color: #34495e;
  font-size: 22px;
  margin-bottom: 15px;
}

p {
  color: #34495e;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.options {
  margin-top: 20px;
}

.option {
  margin: 10px 0;
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  color: #495057;
}

.option:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.option.selected {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
  font-weight: bold;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  background-color: #4CAF50;
  color: white;
}

button:not(:first-child):hover {
  background-color: #45a049;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .survey-container {
    padding: 20px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  .question-container {
    padding: 20px;
  }

  .navigation {
    flex-direction: column;
    gap: 10px;
  }

  button {
    width: 100%;
  }

  .option {
    font-size: 14px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .survey-container {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

  .option {
    font-size: 13px;
    padding: 10px;
  }

  button {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
