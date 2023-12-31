"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../common/html-parser.js");
const _sfc_main = {
  data() {
    return {
      // 当前显示 _id == "60fa38e79c77390001e2b3a7" ,只做演示使用，可通过详情页传递id过来
      id: "60fa38e79c77390001e2b3a7",
      title: "",
      // 查询字段，多个字段用 , 分割
      field: "avatar,user_name,title,author_avatar,author_name,author_name,last_modify_date,cover,excerpt,content",
      formData: {
        noData: '<p style="text-align:center;color:#666">详情加载中...</p>'
      }
    };
  },
  computed: {
    //拼接where条件
    //查询条件 ,更多详见 ：https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery
    where() {
      console.log(this.id);
      return `_id =="${this.id}"`;
    }
  },
  onLoad(event) {
    if (event.id) {
      this.id = event.id;
    }
    if (event.title) {
      this.title = event.title;
      common_vendor.index.setNavigationBarTitle({
        title: event.title
      });
    }
  },
  onReady() {
    if (this.id) {
      this.$refs.detail.loadData();
    } else {
      common_vendor.index.showToast({
        icon: "none",
        title: "出错了，新闻ID为空"
      });
    }
  },
  methods: {
    loadData(data) {
      console.log("zzzzzzz", data);
      if (this.title == "" && data.title) {
        this.title = data.title;
        common_vendor.index.setNavigationBarTitle({
          title: data.title
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      var _a, _b;
      return common_vendor.e({
        a: !loading && data
      }, !loading && data ? {
        b: common_vendor.t($data.title),
        c: common_vendor.t(data.user_name),
        d: common_vendor.t(data.last_modify_date),
        e: "e6c3e03e-2-" + i0 + "," + ("e6c3e03e-1-" + i0),
        f: common_vendor.p({
          thumbSize: "lg",
          thumb: data.author_avatar
        }),
        g: "e6c3e03e-1-" + i0 + ",e6c3e03e-0",
        h: common_vendor.p({
          border: false
        }),
        i: ((_a = data.avatar) == null ? void 0 : _a.length) > 3 ? data.avatar : (_b = data.avatar) == null ? void 0 : _b[0],
        j: common_vendor.t(data.excerpt),
        k: _ctx.阿诗丹顿
      } : {}, {
        l: i0,
        m: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "e6c3e03e-0"
    }),
    b: common_vendor.sr("detail", "e6c3e03e-0"),
    c: common_vendor.o($options.loadData),
    d: common_vendor.p({
      options: $data.formData,
      collection: "opendb-news-articles",
      where: $options.where,
      field: $data.field,
      getone: true,
      manual: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lijunkai7/Desktop/workspace/HealthyLiving/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
