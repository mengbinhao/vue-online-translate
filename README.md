# online-translate

## Build Setup

``` bash
npm install
npm run dev
npm run build
npm run build --report
```
## Knowledge point
1. andex translate API
2. bootstrap adjust some style
3. how to debug in vue in vs-code
4. parent / child components
5. ref

## question
1. index.html can not link a local css
  `<link rel="stylesheet" type="text/css" href="./src/assets/css/bootstrap.min.css">`

  but
  `<link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/journal/bootstrap.min.css">` work

  `import '../static/css/global.css' /*引入公共样式*/`   in main.js work

  `@import './../static/css/global.css'; /*引入公共样式*/` in app.vue work

2. get parent or child dom simplely
3. css middle
4. fire child updated hook
