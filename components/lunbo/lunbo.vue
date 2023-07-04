<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<image src="/static/images/a.jpg" mode="widthFix" class="response"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/images/b.jpg" mode="widthFix" class="response"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/images/c.jpg" mode="widthFix" class="response"></image>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>
<script>
export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
    
    }
}
</script>
<style>
	.response{
		width: 100%;
	}
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
