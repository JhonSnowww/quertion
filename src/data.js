/*
* @Author: NiceMing
* @Date:   2020-03-02 18:36:05
*/
var list = [
		{
			"id": 1,
			"title": "问卷调查1",
			"state": 1,
			"stateName": "发布中",
			"time": "2020-07-01",
			"questions": [
        {
          "id":"1",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "得到一份高薪的职业是很重要的，即使你在工作上不会得到表彰。",
          "isMandatory": false
        },
        {
          "id":"2",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "在工作上得到表彰是很重要的，就算是赚少一些也没关系。",
          "isMandatory": false
        },
				{
          "id":"3",
					"type":"text",
          "value":"D",
          "answer":0,
					"topic":"最好是和你的经理有一份良好的关系，就算那将表示减少你的责任。",
					"isMandatory": false
				},
        {
          "id":"4",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "最好是有更多的责任，就算那将表示将会和你的经理更难相处。",
          "isMandatory": false
        },
        {
          "id":"5",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "和你的经理有一份良好的关系是很重要的，就算意味着你将做一些无趣的工作。",
          "isMandatory": false
        },
        {
          "id":"6",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "做有趣的工作是很重要的，就算那将表示和你的经理的关系会不太好。",
          "isMandatory": false
        },
        {
          "id":"7",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "能够升职是很重要的，就算那将表示增加收入的机会将减少。",
          "isMandatory": false
        },
        {
          "id":"8",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "有一份高薪的职业是很重要的，就算那将表示会减少升职的机会。",
          "isMandatory": false
        },
        {
          "id":"9",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "能够从一份相当无意义的任务上得到表彰是比去实行一份有意义但不受表彰的任务来得好。",
          "isMandatory": false
        },
        {
          "id":"10",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "有一份有意义的任务是比去实行一份不重要的任务但会得到赞赏和表彰来得好。",
          "isMandatory": false
        },
        {
          "id":"11",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": "你会选择去做一份无趣的工作，但必须得和你的同事们合作愉快。",
          "isMandatory": false
        },
        {
          "id":"12",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "你会选择去做一份有刺激性的工作，就算那将表示你会在同事们中不受欢迎。",
          "isMandatory": false
        },
        {
          "id":"13",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "如果你要表现的好，最重要的便是有特定的责任和决定的权力。",
          "isMandatory": false
        },
        {
          "id":"14",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "要有好的表现，最重要的便是有了一个好的薪金保证。",
          "isMandatory": false
        },
        {
          "id":"15",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "有一份能和经理有着良好关系的工作是很重要的，就算那将表示薪金会少了一些。",
          "isMandatory": false
        },
        {
          "id":"16",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "有一份高薪的工作是很重要的，就算那将表示和经理合作会有困难。",
          "isMandatory": false
        },
        {
          "id":"17",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "你宁可选择一份有责任性的工作，就算那将表示更少的表彰和称赞。",
          "isMandatory": false
        },
        {
          "id":"18",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "你愿意选择一份有更少责任的工作，但必须得到工作上的表彰和称赞。",
          "isMandatory": false
        },
        {
          "id":"19",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "每当你得到表彰和称赞时，你都会对从事的这份工作感到十分兴奋。",
          "isMandatory": false
        },
        {
          "id":"20",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "如果你和你的经理有一份很好的关系以及合作良好的话，那一起工作会很兴奋。",
          "isMandatory": false
        },
        {
          "id":"21",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "你宁可觉得你在一份困难的工作中有成就感，好过面对一份更容易但好待遇的工作。",
          "isMandatory": false
        },
        {
          "id":"22",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "你宁可有份好待遇的工作，好过另一份必须克服问题的工作。",
          "isMandatory": false
        },
        {
          "id":"23",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": "当你知道你有着同事们的支持时你会觉得工作上有更高的满足远比当你在一份工作上做得好时所得到的表彰要有成就感。",
          "isMandatory": false
        },
        {
          "id":"24",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "你认为从你做得好的工作中所受到的表彰和称赞，远比从你同事们那儿受到支持更有成就感。",
          "isMandatory": false
        },
        {
          "id":"25",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": "知道他人很喜欢和你做同事，远比工作上所有的责任更充满刺激。",
          "isMandatory": false
        },
        {
          "id":"26",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "知道你有一份有责任的工作，远比受到你的同事们的欢迎更充满刺激。",
          "isMandatory": false
        },
        {
          "id":"27",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "你觉得有一份有着更大责任的工作会有趣，就算是它没有升职的机会。",
          "isMandatory": false
        },
        {
          "id":"28",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "你觉得有一份有升职机会的工作会有趣得多，就算工作上少了很多责任。",
          "isMandatory": false
        },
        {
          "id":"29",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "你认为收到你的成绩的正确反馈比受到表彰和称赞来得更重要。",
          "isMandatory": false
        },
        {
          "id":"30",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "你认为受到表彰和称赞是比知道你的工作成功与否来得更重要。",
          "isMandatory": false
        },
        {
          "id":"31",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": "你觉得有你的同事们的支持是比和经理有一个好的关系来得更重要。",
          "isMandatory": false
        },
        {
          "id":"32",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "你觉得你和你的经理有一个好的关系是比你有你的同事们的支持来得更重要。",
          "isMandatory": false
        },
        {
          "id":"33",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "你会选择一份带有责任的工作，就算它不是很有趣。",
          "isMandatory": false
        },
        {
          "id":"34",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "你会选择一份有趣的工作，就算它会带有更少的责任。",
          "isMandatory": false
        },
        {
          "id":"35",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "要有十分的工作满足，薪金和所付出的代价是要相等的，即使它是一份困苦的工作。",
          "isMandatory": false
        },
        {
          "id":"36",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "要有十分的工作满足，有一份有意义的工作是很重要的，就算它有着更少的薪金。",
          "isMandatory": false
        },
        {
          "id":"37",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "如果你会改变你的工作的话，那是因为你目前的工作没有升职的机会。",
          "isMandatory": false
        },
        {
          "id":"38",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "如果你会改变你的工作的话，那是因为在你的目前的工作上没有任何成就感。",
          "isMandatory": false
        },
        {
          "id":"39",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "有着一个能判断你的工作上成功与否的资讯系统是比必须通过你的经理才知道来得更重要。",
          "isMandatory": false
        },
        {
          "id":"40",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "有一个和你的经理良好的关系是比有一个能够强调你的私人的成功的资讯系统来得更重要。",
          "isMandatory": false
        },
        {
          "id":"41",
          "type": "text",
          "value":"D",
          "answer":0,
          "topic": "最好和你的经理保持良好的关系，不应因为升职而对这份关系有所不利。",
          "isMandatory": false
        },
        {
          "id":"42",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "最好是接受升职，就算那将表示你和你目前的经理的关系将会因此而恶化。",
          "isMandatory": false
        },
        {
          "id":"43",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": "你的工作内容将决定你是否一直留在此公司，就算没有机会升职。",
          "isMandatory": false
        },
        {
          "id":"44",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "就算这新的工作是处理那些例行的公事，你还会选择这个升职机会。",
          "isMandatory": false
        },
        {
          "id":"45",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": "与团队一起工作而又有支持和合作是比独自工作来得更为重要，就算那份隔离的工作有更高的薪金。",
          "isMandatory": false
        },
        {
          "id":"46",
          "type": "text",
          "value":"A",
          "answer":0,
          "topic": "知道你得到好待遇是那么的重要，就算那表示你必须独自工作。",
          "isMandatory": false
        },
        {
          "id":"47",
          "type": "text",
          "value":"C",
          "answer":0,
          "topic": "有特定责任的工作给你一种积极的感觉，即使你不是常常成功以及可以达到期望。",
          "isMandatory": false
        },
        {
          "id":"48",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "可以做到别人对你的期望好过有着更大的责任。",
          "isMandatory": false
        },
        {
          "id":"49",
          "type": "text",
          "value":"B",
          "answer":0,
          "topic": "得到工作上的表彰是比得到升职来得好。",
          "isMandatory": false
        },
        {
          "id":"50",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "得到升职比较好，就算那将表示被表彰的机会将在以后的日子里消失。",
          "isMandatory": false
        },
        {
          "id":"51",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": " 对你来说，得到同事们的支持和合作是比得到升职但却被他们孤立来得更重要。",
          "isMandatory": false
        },
        {
          "id":"52",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "被升职是比较好，就算那将表示会被同事们孤立。",
          "isMandatory": false
        },
        {
          "id":"53",
          "type": "text",
          "value":"F",
          "answer":0,
          "topic": "现在的工作上做的成功是比有一份更有趣但你会常常失败的工作来得好。",
          "isMandatory": false
        },
        {
          "id":"54",
          "type": "text",
          "value":"H",
          "answer":0,
          "topic": " 有一份有趣但会常常失败的工作，会比一份简单而繁复的工作来得好。",
          "isMandatory": false
        },
        {
          "id":"55",
          "type": "text",
          "value":"I",
          "answer":0,
          "topic": " 你宁可在工作中偶尔失败好过知道工作上你没有你的同事们的支持。",
          "isMandatory": false
        },
        {
          "id":"56",
          "type": "text",
          "value":"E",
          "answer":0,
          "topic": "你宁可知道你常常在工作上做的成功，就算那将表示你没有得到同事们的支持。",
          "isMandatory": false
        },
			]
		},
		{
			"id": 2,
			"title": "问卷调查2",
			"state": 1,
			"stateName": "未发布",
			"time": "2020-09-01",
			"questions": [
				{
					"type": "radio",
					"topic": "单选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
				{
					"type": "checkbox",
					"topic": "多选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
				{
					"type": "text",
					"topic": "文本题",
					"isMandatory": false
				}
			]
		},
	];


var template = {
			radio: {
					"type": "radio",
					"topic": "单选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
			checkbox: {
					"type": "checkbox",
					"topic": "多选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
			textarea: {
					"type": "textarea",
					"topic": "文本题",
					"isMandatory": false
				}
		};

var date = function(year, month) {
	// 若未传入参数或参数不完整 即获取当月的数据
	if (year === undefined || month === undefined) {
		let today = new Date();
		year = today.getFullYear();
		month = today.getMonth();
	}

	// 获取该月第一天和该天是礼拜几
	var firstDay = new Date(year, month, 1);
	var firstDayWeekday = firstDay.getDay() || 7;

	// 获取该月最后一天日期和该天是礼拜几
	var lastDay = new Date(year, month+1, 0);
	var lastDate = lastDay.getDate();


	// 获取上个月需显示天数和上月最后一天日期
	var lastDayOfPrevMonth = new Date(year, month, 0);
	var lastDateOfPrevMonth = lastDayOfPrevMonth.getDate();
	var prevMonthDayCount = firstDayWeekday - 1; 	 // 日历起始日为星期一
	// var prevMonthDayCount = firstDayWeekday; // 日历起始日为星期日

	var count = 0;
	var dayArr = [];
	var weekArr = [];

	for (let j = 0; j < 6; j++) {
		for (let i = 0;  i < 7; i++) {
			count++;
			let showDate,
			 	showMonth,
			  	date = count - prevMonthDayCount;

			if (date <= 0) {
				// 上个月
				showDate = lastDateOfPrevMonth + date;
				showMonth = month;
			}
			else if (date > lastDate) {
				// 下个月
				showDate = date - lastDate;
				showMonth = month + 2;
			}
			else {
				showDate = date;
				showMonth = month + 1;
			}

			if (showMonth >= 13) showMonth = 1;
			if (showMonth <= 0) showMonth = 12;

			dayArr.push({
				date: date,
				month: showMonth,
				showDate: showDate
			});
		}
		weekArr.push(dayArr.slice());
		dayArr.length = 0;
	}

	// 重新获取当前年月 以确保数据准确
	year = firstDay.getFullYear();
	month = firstDay.getMonth() + 1;

	// 此处的 flag 是用来判断最后一周是不是全部属于下个月 是则移除最后一周
	var flag = weekArr[5].every( item => item.month !== month);
	if (flag) {
		weekArr.pop();
	}

	return {
		year: year,
		month: month,
		weeks: weekArr
	};
};


export default {
	list,
	date,
	template
}

