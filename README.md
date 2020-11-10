

## 开发者文档

### 你需要准备
- 下载开发环境node:
[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)
- 下载编辑器vscode:
[https://code.visualstudio.com/](https://code.visualstudio.com/)
- 为vscode安装插件并配置，提高开发效率，以下是我的配置链接，可参考
[https://mp.weixin.qq.com/s/k1xDIm7-mhTF_2jzHAMDRQ](https://mp.weixin.qq.com/s/k1xDIm7-mhTF_2jzHAMDRQ)

### 你需要学习
- react: [https://react.docschina.org/](https://react.docschina.org/)
- react-router: [http://react-guide.github.io/react-router-cn/](http://react-guide.github.io/react-router-cn/)
- ES6: [https://es6.ruanyifeng.com/](https://es6.ruanyifeng.com/)
- TypeScript: [https://www.tslang.cn/docs/home.html](https://www.tslang.cn/docs/home.html)
- antd: [https://ant.design/index-cn](https://ant.design/index-cn)
- mobx: [https://mobx.js.org/README.html](https://mobx.js.org/README.html)
- axios: [http://www.axios-js.com/](http://www.axios-js.com/)
- less: [http://lesscss.cn/](http://lesscss.cn/)

### 项目结构
```
  .src
  |---components 组件
  |---models mobx的store
  |---images 图片
  |---pages 页面
  |---route 路由配置
  |---services 服务请求
  |---stores mobx的store
  |---styles 样式
  |---utils 公共方法
  |---app.tsx 主页面路由
  |---index.tsx 入口文件
  |---pages.tsx 登录和主页面路由
```

### 运行
- 本地运行:
1.yarn  或 npm install
2.yarn start 或 npm run start
- 打包
yarn build 或 npm run build

### 浏览器打开
http://localhost:3000/


### tips
1.运行node版本11.7.0，如果是12.0.0 可能会报错
2.关于node版本切换，建议安装nvm
3.关于eslint,建议vscode安装eslint插件并且再setting中设置保存文件自动修复,具体设置参数，可参考上述所说的我的vscode插件配置[https://mp.weixin.qq.com/s/k1xDIm7-mhTF_2jzHAMDRQ](https://mp.weixin.qq.com/s/k1xDIm7-mhTF_2jzHAMDRQ)