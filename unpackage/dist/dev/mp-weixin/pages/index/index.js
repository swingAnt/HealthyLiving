"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      PageCur: "basics"
    };
  },
  methods: {
    NavChange: function(e) {
      this.PageCur = e.currentTarget.dataset.cur;
    }
  }
};
if (!Array) {
  const _easycom_lunbo2 = common_vendor.resolveComponent("lunbo");
  const _easycom_card_view2 = common_vendor.resolveComponent("card-view");
  (_easycom_lunbo2 + _easycom_card_view2)();
}
const _easycom_lunbo = () => "../../components/lunbo/lunbo.js";
const _easycom_card_view = () => "../../components/card-view/card-view.js";
if (!Math) {
  (_easycom_lunbo + _easycom_card_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "/static/tabbar/basics" + [$data.PageCur == "basics" ? "_cur" : ""] + ".png",
    b: common_vendor.n($data.PageCur == "basics" ? "text-green" : "text-gray"),
    c: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args)),
    d: "/static/tabbar/component" + [$data.PageCur == "component" ? "_cur" : ""] + ".png",
    e: common_vendor.n($data.PageCur == "component" ? "text-green" : "text-gray"),
    f: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args)),
    g: "/static/tabbar/plugin" + [$data.PageCur == "plugin" ? "_cur" : ""] + ".png",
    h: common_vendor.n($data.PageCur == "plugin" ? "text-green" : "text-gray"),
    i: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/workspace/HealthyLiving/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
