<template>
	<view class="content">
	<scroll-view scroll-y class="page">
		<lunbo></lunbo>
		<card-view></card-view>
		<view class="cu-bar tabbar bg-white shadow footer">
				<view class="action" @click="NavChange" data-cur="basics">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='basics'?'text-green':'text-gray'">首页</view>
				</view>
				<view class="action" @click="NavChange" data-cur="component">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='component'?'text-green':'text-gray'">商场</view>
				</view>
				<view class="action" @click="NavChange" data-cur="plugin">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
				</view>
		</view>
		
	</scroll-view>
	</view>
	
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
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
