### 1. 将src内组件替换成自己的组件, 并修改readme文件, 和包名

### 2. 修改package.json文件的参数，

```json
{
  "name": "@sx/你的包名",
  "version": "1.0.0",
  "main": "dist/index.js",
}
```

### 3. 执行打包命令,
```
rollup -c
```

### 4. 如果有less文件，需要手动copy到dist目录里。

并且将src下面的index.less
添加到你的打包目录(dist/index.less)

### 5. 执行npm publish，将组件上传到npm库
```
npm publish
```
