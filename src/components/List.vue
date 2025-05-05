<template>
  <div class="container">
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>

    <div class="add-wrapper" v-if="!quList.length">
			<p @click="$router.push({name: 'Edit', params: {id: 0}})">+ 新建问卷</p>
		</div>
		<div class="list-wrapper" v-else>
			<ul>
				<li>动力测试</li>
				<li><router-link tag="span" :to="`/fill`">查看问卷</router-link></li>
			</ul>
      <ul>
        <li>自我领导风格评测</li>
        <li><router-link tag="span" :to="`/SurveyQuestion`">查看问卷</router-link></li>
      </ul>
		</div>
		<div class="overlay" v-show="isShowPrompt">
			<div class="prompt-box">
				<header>
					<span>提示</span>
					<a href="javascript:;" @click="isShowPrompt = false">&times;</a>
				</header>
				<p>{{ promptText }}</p>
				<footer>
					<span @click="iterator.next(); isShowPrompt = false">确定</span>
					<span @click="isShowPrompt = false">取消</span>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Store from '../store.js'
import data from '../data.js'

export default {
	name: 'List',
	data() {
		return {
			quList: [],
			iterator: {},
			isShowPrompt: false,
			promptText: ''
		}
	},

	created() {
		let curTime = Date.now();

		this.quList = data.list;
		this.quList.forEach((item) => {
			if (item.state === 1) {
				let itemTime = new Date(item.time.replace(/-/g, ','))*1;
				if (itemTime < curTime) {
					item.state = 2;
					item.stateName = '已结束';
				}
			}
		})
	},

	methods: {
		checkItem(item, flag = null) {
			if (typeof item.checked === 'undefined') {
				Vue.set(item, 'checked', true);
			}
			else if (flag !== null) {
				item.checked = !flag;
			}
			else {
				item.checked = !item.checked;
			}
		},

		checkAll(flag) {
			this.quList.forEach( item => {
				this.checkItem(item, flag)
			});
		},

		showPrompt(text) {
			this.promptText = text;
			this.isShowPrompt = true;
		},

		*deleteItem(item) {
			yield this.showPrompt(`确认要删除《${item.title}》？`);
			let index = this.quList.indexOf(item);
			yield this.quList.splice(index, 1);
		},

		*deleteCheckedItems() {
			let checkedList = this.quList.filter( item => item.checked);
			if (!checkedList.length) {
				return;
			}
			yield this.showPrompt('确认要删除所选问卷？');
			yield this.quList = this.quList.filter( item => !item.checked);
		},

		*editItem(item) {
			yield this.showPrompt(`确认要编辑《${item.title}》？`);
			yield this.$router.push({name: 'Edit', params: {id: item.id}});
		}
	},

	computed: {
		isCheckedAll() {
			return this.quList.every( item => item.checked);
		}
	},

	watch: {
		quList: {
			handler(list) {
				list.forEach((item, index) => item.id = index + 1);
				Store.save(list);
			},
			deep: true
		}
	}
}
</script>

<style scoped lang="scss">
@import '../style/_List.scss';
</style>
