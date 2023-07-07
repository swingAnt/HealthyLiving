"use strict";
const common_vendor = require("../../common/vendor.js");
let canUse = true, cloudObjectDemo;
if (common_vendor.Ds.importObject) {
  cloudObjectDemo = common_vendor.Ds.importObject("cloud-lists");
} else {
  canUse = false;
}
const _sfc_main = {
  components: {},
  data() {
    return {
      // 数据表名
      collection: "opendb-news-articles",
      // 查询字段，多个字段用 , 分割
      field: "_id,mode,avatar,title,user_name,excerpt,last_modify_date",
      formData: {
        status: "loading"
        // 加载状态
      },
      tipShow: false,
      // 是否显示顶部提示框
      canUse,
      data: [],
      page: 0
    };
  },
  onLoad() {
    this.get();
  },
  methods: {
    //云函数
    get() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      common_vendor.Ds.callFunction({
        name: "get",
        data: { page: this.page }
      }).then((res) => {
        common_vendor.index.hideLoading();
        this.page += 1;
        console.log(res);
        this.data = res.result.data;
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    //云对象
    getS() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      cloudObjectDemo.get({ page: this.page }).then((res) => {
        common_vendor.index.hideLoading();
        this.page += 1;
        console.log(res);
        this.data = res.data;
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    }
  },
  toRedisPage() {
    common_vendor.index.navigateTo({
      url: "/pages/cloudFunction/redis/redis"
    });
  },
  /**
   * 下拉刷新回调函数
   */
  onPullDownRefresh() {
    this.formData.status = "more";
    this.tipShow = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tipShow = false;
    }, 1e3);
    common_vendor.index.stopPullDownRefresh();
  },
  /**
   * 上拉加载回调函数
   */
  onReachBottom() {
    this.$refs.udb.loadMore();
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tipShow ? 1 : "",
    b: $data.canUse
  }, $data.canUse ? {
    c: common_vendor.f($data.data, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: item.avatar.length > 3 ? item.avatar : item.avatar[0],
        c: common_vendor.t(item.excerpt),
        d: common_vendor.t(item.user_name),
        e: common_vendor.t(item.last_modify_date),
        f: item.id,
        g: "4391c535-1-" + i0 + ",4391c535-0",
        h: common_vendor.p({
          direction: "column",
          to: "/pages/detail/detail?id=" + item._id + "&title=" + item.title
        })
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/lijunkai7/project/HealthyLiving/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
