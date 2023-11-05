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
  }, $data.PageCur == "component" ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
