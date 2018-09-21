# online-translate

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## question
- index.html can not link a local css
  `<link rel="stylesheet" type="text/css" href="./src/assets/css/bootstrap.min.css">`

  but
  `<link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/journal/bootstrap.min.css">` work

  `import '../static/css/global.css' /*引入公共样式*/`   in main.js work

  `@import './../static/css/global.css'; /*引入公共样式*/` in app.vue work
