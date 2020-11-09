const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
  addDecoratorsLegacy,
  useEslintRc,
} = require('customize-cra');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
  // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, //这里一定要写true，css和less都不行
  }),
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
  addLessLoader({  
    javascriptEnabled: true,
    // modifyVars:{'@primary-color':'#1DA57A'},
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src'),
  }),
  addDecoratorsLegacy(), //使用装饰器
);
