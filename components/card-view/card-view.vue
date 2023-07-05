<template>
	<view class="uni-card">
		<navigator hover-class='none' :url="'/pages/list/list?type=' + item.path" class="nav-li" navigateTo
			:class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
			v-for="(item,index) in list" :key="index">
			<view class="nav-name">{{item.name}}</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '饮食',
					path: 'each',
					color: 'purple',
					key: 1,
				}, {
					name: '运动',
					path: 'run',
					color: 'mauve',
					key: 2,
				}, {
					name: '养生',
					key: 3,
					path: 'run',
					color: 'pink',
				}, {
					name: '郊游',
					key: 4,
					path: 'run',
					color: 'brown',
				}, {
					name: '运动',
					key: 5,
					path: 'run',
					color: 'red',
				}, {
					name: '运动',
					key: 6,
					path: 'run',
					color: 'orange',
				}, {
					name: '运动',
					key: 7,
					path: 'run',
					color: 'green',
				}, {
					name: '运动',
					key: 8,
					path: 'run',
					color: 'olive',
				}, {
					name: '运动',
					key: 9,
					path: 'run',
					color: 'cyan',
				}, ]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.uni-card {
		display: flex;
		flex-wrap: wrap;
		background: #eae2e2;
		flex-direction: row;
		justify-content: space-between;
		padding: 4vw 2vw;
	}

	.nav-li {
		width: 30vw;
		height: 30vw;
		margin-bottom: 2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
	}
	.nav-name{
		
	}
	.bg-red {
		background-color: #e54d42;
		color: #ffffff;
	}

	.bg-orange {
		background-color: #f37b1d;
		color: #ffffff;
	}

	.bg-yellow {
		background-color: #fbbd08;
		color: #333333;
	}

	.bg-olive {
		background-color: #8dc63f;
		color: #ffffff;
	}

	.bg-green {
		background-color: #39b54a;
		color: #ffffff;
	}

	.bg-cyan {
		background-color: #1cbbb4;
		color: #ffffff;
	}

	.bg-blue {
		background-color: #0081ff;
		color: #ffffff;
	}

	.bg-purple {
		background-color: #6739b6;
		color: #ffffff;
	}

	.bg-mauve {
		background-color: #9c26b0;
		color: #ffffff;
	}

	.bg-pink {
		background-color: #e03997;
		color: #ffffff;
	}

	.bg-brown {
		background-color: #a5673f;
		color: #ffffff;
	}

	.bg-grey {
		background-color: #8799a3;
		color: #ffffff;
	}

	.bg-gray {
		background-color: #f0f0f0;
		color: #333333;
	}

	.bg-black {
		background-color: #333333;
		color: #ffffff;
	}

	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}

	.bg-shadeTop {
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01));
		color: #ffffff;
	}

	.bg-shadeBottom {
		background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1));
		color: #ffffff;
	}

	.bg-red.light {
		color: #e54d42;
		background-color: #fadbd9;
	}

	.bg-orange.light {
		color: #f37b1d;
		background-color: #fde6d2;
	}

	.bg-yellow.light {
		color: #fbbd08;
		background-color: #fef2ced2;
	}

	.bg-olive.light {
		color: #8dc63f;
		background-color: #e8f4d9;
	}

	.bg-green.light {
		color: #39b54a;
		background-color: #d7f0dbff;
	}

	.bg-cyan.light {
		color: #1cbbb4;
		background-color: #d2f1f0;
	}

	.bg-blue.light {
		color: #0081ff;
		background-color: #cce6ff;
	}

	.bg-purple.light {
		color: #6739b6;
		background-color: #e1d7f0;
	}

	.bg-mauve.light {
		color: #9c26b0;
		background-color: #ebd4ef;
	}

	.bg-pink.light {
		color: #e03997;
		background-color: #f9d7ea;
	}

	.bg-brown.light {
		color: #a5673f;
		background-color: #ede1d9;
	}

	.bg-grey.light {
		color: #8799a3;
		background-color: #e7ebed;
	}

	.bg-gradual-red {
		background-image: linear-gradient(45deg, #f43f3b, #ec008c);
		color: #ffffff;
	}

	.bg-gradual-orange {
		background-image: linear-gradient(45deg, #ff9700, #ed1c24);
		color: #ffffff;
	}

	.bg-gradual-green {
		background-image: linear-gradient(45deg, #39b54a, #8dc63f);
		color: #ffffff;
	}

	.bg-gradual-purple {
		background-image: linear-gradient(45deg, #9000ff, #5e00ff);
		color: #ffffff;
	}

	.bg-gradual-pink {
		background-image: linear-gradient(45deg, #ec008c, #6739b6);
		color: #ffffff;
	}

	.bg-gradual-blue {
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
	}
</style>