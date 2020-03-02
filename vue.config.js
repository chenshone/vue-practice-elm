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
          'text-color': 'black'
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