# 个人迷你脚手架 wang-cli

##### 自用个人脚手架 

# 下载

>`git clone git@github.com:go7th/wang-cli.git`

# 使用说明

## 1.安装webpack

>'npm init'

>`npm install webpack webpack-cli webpack-command webpack-dev-server -D`

>`npm install css-loader style-loader -D `


## 2.文件打包

##### 在package.json文件中的scripts下面追加1行代码，注意“，”逗号

>`"build": "webpack –mode production"`

>`"start":"webpack-dev-server --entry ./src/js/index.js --output-filename ./dist/js/index.js"`

##### 执行打包命令

>`npm run build`

##### 启动服务器

>`npm start`

*版本不同可能存在差异，当前版本是（4.16.1），注意由于编码问题可能出现中文乱码，可以通过编辑器设置utf-8编码，默认输出utf-8编码*

