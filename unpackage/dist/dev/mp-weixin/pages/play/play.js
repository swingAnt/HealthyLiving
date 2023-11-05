"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      triggered: false,
      lotteryTypes: ["双色球", "大乐透", "七星彩"],
      selectedLotteryType: 0,
      lotteryNumbers: []
    };
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
      for (let i = 10; i > 1; i--) {
        let group = [];
        while (group.length < i) {
          let num = Math.floor(Math.random() * 10);
          if (!group.includes(num)) {
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
      if (this._freshing)
        return;
      this._freshing = true;
      this.triggered = false;
      this._freshing = false;
      console.log("this.selectedLotteryType", this.selectedLotteryType);
      if (this.selectedLotteryType == 0) {
        this.lotteryNumbers = this.generateLotteryNumbers();
      } else if (this.selectedLotteryType == 1) {
        this.lotteryNumbers = this.generateLotteryNumbers1();
      } else if (this.selectedLotteryType == 2) {
        this.lotteryNumbers = this.generateSevenStarLotteryNumbers();
      }
      console.log("this.lotteryNumbers", this.lotteryNumbers);
    },
    onRestore() {
      this.triggered = "restore";
      console.log("onRestore");
    },
    onAbort() {
      console.log("onAbort");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.lotteryTypes[$data.selectedLotteryType]),
    b: $data.lotteryTypes,
    c: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    d: common_vendor.f($data.lotteryNumbers, (item, index, i0) => {
      return common_vendor.e($data.selectedLotteryType == 1 || $data.selectedLotteryType == 0 ? {
        a: common_vendor.f(item.red, (i, a, i1) => {
          return {
            a: common_vendor.t(i),
            b: a
          };
        })
      } : {}, $data.selectedLotteryType == 1 || $data.selectedLotteryType == 0 ? {
        b: common_vendor.f(item.blue, (k, b, i1) => {
          return {
            a: common_vendor.t(k),
            b
          };
        })
      } : {}, $data.selectedLotteryType == 2 ? {
        c: common_vendor.f(item, (i, a, i1) => {
          return {
            a: common_vendor.t(i),
            b: a
          };
        })
      } : {}, {
        d: index
      });
    }),
    e: $data.selectedLotteryType == 1 || $data.selectedLotteryType == 0,
    f: $data.selectedLotteryType == 1 || $data.selectedLotteryType == 0,
    g: $data.selectedLotteryType == 2,
    h: $data.triggered,
    i: common_vendor.o((...args) => $options.onPulling && $options.onPulling(...args)),
    j: common_vendor.o((...args) => $options.onRefresh && $options.onRefresh(...args)),
    k: common_vendor.o((...args) => $options.onRestore && $options.onRestore(...args)),
    l: common_vendor.o((...args) => $options.onAbort && $options.onAbort(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-edf5a525"], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/pages/play/play.vue"]]);
wx.createPage(MiniProgramPage);
