var out = require('./module.js');
var $ = require('jquery');
var css = require('!style-loader!css-loader!../css/css.css')



document.write(out("<div>你好小琳琳1</div>"));

$("div").text('你好小琳').css('background','#ccc')
// function hello(str){
// 	alert("你好 "+str)
// }
// hello("小琳琳")