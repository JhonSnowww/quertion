<template>
  <div class="container">
    <div class="qu-wrap">
      <div>

        <header>
          <div style="text-align: center;">
            <span style="font-weight: bold; font-size: 20px">分析你工作上的动力</span><br>
          </div>
          <br>
          <h1 style="display: inline-block; font-weight: bold; margin: 0; padding: 0; width: 100%;">
            <div style="margin-bottom: 10px;">
              <span style="color: #333;">•</span> 以下的测试是用来分析你工作上的动力，每两小题为一组。<br>
            </div>
            <div style="margin-bottom: 10px;">
              <span style="color: #333;">•</span> 对于每一组题目，你都有5分去分配，以表示你对它们的重视程度。<br>
            </div>
            <div style="margin-bottom: 10px;">
              <span style="color: #333;">•</span> 你每组题目5分的分配应该遵循你对每一组的两道题目在互相比较的情形下所作出的衡量。<br>
            </div>
            <div style="margin-bottom: 10px;">
              <span style="color: #333;">•</span> 这个测试应该在很自然及快速的情形下进行，请记得需要的是你自己的意见，而不是他人的。<br>
            </div>
            <div style="margin-bottom: 10px;">
              <span style="color: #333;">•</span> 这 5 分必须依照以下其中的一个方式分配：<br>
            </div>
            <div style="text-align: center;">
              5—0 、 4—1 、 3—2 、 2—3 、 1—4 、 0—5
            </div>
            <br>
          </h1>
        </header>
      </div>

      <div class="qu-content">
        <div class="qu-item" v-for="(group, groupIndex) in groupedItems" :key="groupIndex">
          <div style="display: flex; align-items: center;height: auto;">
            <dev style="margin-right: 10px;width: 70%;text-align: left">
              {{ `Q${groupIndex * 2 + 1}:&nbsp;&nbsp;&nbsp;${group[0].topic}` }}
              <span v-if="group[0].isMandatory"> *</span>
            </dev>
            <div style="width: 30%;height: auto;text-align: right">
<!--              <button type="button" @click="decrement(group[0], group[1])">-</button>-->
              <input type="text" :value="group[0].answer" @input="validateGroup(group)"
                     style="font-size: 16px; width: 30px; text-align: center; height: 23px" disabled>
              <button type="button" @click="increment(group[0], group[1])" class="custom-button">+</button>
            </div>
          </div>
          <div style="display: flex; align-items: center;height: auto;margin-top: 10px;margin-bottom: 25px;">
            <dev style="margin-right: 10px;width: 70%;text-align: left">
              {{ `Q${groupIndex * 2 + 2}:&nbsp;&nbsp;&nbsp;${group[1].topic}` }}
              <span v-if="group[1].isMandatory"> *</span>
            </dev>
            <div style="width: 30%;height: auto;text-align: right">
<!--              <button type="button" @click="decrement(group[1], group[0])">-</button>-->
              <input type="text" :value="group[1].answer" @input="validateGroup(group)"
                     style="font-size: 16px; width: 30px; text-align: center;height: 23px" disabled>
              <button type="button" @click="increment(group[1], group[0])" class="custom-button">+</button>
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid gray;"/>
        </div>

      </div>
      <footer>
        <span id="submitBtn" @click="iterator = submitBtn(); iterator.next()">提交问卷</span>
      </footer>
    </div>
    <div class="overlay" v-show="isShowPrompt">
      <div class="prompt-box">
        <header>
          <span>提示</span>
          <a href="javascript:;" @click="isShowPrompt = false">&times;</a>
        </header>
        <p>{{ promptText }}</p>
        <footer style="margin-top: 5px">
          <span @click="isShowPrompt = false; iterator && iterator.next()">确定</span>
          <span @click="isShowPrompt = false">取消</span>
        </footer>
      </div>
    </div>
    <Modal :visible.sync="showModal">
      <TestDemo :chartData="dataToPass"/>
    </Modal>
  </div>
</template>

