//es6导入语法
import $ from 'jquery'

//入口函数
$(function (){
  //奇数为红色
  $('li:odd').css('background-color', 'red')
  $('li:even').css('background-color', 'pink')
})
