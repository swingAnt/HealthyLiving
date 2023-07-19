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
  const _easycom_message2 = common_vendor.resolveComponent("message");
  const _easycom_phone_groups2 = common_vendor.resolveComponent("phone-groups");
  (_easycom_lunbo2 + _easycom_card_view2 + _easycom_message2 + _easycom_phone_groups2)();
}
const _easycom_lunbo = () => "../../components/lunbo/lunbo.js";
const _easycom_card_view = () => "../../components/card-view/card-view.js";
const _easycom_message = () => "../../components/message/message.js";
const _easycom_phone_groups = () => "../../components/phone-groups/phone-groups.js";
if (!Math) {
  (_easycom_lunbo + _easycom_card_view + _easycom_message + _easycom_phone_groups)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.PageCur == "basics"
  }, $data.PageCur == "basics" ? {} : {}, {
    b: $data.PageCur == "basics"
  }, $data.PageCur == "basics" ? {} : {}, {
    c: $data.PageCur == "message"
  }, $data.PageCur == "message" ? {} : {}, {
    d: $data.PageCur == "component"
  }, $data.PageCur == "component" ? {} : {}, {
    e: "/static/tabbar/basics" + [$data.PageCur == "basics" ? "_cur" : ""] + ".png",
    f: common_vendor.n($data.PageCur == "basics" ? "text-green" : "text-gray"),
    g: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args)),
    h: "/static/tabbar/component" + [$data.PageCur == "component" ? "_cur" : ""] + ".png",
    i: common_vendor.n($data.PageCur == "component" ? "text-green" : "text-gray"),
    j: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args)),
    k: "/static/tabbar/basics" + [$data.PageCur == "message" ? "_cur" : ""] + ".png",
    l: common_vendor.n($data.PageCur == "message" ? "text-green" : "text-gray"),
    m: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args)),
    n: "/static/tabbar/plugin" + [$data.PageCur == "plugin" ? "_cur" : ""] + ".png",
    o: common_vendor.n($data.PageCur == "plugin" ? "text-green" : "text-gray"),
    p: common_vendor.o((...args) => $options.NavChange && $options.NavChange(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/workspace/HealthyLiving/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
