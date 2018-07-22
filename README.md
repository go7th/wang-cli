#webpack 起步

##1.安装webpack

>`npm install webpack -g`

>`npm install webpack-cli -g`

>`npm install webpack-command -g`

##2.文件打包

#####在package.json文件中的scripts下面追加2行代码，注意“，”逗号

>`"dev": "webpack –mode deveplopment"`,
    
>`"build": "webpack –mode production"`

#####执行打包命令

>`webpack test.js -o other.js`

*版本不同可能存在差异，当前版本是（4.16.1），注意由于编码问题可能出现中文乱码，可以通过编辑器设置utf-8编码，默认输出utf-8编码*

