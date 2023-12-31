// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
const testCollection = db.collection('opendb-news-articles')
module.exports = {
	async add({ name, subType, createTime }) {
		let res = await testCollection.add({ name, subType, createTime })
		return res
	},
	async remove() {
		let docList = await testCollection.limit(1).get()
		if (!docList.data || docList.data.length === 0) {
			return {
				status: -1,
				msg: '集合opendb-news-articles内没有数据'
			}
		}
		let res = await testCollection.doc(docList.data[0]._id).remove()
		if (res.deleted === 1) {
			return {
				status: 0,
				msg: '成功删除opendb-news-articles内第一条数据'
			}
		} else {
			return {
				status: -2,
				msg: '删除数据失败'
			}
		}
	},
	async update({name,subType,createTime}) {
		const docList = await testCollection.limit(1).get();
		if (!docList.data || docList.data.length === 0) {
			return {
				status: -1,
				msg: '集合opendb-news-articles内没有数据'
			}
		}
		const res = await testCollection.doc(docList.data[0]._id).update({name,subType,createTime});
		if (res.updated === 1) {
			let result = Object.assign({}, {
				_id: docList.data[0]._id
			}, {name,subType,createTime})
			return {
				status: 0,
				msg: `集合第一条数据由${JSON.stringify(docList.data[0])}修改为${JSON.stringify(result)}`
			}
		} else {
			return {
				status: -1,
				msg: `集合opendb-news-articles内没有数据`
			}
		}
	},
	async get({page}) {
		const res = await testCollection.skip(page*10).limit(10).get()
		console.log('云对象',res)
		return res
	},
	async useCommon() {
		const {
			secret,
			getVersion
		} = require('hello-common')
		let version = getVersion()
		console.log("secret: " + secret);
		console.log("version: " + version);
		return {
			secret,
			version
		}
	}
}