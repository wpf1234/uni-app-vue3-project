process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/var.scss";`, //引入全局变量
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json'],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 192, // 设计稿大小比例 / 10
      })
  },
}
