// 属性
// 
// 事件
// on()
// trigger( type,date)在每个匹配元素相同的上触发
// 
// 
// CSS
// css({})//设置或得到样式一个逗号
// 
// 
// 动画(手风琴菜单)
// hide() //隐藏显示的效果
// show() // 显示隐藏效果
// toggle()//判断显示就隐藏，隐藏就显示
// //卷帘门效果
// slideDown() //显示
// slideUp() // 隐藏
// slideToggle() 显-隐/隐-显 
// //通过时间来显示/隐藏
// fadeIn() 显-隐//时间参数
// fadeOut() 隐-显
// fadeTo() 2个参数 时间，透明度
// fadeToggle()
// 
// animate()  自定义函数改变样式//3参数({样式},时间,函数)
// 筛选
// find()// 找后代元素
// siblings()//找其兄弟元素
// parent() // 父元素
// filter()  //筛选与指定表达式相同的元素(如带on的选出)//过滤
 // eq(index)筛选(得索引index)
// end() // 返回原始this
// 
//核心
//$()
//each()????
//get() 得到转换dom元素
//index() 得到索引
//size() 得到长度
//date()
//removeDate()


// $('.nav-mune li ').on( 'click',function (){
//     var $this = $(this);

//    //$this.addClass('on').siblings().removeClass('on');
//    //给当前元素加on其他兄弟元素删on

//     //console.log($this.siblings());//只得到当前元素的兄弟元素
//     //$(this).addClass('on'); //每个li点击背颜为红
    
// })

// var $btn = $('button');

// $btn.on('click',function(){
//    // $('#sel').val('天津');//设置当前值为天津

//    // alert($('#sel').val()); //得到option里面值

// //前提外面不能有父元素??????/
//    //$('input').val(''); //清空值
//   // $('input').val('abc'); //设置值abc
//     //alert($('input').val()); //得到输入的值
// });




//text()  等同于innerText

//html()  //等同于innerHTML无是得到，有就设置

// var h = $('.herd').html('abc');
// //var h = $('.herd').html('<h1>abc</h1>');
// console.log(h);

 
// var $herd = $('.herd');
// console.log($herd.get(0));//dom对象

// $('.herd').on('click',function(){
//     var $cont = $('.cont');
//     $cont.toggleClass('show');

//    if($cont.hasClass('show')){  //hasClass判断是否含有样式
//         this.innerHTML = '隐藏';
//    } else {
//         this.innerHTML = '显示';
//    } ;
// })


// var div = document.getElementById('div');

//toggleClass()//不存在就添加，存在就删除
// $('.herd').on('click', function (){
//   console.log( $('.cont').toggle());  //点击显示，否隐藏？？？？
//    // $('.cont').toggleClass('show');
// });

 
        //1jq
 // $('.herd').on('click', function (){ 
 //   //console.log(this);
 //   if ( this.innerHTML == '显示'){
 //        this.innerHTML = '隐藏';
 //   } else {
 //        this.innerHTML = '显示';
 //   }

 //    $('.cont').toggleClass('show');

 // });
        //2dom
    // var her = document.getElementById('her'),
    //     con = document.getElementById('con');

    // her.onclick = function () {

    //     if ( her.innerHTML == '显示'){
    //         her.innerHTML = '隐藏';
    //          con.style.display = 'block';

    //    } else {
    //       her.innerHTML = '显示';
    //       con.style.display = 'none';
    //    }

    // }



// addClass()//给选种元素添加一个类属性 
// $('span').addClass('red');

// removeClass()//给选种元素删除样式，删class名为a的
// $('span').removeClass('a');

// removeAttr();//给选种元素删除属性
// console.log( $('#myspan').removeAttr('title'));

// //attr()//给选种元素添加属性

// DOM方法
// var myspan = document.getElementById('myspan');
// myspan.title = 'abc';//添加title属性

//   attr()方法
//     $('#myspan').attr('title','ab');//添加title属性

// var span = document.getElementsByTagName('span');
// for(var i in span){
//     span[i].title = 'def';
// }
// attr()方法
// // $('span').attr('title','ab');//页面所有span加title,ab属性

// var myspan = document.getElementById('myspan');
// console.log(myspan.className);//得到class名

//   attr()方法 
//   console.log( $('#myspan').attr('class'));//得到myspan的class名
   

 
// size()//用length

// var $span = $('#span');
// console.log($span.length);属性
// console.log($span.size());//长度
// console.log($span);//一组元素
// console.log($span[]);//得到id为span的元素

// 选择器

//  $('p').css('color','red');

//  $('.ab').css('background-color','red');
 
// $('#btn').css('background-color','green');
// jQuery('#btn').css('background-color','green');

// var btn = jQuery('#btn');

//     btn.css('color','red');
//     btn.css('background-color','green');


// console.log(btn);   //得到jQuery对象
// console.log(btn[0]);    //得到dom对象


///////////////////////////////////////////////////////


//两个each用法
//$.each()通用例遍方法，可用于例遍对象和数组
// $.each( { name: "John", lang: "JS" }, function(i, n){
//   alert( "Name: " + i + ", Value: " + n );
// });

// $.each( [0,1,2], function(i, n){
//   alert( "Item #" + i + ": " + n );
// });
//each()以每一个匹配的元素作为上下文来执行一个函数
//迭代
//返回 'false' 将停止循环 (就像在普通的循环中使用 'break')。
//返回 'true' 跳至下一个循环(就像在普通的循环中使用'continue')

    $("img").each(function(i){
        this.src = "test" + i + ".jpg";
 });