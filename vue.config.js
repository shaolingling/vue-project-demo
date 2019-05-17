
const mockIndexData = require('./mock/index.js')
const path =  require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
          .set('@', resolve('src'))
          .set('assets', resolve('src/assets'))
          .set('components', resolve('src/components'))
          .set('layout', resolve('src/layout'))
          .set('base', resolve('src/base'))
          .set('static', resolve('src/static'));
    },
 
  // ...
  devServer: {
    port: 8080,
    hot: true, // Enable webpack's Hot Module Replacement feature:
    before (app) {
      app.get('/api/index', (req, res) => {
        res.json(mockIndexData)
      })
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // 请求到 /api/index 现在会被代理到请求 http://localhost:3000/api/index
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          }
          // 对于浏览器请求，你想要提供一个 HTML 页面 但是对于 API 请求则保持代理
        }
      }
    }
  }
}
