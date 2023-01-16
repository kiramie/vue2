//es6导入语法
import $ from 'jquery'

import './css/index.css'
import './less/index.less'

//入口函数
$(function (){
  //奇数为红色
  $('li:odd').css('background-color', 'red')
  $('li:even').css('background-color', 'black')
})
