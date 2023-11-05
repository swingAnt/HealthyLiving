<template>
  <view>
     <a ></a>
       <play v-if="type === 'play'"></play>
  </view>
</template>

<script>

// ... 其他组件
import a from '@/pages/a/a.vue'
import play from '@/pages/play/play.nvue'
export default {
  components: {
	  a,
	  play
  },
  data() {
    return {
  type: ''
    }
  },
  onLoad(options) {
    // 从 URL 中获取 type 参数
    this.type = options.type || ''
	console.log('this.type',this.type)
		console.log('this.type',this.type==='community')
  }
}
</script>

<style lang="scss">

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}
</style>
