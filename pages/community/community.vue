<template>
	<!--
	 本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2584
	 uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
	 uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
	 unicloud-db 组件文档：https://uniapp.dcloud.io/uniCloud/unicloud-db
	 DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
	 -->
	<view>
		<!-- 刷新页面后的顶部提示框 -->
		<view class="tips" :class="{ 'tips-ani': tipShow }">为您更新了10条最新动态</view>
<!-- 		<view v-on:click="get()">查询列表云函数</view>
		<view @click="getS">查询列表云对象</view> -->
		
	<!-- 	<unicloud-db   ref="udb" v-slot:default="{data, loading, error, options}" :options="formData" :collection="collection"
		 :field="field" @load="load"> -->
			<!-- 基于 uni-list 的页面布局 -->
			<uni-list v-if="canUse">
				<!-- to 属性携带参数跳转详情页面，当前只为参考 -->
				<uni-list-item direction="column" v-for="item in data" :key="item.id" :to="'/pages/detail/detail?id='+item._id+'&title='+item.title">
					<!-- 通过header插槽定义列表的标题 -->
					<template v-slot:header>
						<view class="uni-title">{{item.title}}</view>
					</template>
					<!-- 通过body插槽定义列表内容显示 -->
					<template v-slot:body>
						<view class="uni-list-box">
							<view class="uni-thumb">
								<!-- 当前判断长度只为简单判断类型，实际业务中，根据逻辑直接渲染即可 -->
								<image :src="item.avatar.length > 3 ?item.avatar : item.avatar[0]" mode="aspectFill"></image>
							</view>
							<view class="uni-content">
								<view class="uni-title-sub uni-ellipsis-2">{{item.excerpt}}</view>
								<view class="uni-note">{{ item.user_name }} {{ item.last_modify_date }}</view>
							</view>
						</view>
					</template>
					<!-- 同步footer插槽定义列表底部的显示效果 -->
					<template v-slot:footer>
						<view class="uni-footer">
							<text class="uni-footer-text">评论</text>
							<text class="uni-footer-text">点赞</text>
							<text class="uni-footer-text">分享</text>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
			<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
<!-- 			<uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" /> -->
	<!-- 	</unicloud-db> -->
	</view>
</template>

<script>
	//判断当前环境是否支持云对象。云对象详情：https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
	let canUse = true,cloudObjectDemo;
	if (uniCloud.importObject) {
		cloudObjectDemo = uniCloud.importObject('cloud-lists');
	} else {
		canUse = false
	}
	export default {
		components: {},
		data() {
			return {
				// 数据表名
				collection: 'opendb-news-articles',
				// 查询字段，多个字段用 , 分割
				field: '_id,mode,avatar,title,user_name,excerpt,last_modify_date',
				formData: {
					status: 'loading' // 加载状态
				},
				tipShow: false ,// 是否显示顶部提示框
				canUse,
				data:[],
				page:0
				
			};
		},
		onLoad() {
			this.fetch()
		},
		methods: {
			//云函数
			get() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'get',
					data:{page:this.page}
				}).then((res) => {
					uni.hideLoading()
					// uni.showModal({
					// 	content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
					// 	showCancel: false
					// })
					this.page+=1
					console.log(res)
					this.data=res.result.data
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			//云对象
			fetch() {
				uni.showLoading({
					title: '处理中...'
				})
				cloudObjectDemo.get({page:this.page}).then((res) => {
					uni.hideLoading()
					// uni.showModal({
					// 	content: `查询成功，获取数据列表为：${JSON.stringify(res)}`,
					// 	showCancel: false
					// })
					this.page+=1
					console.log(res)
					this.data=res.data
					
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			
		
			},
			
				toRedisPage() {
					uni.navigateTo({
						url: '/pages/cloudFunction/redis/redis'
					})
				},
			
		
		/**
		 * 下拉刷新回调函数
		 */
		onPullDownRefresh() {
			console.log('onPullDownRefresh====')
			
			uni.showLoading({
				title: '处理中...'
			})
			cloudObjectDemo.get({page:this.page}).then((res) => {
				uni.hideLoading()
				this.data=res.data
				this.tipShow = true
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.tipShow  = false
				},1000)
				// uni.stopPullDownRefresh()
				
			}).catch((err) => {
				uni.hideLoading()
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				})
				console.error(err)
			})
			this.formData.status = 'more'
			// this.$refs.udb.loadData({
			// 	clear: true
			// }, () => {
				this.tipShow = true
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.tipShow  = false
				},1000)
				uni.stopPullDownRefresh()
			// })
		},
		/**
		 * 上拉加载回调函数
		 */
		onReachBottom() {
			this.$refs.udb.loadMore()
		}
	};
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.content {
		width: 100%;
		display: flex;
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
