<template>
	<view class="content">
	<scroll-view scroll-y class="page">
		<lunbo v-if="PageCur=='basics'"></lunbo>		
		<card-view v-if="PageCur=='basics'"></card-view>
			<message v-if="PageCur=='message'"></message>
			<phone-groups  v-if="PageCur=='component'"></phone-groups>
<!-- 		<view class="cu-bar tabbar bg-white shadow footer">
				<view class="action" @click="NavChange" data-cur="basics">
		
						<image class='cuIcon-cu-image' :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
					<view :class="PageCur=='basics'?'text-green':'text-gray'">首页</view>
				</view>
				<view class="action" @click="NavChange" data-cur="component">
						<image class='cuIcon-cu-image' :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
					<view :class="PageCur=='component'?'text-green':'text-gray'">空间</view>
				</view>
				<view class="action" @click="NavChange" data-cur="message">
						<image class='cuIcon-cu-image' :src="'/static/tabbar/basics' + [PageCur == 'message'?'_cur':''] + '.png'"></image>
					<view :class="PageCur=='message'?'text-green':'text-gray'">消息</view>
				</view>
				<view class="action" @click="NavChange" data-cur="plugin">
						<image class='cuIcon-cu-image' :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
					<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
				</view>
		</view>
		 -->
	</scroll-view>
	</view>
	
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics',
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>
<style>
	.action{
		    display: flex;
		    align-items: center;
		    flex-direction: column;
		    justify-content: center;
	}
	.page {
		height: 100vh;
		position: relative;
	}
	.footer{
		    display: flex;
		    position: -webkit-sticky;
		    position: sticky;
		    bottom: 0;
			justify-content: space-between;
			padding: 0vw 5vw;
			background: white;
	}
	.cuIcon-cu-image{
		width: 20px;
		height: 20px;
	}
	.text-green{
		color: #4CAF50;
		    font-weight: 600;
		    font-size: 16px;
	}
	.text-gray{
		color: #8799a3;
		    font-weight: 600;
		    font-size: 16px;
	}
</style>