<script>
import Store from '../store.js';
import data from "../data";
import Modal from './Modal.vue';
import TestDemo from './result.vue';
import {quantity} from "echarts/lib/util/number";

export default {
  name: 'Fill',
  components: {
    Modal,
    TestDemo
  },
  computed: {
    groupedItems() {
      const groups = [];
      for (let i = 0; i < this.questions.length; i += 2) {
        groups.push(this.questions.slice(i, i + 2));
      }
      return groups;
    }
  },
  data() {
    return {
      showModal: false,
      quData: {},
      questions: [],
      answers: {},
      promptText: '',
      isShowPrompt: false,
      dataToPass: []
    }
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      let id = this.$route.params.id;

      this.quData = data.list[id - 1];
      this.questions = this.quData.questions;
      this.questions.forEach((item) => {
        if (item.type === 'checkbox') {
          item.answer = [];
        } else {
          item.answer = '';
        }
      });
    },

    showPrompt(text) {
      this.promptText = text;
      this.isShowPrompt = true;
    },

    requireValidate() {
      let textareas = document.querySelectorAll('textarea');
      return [].every.call(textareas, item => {
        if (item.hasAttribute('required') && item.value.trim() === '') {
          return false;
        }
        return true;
      })
    },
    increment(item, otherItem) {
      console.log("item",item)
      console.log("otherItem",otherItem)

      if (item.answer < 5) {
        item.answer++;
        otherItem.answer = 5 - item.answer;

        // this.validateGroup(item.group);
      }
    },
    decrement(item, otherItem) {
      if (item.answer > 0) {
        item.answer--;
        otherItem.answer = 5 - item.answer;

        this.validateGroup(item.group);
      }
    },
    validateGroup(group) {
      const total = group.reduce((sum, item) => sum + item.answer, 0);
      if (total !== 5) {
        // 合计不为 5，进行相应处理
      }
    },

    sendAnswer(resultMap) {
      this.showModal = true;

    },

    * submitBtn() {
      let text = ``;
      console.log(this.questions)
      let resultMap = new Map();
      // 循环 this.questions累加值并转为map
      for (const question of this.questions) {
        let key = question.value;
        let value = question.answer;
        if (value !== "" && value !== null) {
          // 如果 Map 中已经存在相同的 key，则将 value 相加
          if (resultMap.has(key)) {
            let oldValue = resultMap.get(key);
            let newValue = parseInt(oldValue) + parseInt(value);
            resultMap.set(key, newValue);
          } else {
            resultMap.set(key, value);
          }
        } else {
          alert('请完成所有答题');
          return
        }
      }
      text = `确认提交问卷吗？`
      //A-Z排序并专为数组
      let sortedArray = Array.from(resultMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0])) // 按键排序
        .map(entry => entry[1]); // 提取值并转换为数组
      this.dataToPass = sortedArray


      yield this.showPrompt(text);
      yield this.sendAnswer(resultMap);
    },

    * backBtn() {
      yield this.showPrompt(`放弃答题回到主页吗？`);
      yield this.$router.push({path: '/'});
    },
  },
}
</script>

<style scoped lang="scss">
@import '../style/_Fill.scss';

.container {
  max-width: 100%;
  padding: 5px;
  font-size: 14px;
}

.qu-wrap {
  margin: 10px;
}

.qu-item {
  margin-bottom: 10px;
}

h3 {
  font-size: 16px;
}

input[type="number"] {
  font-size: 14px;
  width: 50px;
}

footer {
  margin-top: 20px;
}

.overlay {
  /* 遮罩样式 */
}

.prompt-box {
  /* 提示框样式 */
}
.custom-button {
  font-size: 14px;  /* 增加字体大小 */
  padding: 5px 13px; /* 调整内边距 */
  background-color: #4169E1; /* 使用更优雅的背景色 */
  color: white; /* 设置按钮文字颜色 */
  border: none; /* 去除默认的边框 */
  border-radius: 8px; /* 添加圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加阴影 */
  cursor: pointer; /* 鼠标悬停时显示为点击状态 */
  transition: all 0.3s ease; /* 平滑过渡效果 */
}
</style>
