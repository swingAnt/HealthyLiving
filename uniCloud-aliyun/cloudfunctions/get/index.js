'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const page=event.page
	const collection = db.collection('opendb-news-articles')
	const res = await collection.skip(page*10).limit(10).get()
	  // .where('status == "onsale"')
	  // .skip(20) // 跳过前20条
	  // .limit(20) // 获取20条
	console.log('云函数',res)
	return res
};
