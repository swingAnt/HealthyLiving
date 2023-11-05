<template>
	<view class="container">
		<image src="https://i2.vzan.cc/image/gif/2018/9/10/10174293d88536865b46ed9e7b4df9c4207e65.gif"></image>
		<scroll-view class="scroll-view"  scroll-y="true" refresher-enabled="true"
			:refresher-triggered="triggered" :refresher-threshold="100" refresher-background="#e825685e"
			@refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
			@refresherabort="onAbort">
			<picker class="picker" mode="selector" :range="lotteryTypes" @change="onPickerChange">
				<view  class="gradient-text">{{lotteryTypes[selectedLotteryType]}}</view>
			</picker>
			<view  class="lottery-number" v-for="(item, index) in lotteryNumbers" :key="index">

				<view v-if="selectedLotteryType==1||selectedLotteryType==0" class="lottery-red-number" v-for="(i, a) in item.red" :key="a">
					{{ i }}
				</view>
				<view v-if="selectedLotteryType==1||selectedLotteryType==0"  class="lottery-blue-number" v-for="(k, b) in item.blue" :key="b">
					{{ k }}
				</view>
				<view v-if="selectedLotteryType==2" class="lottery-purple-number" v-for="(i, a) in item" :key="a">
					{{ i }}
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				triggered: false,
				lotteryTypes: ['双色球', '大乐透','七星彩'],
				selectedLotteryType: 0,
				lotteryNumbers: []
			}
		},
		onLoad() {
			this._freshing = false;
			this.triggered = true;
			this.onRefresh();
		},
		methods: {
			onPulling(e) {
				console.log("onpulling", e);
			},
			onPickerChange(e) {
				this.selectedLotteryType = e.detail.value;
				this.onRefresh();
			},
			generateLotteryNumbers() {
				let blueBalls = [];
				while (blueBalls.length < 6) {
					let blue = Math.floor(Math.random() * 16) + 1;
					if (!blueBalls.includes(blue)) {
						blueBalls.push(blue);
					}
				}

				let lotteryNumbers = [];
				for (let i = 0; i < 6; i++) {
					let redBalls = [];
					while (redBalls.length < 6) {
						let red = Math.floor(Math.random() * 33) + 1;
						if (!redBalls.includes(red)) {
							redBalls.push(red);
						}
					}
					redBalls.sort((a, b) => a - b);
					lotteryNumbers.push({
						red: redBalls,
						blue: [blueBalls[i]]
					});
				}

				return lotteryNumbers;
			},

			generateLotteryNumbers1() {
				let allBlueBalls = [];
				while (allBlueBalls.length < 12) {
					let blue = Math.floor(Math.random() * 12) + 1;
					if (!allBlueBalls.includes(blue)) {
						allBlueBalls.push(blue);
					}
				}

				let lotteryNumbers = [];
				for (let i = 0; i < 6; i++) {
					let redBalls = [];
					while (redBalls.length < 5) {
						let red = Math.floor(Math.random() * 35) + 1;
						if (!redBalls.includes(red)) {
							redBalls.push(red);
						}
					}
					redBalls.sort((a, b) => a - b);

					let blueBalls = allBlueBalls.slice(i * 2, i * 2 + 2);
					lotteryNumbers.push({
						red: redBalls,
						blue: blueBalls
					});
				}

				return lotteryNumbers;
			},
			generateSevenStarLotteryNumbers() {
			    let lotteryNumbers = [];
			    for(let i = 10; i > 1; i--) {
			        let group = [];
			        while(group.length < i) {
			            let num = Math.floor(Math.random() * 10);
			            if(!group.includes(num)) {
			                group.push(num);
			            }
			        }
			        lotteryNumbers.push(group);
			    }
			
			    return lotteryNumbers;
			},
			onRefresh() {

				this.triggered = false;
				this._freshing = false;
				if (this._freshing) return;
				this._freshing = true;
				// setTimeout(() => {
				//     this.triggered = false;
				//     this._freshing = false;
				// }, 1000)
				// this.triggered = false;
				// this._freshing = false;
				// setTimeout(() => {

				this.triggered = false;
				this._freshing = false;
				// 模拟获取新数据
				console.log('this.selectedLotteryType', this.selectedLotteryType)


				if (this.selectedLotteryType == 0) {
					this.lotteryNumbers = this.generateLotteryNumbers();
				} else if (this.selectedLotteryType == 1) {
					this.lotteryNumbers = this.generateLotteryNumbers1();

				}else if (this.selectedLotteryType == 2) {
					this.lotteryNumbers = this.generateSevenStarLotteryNumbers();

				}
				console.log('this.lotteryNumbers', this.lotteryNumbers)

				// }, 500)

			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			}
		}
	}
</script>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.scroll-view {
		width: 100%;
		height: 318px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.picker {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #f5f5f5;
		text-align: center;
		font-size: 16px;
		color: #333;
		border-bottom: 1px solid #ccc;
		
	}
.gradient-text {
background: linear-gradient(45deg, #f1d800, red, #673AB7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 5s ease-in-out infinite;
}

@keyframes gradient {
    0% { background-position: 0% }
    100% { background-position: 100% }
}
	.lottery-number {
		width: 100%;
		height: 46px;
		line-height: 46px;
		text-align: center;
		font-size: 16px;
		color: #333;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.lottery-red-number {
		background: red;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		color: white;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lottery-blue-number {
		background: #03A9F4;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		color: white;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	.lottery-purple-number {
		background: #9C27B0;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		color: white;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
</style>