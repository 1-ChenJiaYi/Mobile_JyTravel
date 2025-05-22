# Mobile_JyTravel
### 项目描述：

项目搭建：Vite + Vue3 + vue-router + Pinia + axios + 移动端适配  

仿照：https://m.tujia.com/



### 开启项目(本地运行)：

```
npm install 

npm run dev 

npm run build 

npm run preview 
```





### 项目遇到的问题

(1) 移动端适配: 

* 调整index.html的视口标签

* 增加post-css-px-to-rem的插件，配置vite.config.js的属性：

  ```js
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /node_modules/,
            landscape: false
          })
        ]
      }
    }
  ```

* 打包的时候遇到了tar-bar引用的静态资源没有被打包的情况：

  正在解决中...

