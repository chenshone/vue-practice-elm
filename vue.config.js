const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  productionSourceMap: false,
  outputDir: 'dist',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      },
      less: {
        modifyVars: {
          'nav-bar-icon-color': '#fff',
          'nav-bar-arrow-size': '18px',
          'nav-bar-text-color': '#fff',
          'nav-bar-title-text-color': '#fff',
          'nav-bar-title-font-size':'23.5px'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'api': '@/api',
        'views': '@/views'
      }
    }
  },
  // cors
  devServer: {
        proxy: 'http://cangdu.org:8001'
    }
}