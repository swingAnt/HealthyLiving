"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "message",
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(4, (item, index, i0) => {
      return {
        a: common_vendor.s({
          backgroundImage: "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100" + (index + 2) + ".jpg)"
        }),
        b: common_vendor.n(_ctx.modalName == "move-box-" + index ? "move-cur" : ""),
        c: index,
        d: common_vendor.o((...args) => _ctx.ListTouchStart && _ctx.ListTouchStart(...args), index),
        e: common_vendor.o((...args) => _ctx.ListTouchMove && _ctx.ListTouchMove(...args), index),
        f: common_vendor.o((...args) => _ctx.ListTouchEnd && _ctx.ListTouchEnd(...args), index),
        g: "move-box-" + index
      };
    }),
    b: _ctx.modalName == null,
    c: common_vendor.n(_ctx.modalName != null ? "show" : "")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/lijunkai7/project/HealthyLiving/components/message/message.vue"]]);
wx.createComponent(Component);
