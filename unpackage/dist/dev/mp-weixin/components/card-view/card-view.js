"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [{
        name: "论坛",
        color: "purple",
        key: 1,
        path: "/pages/community/community"
      }, {
        name: "好运",
        color: "mauve",
        key: 2,
        path: "/pages/play/play"
      }, {
        name: "日记",
        key: 3,
        color: "pink",
        path: "/pages/write/write"
      }, {
        name: "郊游",
        key: 4,
        path: "run",
        color: "brown"
      }, {
        name: "运动",
        key: 5,
        path: "run",
        color: "red"
      }, {
        name: "运动",
        key: 6,
        path: "run",
        color: "orange"
      }, {
        name: "运动",
        key: 7,
        path: "run",
        color: "green"
      }, {
        name: "运动",
        key: 8,
        path: "run",
        color: "olive"
      }, {
        name: "运动",
        key: 9,
        path: "run",
        color: "cyan"
      }]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.path,
        c: common_vendor.n("bg-" + item.color),
        d: common_vendor.s({
          animation: "show " + ((index + 1) * 0.2 + 1) + "s 1"
        }),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/components/card-view/card-view.vue"]]);
wx.createComponent(Component);
