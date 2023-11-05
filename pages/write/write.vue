<!-- <template>
	<view class="page">
			<checkbox-group class="check">
				<label>
					<checkbox value="cb" checked="true" />选中
				</label>
				<label>
					<checkbox value="cb" />未选中
				</label>
			</checkbox-group>
			<input class="uni-input" confirm-type="search" placeholder="请输入场景描述" />
			<scroll-view scroll-y class="container">
			<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
				<button type="warn" @tap="undo">撤销</button>
				</scroll-view>
		</view>


</template>

<script>
	export default {
		data() {
			return {
					placeholder: '开始输入...'
			}
		},
		methods: {
	onEditorReady() {
			    // #ifdef MP-BAIDU
			    this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
			    // #endif
			    
			    // #ifdef APP-PLUS || H5 ||MP-WEIXIN
			    uni.createSelectorQuery().select('#editor').context((res) => {
			      this.editorCtx = res.context
			    }).exec()
			    // #endif
			},
			undo() {
				this.editorCtx.undo()
			}
		}
	}
</script>
<style>
	.page {
		background: #9e9e9e12;
		height: 100vh;
		padding: 10px;
	}
	.check{
		margin-bottom: 10px;
	}
.container {
		padding: 10px;
		position: relative;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	button {
		margin-top: 10px;
	}
</style> -->
<template>
  <view class="container">
    <view class="editor-container">
      <editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
    </view>
    <button type="warn" @tap="undo">撤销</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      placeholder: '开始输入...'
    }
  },
  methods: {
    onEditorReady() {
      // #ifdef MP-BAIDU
      this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
      // #endif

      // #ifdef APP-PLUS || H5 || MP-WEIXIN
      uni.createSelectorQuery().select('#editor').context((res) => {
        this.editorCtx = res.context
      }).exec()
      // #endif
    },
    undo() {
      this.editorCtx.undo()
    }
  }
}
</script>

<style>
.container {
  padding: 10px;
}

.editor-container {
  width: 100%;
  height: 300px;
  background-color: #CCCCCC;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 10px;
}
</style>
