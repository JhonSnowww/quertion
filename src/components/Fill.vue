<template>
  <div class="container">
    <div class="qu-wrap">
      <div>
        <header>
          <span @click="iterator = backBtn(); iterator.next()">&lt; 返回</span>
          <h1 style="display: inline-block; white-space: pre-wrap; font-weight: bold;">
            分析你工作上的动力
            以下的资料是用来分析你工作上的动力。
            对于每一对声明，你都有5分去分配，以表示你对它们的重视程度。你的 重量分配应该表示你对每一个问题在互相比较的情形下所作出的衡量。
            这 5 分必须依照以下其中的一个方式分配：
            5—0     4—1      3—2     2—3     1—4      0—5
            你不可以用半分的分值数目。
            这个作业应该在很自然以及快速的情形下进行，请记得需要的是你自己的 意见而不是他人的。
          </h1>
        </header>
      </div>

      <div class="qu-content">
        <div class="qu-item" v-for="(group, groupIndex) in groupedItems" :key="groupIndex">
          <div style="display: flex; align-items: center;">
            <h3 style="margin-right: 10px;">
              {{ `Q${groupIndex * 2 + 1}:&nbsp;&nbsp;&nbsp;${group[0].topic}` }}
              <span v-if="group[0].isMandatory"> *</span>
            </h3>
            <div style="flex: 1;"></div>
            <input type="number" min="0" max="5"
                   v-model="group[0].answer"
                   :required="group[0].isMandatory"
                   @input="validateGroup(group)"
                   style="font-size: 16px;">
          </div>
          <div style="display: flex; align-items: center;">
            <h3 style="margin-right: 10px;">
              {{ `Q${groupIndex * 2 + 2}:&nbsp;&nbsp;&nbsp;${group[1].topic}` }}
              <span v-if="group[1].isMandatory"> *</span>
            </h3>
            <div style="flex: 1;"></div>
            <input type="number" min="0" max="5"
                   v-model="group[1].answer"
                   :required="group[1].isMandatory"
                   @input="validateGroup(group)"
                   style="font-size: 16px;">
          </div>
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
        <footer>
          <span @click="isShowPrompt = false; iterator && iterator.next()">确定</span>
          <span @click="isShowPrompt = false">取消</span>
        </footer>
      </div>
    </div>
    <Modal :visible.sync="showModal">
      <TestDemo  :chartData="dataToPass"/>
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
      dataToPass:[]
    }
  },

  beforeRouterEnter(to, from, next) {
    let id = to.params.id;
    let item = {};
    if (id !== 0) {
      let length = Store.fetch().length;
      if (id < 0 || id > length) {
        alert('非法路由');
        next('');
      } else {
        item = Store.fetch()[id - 1];
      }

      if (item.state === 0) {
        next();
      } else {
        alert('非法路由');
        next('/');
      }
    } else {
      next();
    }
  },

  created() {
    this.getData();
  },

  methods: {
    validateGroup(group) {
      const total = group.reduce((sum, item) => sum + (parseInt(item.answer) || 0), 0);
      if (total > 5) {
        alert('每组的答案总和不能超过 5');
        // 这里可以选择重置最后一个输入框的值
        group[group.length - 1].answer = 5 - (total - group[group.length - 1].answer);
      }
    },
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

    checkboxAnswer(event, index, answer) {
      if (event.target.checked) {
        answer.push(index);
      } else {
        answer.splice(answer.indexOf(index), 1);
      }
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

    sendAnswer(resultMap) {
      this.showModal = true;

    },

    * submitBtn() {
      console.log(this.groupedItems)
      console.log(this.questions)
      let resultMap = new Map();
      // 循环 this.questions累加值并转为map
      this.questions.forEach(question => {
        let key = question.value;
        let value = question.answer;
        if(value!==""&&value!==null){
          // 如果 Map 中已经存在相同的 key，则将 value 相加
          if (resultMap.has(key)) {
            let oldValue = resultMap.get(key);
            let newValue = parseInt(oldValue) + parseInt(value);
            resultMap.set(key, newValue);
          } else {
            resultMap.set(key, value);
          }
        }

      });
      console.log("resultMap->",resultMap)

      //A-Z排序并专为数组
      let sortedArray = Array.from(resultMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0])) // 按键排序
        .map(entry => entry[1]); // 提取值并转换为数组
      this.dataToPass = sortedArray
      console.log("sortarr->",sortedArray)

      let text = ``;
      if (!this.requireValidate()) {
        text = `有必填项未填写，无法提交！`;
        this.iterator = null;
      } else {
        text = `确认提交问卷吗？`
      }

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
  padding: 10px;
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

@media screen and (max-width: 768px) {
  .container {
    padding: 5px;
    font-size: 12px;
  }

  h3 {
    font-size: 14px;
  }

  input[type="number"] {
    font-size: 12px;
    width: 40px;
  }
}
</style>
