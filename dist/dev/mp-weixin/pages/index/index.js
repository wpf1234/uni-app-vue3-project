"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const all = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      console.log(all.value.children);
    });
    return {
      all
    };
  },
  data() {
    return {
      startData: {
        clientX: 0,
        clientY: 0
      }
    };
  },
  methods: {
    start(e) {
      console.log("\u5F00\u59CB\u4E0B\u6ED1\u5750\u6807", e.changedTouches[0].clientY);
      this.startData.clientX = e.changedTouches[0].clientX;
      this.startData.clientY = e.changedTouches[0].clientY;
    },
    end(e) {
      console.log("\u7ED3\u675F\u4E0B\u6ED1\u5750\u6807", e.changedTouches[0].clientY);
      const subX = e.changedTouches[0].clientX - this.startData.clientX;
      const subY = e.changedTouches[0].clientY - this.startData.clientY;
      if (subY < -50) {
        console.log("\u4E0B\u6ED1");
        common_vendor.index.navigateTo({
          url: "../chat/Chat"
        });
      } else if (subY > 50) {
        console.log("\u4E0A\u6ED1");
      } else if (subX > 50) {
        console.log("\u5DE6\u6ED1");
      } else if (subX < -50) {
        console.log("\u53F3\u6ED1");
      } else {
        console.log("\u65E0\u6548");
      }
    }
  }
};
if (!Array) {
  const _component_path = common_vendor.resolveComponent("path");
  const _component_svg = common_vendor.resolveComponent("svg");
  (_component_path + _component_svg)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      d: "M2 27.4545V2H5.08239V13.3352H18.6548V2H21.7372V27.4545H18.6548V16.0696H5.08239V27.4545H2Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    b: common_vendor.p({
      d: "M33.1284 27.902C31.9186 27.902 30.8207 27.6741 29.8347 27.2184C28.8487 26.7544 28.0656 26.0874 27.4856 25.2173C26.9056 24.339 26.6156 23.2784 26.6156 22.0355C26.6156 20.9418 26.831 20.0552 27.2619 19.3757C27.6928 18.688 28.2686 18.1494 28.9895 17.7599C29.7104 17.3705 30.5059 17.0805 31.3759 16.8899C32.2542 16.6911 33.1367 16.5336 34.0233 16.4176C35.1833 16.2685 36.1238 16.1566 36.8446 16.082C37.5738 15.9992 38.1041 15.8625 38.4355 15.6719C38.7753 15.4813 38.9451 15.1499 38.9451 14.6776V14.5781C38.9451 13.3518 38.6096 12.3989 37.9384 11.7195C37.2755 11.04 36.2688 10.7003 34.9181 10.7003C33.5178 10.7003 32.4199 11.0069 31.6245 11.62C30.829 12.2332 30.2697 12.8878 29.9466 13.5838L27.1625 12.5895C27.6596 11.4295 28.3225 10.5263 29.1511 9.87997C29.988 9.22538 30.8994 8.76965 31.8855 8.51278C32.8798 8.24763 33.8575 8.11506 34.8187 8.11506C35.4319 8.11506 36.1362 8.18963 36.9316 8.33878C37.7354 8.47964 38.5101 8.77379 39.2559 9.22124C40.0099 9.66868 40.6355 10.344 41.1326 11.2472C41.6298 12.1503 41.8784 13.3601 41.8784 14.8764V27.4545H38.9451V24.8693H38.796C38.5971 25.2836 38.2657 25.7269 37.8017 26.1992C37.3377 26.6715 36.7203 27.0734 35.9498 27.4048C35.1792 27.7363 34.2387 27.902 33.1284 27.902ZM33.5758 25.267C34.7359 25.267 35.7136 25.0392 36.5091 24.5835C37.3128 24.1277 37.9177 23.5394 38.3237 22.8185C38.738 22.0977 38.9451 21.3395 38.9451 20.544V17.8594C38.8208 18.0085 38.5474 18.1452 38.1248 18.2695C37.7105 18.3855 37.2299 18.4891 36.6831 18.5803C36.1445 18.6631 35.6183 18.7377 35.1046 18.804C34.5991 18.862 34.189 18.9117 33.8741 18.9531C33.1118 19.0526 32.3992 19.2141 31.7363 19.4379C31.0817 19.6533 30.5514 19.9806 30.1454 20.4197C29.7477 20.8506 29.5488 21.4389 29.5488 22.1847C29.5488 23.2038 29.9258 23.9744 30.6799 24.4964C31.4422 25.0102 32.4075 25.267 33.5758 25.267Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    c: common_vendor.p({
      d: "M47.2322 34.6136V8.36364H50.066V11.3963H50.414C50.6294 11.0649 50.9277 10.6423 51.3089 10.1286C51.6983 9.60654 52.2535 9.14252 52.9743 8.73651C53.7035 8.32221 54.6895 8.11506 55.9324 8.11506C57.5399 8.11506 58.9568 8.51693 60.1832 9.32067C61.4095 10.1244 62.3665 11.2637 63.0542 12.7386C63.742 14.2135 64.0858 15.9536 64.0858 17.9588C64.0858 19.9806 63.742 21.7331 63.0542 23.2163C62.3665 24.6912 61.4136 25.8346 60.1956 26.6467C58.9775 27.4504 57.5731 27.8523 55.9822 27.8523C54.7558 27.8523 53.7739 27.6493 53.0365 27.2433C52.299 26.829 51.7314 26.3608 51.3337 25.8388C50.936 25.3085 50.6294 24.8693 50.414 24.5213H50.1654V34.6136H47.2322ZM50.1157 17.9091C50.1157 19.3509 50.327 20.6228 50.7496 21.7248C51.1721 22.8185 51.7894 23.6761 52.6015 24.2976C53.4135 24.9107 54.4078 25.2173 55.5844 25.2173C56.8108 25.2173 57.8341 24.8942 58.6544 24.2479C59.483 23.5933 60.1044 22.715 60.5187 21.6129C60.9413 20.5026 61.1526 19.268 61.1526 17.9091C61.1526 16.5668 60.9455 15.357 60.5312 14.2798C60.1251 13.1944 59.5078 12.3368 58.6792 11.707C57.8589 11.069 56.8273 10.75 55.5844 10.75C54.3912 10.75 53.3886 11.0524 52.5766 11.6573C51.7646 12.2539 51.1514 13.0908 50.7371 14.168C50.3228 15.2369 50.1157 16.4839 50.1157 17.9091Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    d: common_vendor.p({
      d: "M68.5603 34.6136V8.36364H71.3941V11.3963H71.7421C71.9575 11.0649 72.2558 10.6423 72.637 10.1286C73.0264 9.60654 73.5816 9.14252 74.3025 8.73651C75.0316 8.32221 76.0177 8.11506 77.2606 8.11506C78.868 8.11506 80.2849 8.51693 81.5113 9.32067C82.7376 10.1244 83.6946 11.2637 84.3824 12.7386C85.0701 14.2135 85.414 15.9536 85.414 17.9588C85.414 19.9806 85.0701 21.7331 84.3824 23.2163C83.6946 24.6912 82.7417 25.8346 81.5237 26.6467C80.3057 27.4504 78.9012 27.8523 77.3103 27.8523C76.084 27.8523 75.1021 27.6493 74.3646 27.2433C73.6272 26.829 73.0596 26.3608 72.6618 25.8388C72.2641 25.3085 71.9575 24.8693 71.7421 24.5213H71.4935V34.6136H68.5603ZM71.4438 17.9091C71.4438 19.3509 71.6551 20.6228 72.0777 21.7248C72.5003 22.8185 73.1176 23.6761 73.9296 24.2976C74.7416 24.9107 75.7359 25.2173 76.9126 25.2173C78.1389 25.2173 79.1622 24.8942 79.9825 24.2479C80.8111 23.5933 81.4326 22.715 81.8469 21.6129C82.2694 20.5026 82.4807 19.268 82.4807 17.9091C82.4807 16.5668 82.2736 15.357 81.8593 14.2798C81.4533 13.1944 80.836 12.3368 80.0074 11.707C79.187 11.069 78.1554 10.75 76.9126 10.75C75.7194 10.75 74.7168 11.0524 73.9047 11.6573C73.0927 12.2539 72.4795 13.0908 72.0652 14.168C71.6509 15.2369 71.4438 16.4839 71.4438 17.9091Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    e: common_vendor.p({
      d: "M91.094 34.6136C90.5969 34.6136 90.1536 34.5722 89.7641 34.4893C89.3747 34.4148 89.1054 34.3402 88.9562 34.2656L89.702 31.6804C90.4146 31.8627 91.0443 31.929 91.5912 31.8793C92.138 31.8295 92.6228 31.5851 93.0454 31.146C93.4762 30.7151 93.8698 30.0149 94.2261 29.0455L94.773 27.554L87.7133 8.36364H90.8951L96.165 23.5767H96.3639L101.634 8.36364H104.816L96.7119 30.2386C96.3473 31.2247 95.8957 32.0408 95.3572 32.6871C94.8186 33.3417 94.193 33.8265 93.4804 34.1413C92.7761 34.4562 91.9806 34.6136 91.094 34.6136Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    f: common_vendor.p({
      d: "M139.113 2V27.4545H136.13L122.26 7.46875H122.011V27.4545H118.929V2H121.912L135.832 22.0355H136.081V2H139.113Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    g: common_vendor.p({
      d: "M152.888 27.8523C151.048 27.8523 149.462 27.4463 148.127 26.6342C146.802 25.8139 145.778 24.6705 145.058 23.2038C144.345 21.7289 143.989 20.0137 143.989 18.0582C143.989 16.1027 144.345 14.3793 145.058 12.8878C145.778 11.388 146.781 10.2197 148.065 9.38281C149.358 8.53764 150.866 8.11506 152.589 8.11506C153.584 8.11506 154.566 8.28078 155.535 8.61222C156.505 8.94365 157.387 9.48224 158.183 10.228C158.978 10.9654 159.612 11.9432 160.084 13.1612C160.556 14.3793 160.793 15.879 160.793 17.6605V18.9034H146.077V16.3679H157.81C157.81 15.2907 157.594 14.3295 157.163 13.4844C156.741 12.6392 156.136 11.9722 155.349 11.4833C154.57 10.9944 153.65 10.75 152.589 10.75C151.421 10.75 150.41 11.04 149.557 11.62C148.712 12.1918 148.061 12.9375 147.605 13.8572C147.15 14.777 146.922 15.763 146.922 16.8153V18.5057C146.922 19.9474 147.17 21.1696 147.668 22.1722C148.173 23.1665 148.873 23.9247 149.768 24.4467C150.663 24.9605 151.703 25.2173 152.888 25.2173C153.658 25.2173 154.354 25.1096 154.976 24.8942C155.606 24.6705 156.148 24.339 156.604 23.8999C157.06 23.4524 157.412 22.8973 157.661 22.2344L160.494 23.0298C160.196 23.991 159.695 24.8362 158.99 25.5653C158.286 26.2862 157.416 26.8497 156.38 27.2557C155.345 27.6534 154.18 27.8523 152.888 27.8523Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    h: common_vendor.p({
      d: "M169.58 27.4545L163.763 8.36364H166.846L170.972 22.9801H171.171L175.248 8.36364H178.38L182.407 22.9304H182.605L186.732 8.36364H189.814L183.998 27.4545H181.114L176.938 12.7884H176.64L172.463 27.4545H169.58Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    i: common_vendor.p({
      d: "M201.746 2H205.276L212.336 13.8821H212.634L219.694 2H223.223L214.026 16.9645V27.4545H210.944V16.9645L201.746 2Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    j: common_vendor.p({
      d: "M232.116 27.8523C230.277 27.8523 228.69 27.4463 227.356 26.6342C226.03 25.8139 225.007 24.6705 224.286 23.2038C223.573 21.7289 223.217 20.0137 223.217 18.0582C223.217 16.1027 223.573 14.3793 224.286 12.8878C225.007 11.388 226.01 10.2197 227.294 9.38281C228.586 8.53764 230.095 8.11506 231.818 8.11506C232.812 8.11506 233.794 8.28078 234.764 8.61222C235.733 8.94365 236.616 9.48224 237.411 10.228C238.206 10.9654 238.84 11.9432 239.313 13.1612C239.785 14.3793 240.021 15.879 240.021 17.6605V18.9034H225.305V16.3679H237.038C237.038 15.2907 236.823 14.3295 236.392 13.4844C235.969 12.6392 235.364 11.9722 234.577 11.4833C233.798 10.9944 232.879 10.75 231.818 10.75C230.65 10.75 229.639 11.04 228.785 11.62C227.94 12.1918 227.29 12.9375 226.834 13.8572C226.378 14.777 226.15 15.763 226.15 16.8153V18.5057C226.15 19.9474 226.399 21.1696 226.896 22.1722C227.402 23.1665 228.102 23.9247 228.997 24.4467C229.892 24.9605 230.931 25.2173 232.116 25.2173C232.887 25.2173 233.583 25.1096 234.204 24.8942C234.834 24.6705 235.377 24.339 235.833 23.8999C236.288 23.4524 236.64 22.8973 236.889 22.2344L239.723 23.0298C239.425 23.991 238.923 24.8362 238.219 25.5653C237.515 26.2862 236.645 26.8497 235.609 27.2557C234.573 27.6534 233.409 27.8523 232.116 27.8523Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    k: common_vendor.p({
      d: "M250.101 27.902C248.891 27.902 247.793 27.6741 246.807 27.2184C245.821 26.7544 245.038 26.0874 244.458 25.2173C243.878 24.339 243.588 23.2784 243.588 22.0355C243.588 20.9418 243.804 20.0552 244.235 19.3757C244.665 18.688 245.241 18.1494 245.962 17.7599C246.683 17.3705 247.479 17.0805 248.349 16.8899C249.227 16.6911 250.109 16.5336 250.996 16.4176C252.156 16.2685 253.096 16.1566 253.817 16.082C254.546 15.9992 255.077 15.8625 255.408 15.6719C255.748 15.4813 255.918 15.1499 255.918 14.6776V14.5781C255.918 13.3518 255.582 12.3989 254.911 11.7195C254.248 11.04 253.241 10.7003 251.891 10.7003C250.49 10.7003 249.393 11.0069 248.597 11.62C247.802 12.2332 247.242 12.8878 246.919 13.5838L244.135 12.5895C244.632 11.4295 245.295 10.5263 246.124 9.87997C246.961 9.22538 247.872 8.76965 248.858 8.51278C249.852 8.24763 250.83 8.11506 251.791 8.11506C252.405 8.11506 253.109 8.18963 253.904 8.33878C254.708 8.47964 255.483 8.77379 256.229 9.22124C256.983 9.66868 257.608 10.344 258.105 11.2472C258.602 12.1503 258.851 13.3601 258.851 14.8764V27.4545H255.918V24.8693H255.769C255.57 25.2836 255.238 25.7269 254.774 26.1992C254.31 26.6715 253.693 27.0734 252.922 27.4048C252.152 27.7363 251.211 27.902 250.101 27.902ZM250.548 25.267C251.709 25.267 252.686 25.0392 253.482 24.5835C254.285 24.1277 254.89 23.5394 255.296 22.8185C255.711 22.0977 255.918 21.3395 255.918 20.544V17.8594C255.794 18.0085 255.52 18.1452 255.097 18.2695C254.683 18.3855 254.203 18.4891 253.656 18.5803C253.117 18.6631 252.591 18.7377 252.077 18.804C251.572 18.862 251.162 18.9117 250.847 18.9531C250.084 19.0526 249.372 19.2141 248.709 19.4379C248.054 19.6533 247.524 19.9806 247.118 20.4197C246.72 20.8506 246.521 21.4389 246.521 22.1847C246.521 23.2038 246.899 23.9744 247.653 24.4964C248.415 25.0102 249.38 25.267 250.548 25.267Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    l: common_vendor.p({
      d: "M264.205 27.4545V8.36364H267.039V11.2472H267.237C267.585 10.3026 268.215 9.5361 269.127 8.9478C270.038 8.35949 271.066 8.06534 272.209 8.06534C272.425 8.06534 272.694 8.06948 273.017 8.07777C273.34 8.08606 273.585 8.09849 273.75 8.11506V11.098C273.651 11.0732 273.423 11.0359 273.067 10.9862C272.719 10.9281 272.35 10.8991 271.96 10.8991C271.032 10.8991 270.204 11.0939 269.475 11.4833C268.754 11.8645 268.182 12.3948 267.759 13.0742C267.345 13.7454 267.138 14.5118 267.138 15.3736V27.4545H264.205Z",
      stroke: "white",
      ["stroke-width"]: "1.5",
      mask: "url(#path-1-outside-1_9_11)"
    }),
    m: common_vendor.sr("all", "47cce140-0"),
    n: common_vendor.p({
      width: "276",
      height: "37",
      viewBox: "0 0 276 37",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    o: common_vendor.o((...args) => $options.start && $options.start(...args)),
    p: common_vendor.o((...args) => $options.end && $options.end(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Vue-project/my-vue3-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);