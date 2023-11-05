"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      placeholder: "开始输入..."
    };
  },
  methods: {
    onEditorReady() {
      common_vendor.index.createSelectorQuery().select("#editor").context((res) => {
        this.editorCtx = res.context;
      }).exec();
    },
    undo() {
      this.editorCtx.undo();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.placeholder,
    b: common_vendor.o((...args) => $options.onEditorReady && $options.onEditorReady(...args)),
    c: common_vendor.o((...args) => $options.undo && $options.undo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/pages/write/write.vue"]]);
wx.createPage(MiniProgramPage);
