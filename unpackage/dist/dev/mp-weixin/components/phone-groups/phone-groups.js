"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isCard: false
    };
  },
  methods: {
    IsCard(e) {
      this.isCard = e.detail.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.isCard ? "checked" : ""),
    b: $data.isCard ? true : false,
    c: common_vendor.o((...args) => $options.IsCard && $options.IsCard(...args)),
    d: common_vendor.n($data.isCard ? "no-card" : ""),
    e: common_vendor.n($data.isCard ? "checked" : ""),
    f: $data.isCard ? true : false,
    g: common_vendor.o((...args) => $options.IsCard && $options.IsCard(...args)),
    h: common_vendor.n($data.isCard ? "margin-top" : ""),
    i: common_vendor.f($data.isCard ? 9 : 1, (item, index, i0) => {
      return {
        a: index
      };
    }),
    j: common_vendor.n($data.isCard ? "" : "only-img"),
    k: common_vendor.n($data.isCard ? "col-3 grid-square" : "col-1"),
    l: common_vendor.n($data.isCard ? "no-card" : ""),
    m: common_vendor.n($data.isCard ? "checked" : ""),
    n: $data.isCard ? true : false,
    o: common_vendor.o((...args) => $options.IsCard && $options.IsCard(...args)),
    p: common_vendor.n($data.isCard ? "no-card" : "")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/components/phone-groups/phone-groups.vue"]]);
wx.createComponent(Component);
