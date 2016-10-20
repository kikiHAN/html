//console.log(jQuery);

/*var x = 2,	y = 5, z = x / y;
	alert(z);*/	
/*var x = 1;
	y = 3;
	z = 5;

console.log(x>y||y>z)*/

/*var age = 35;

if (age<=12){
	console.log ('儿童');
} else if (age>12 && age<=18){
	console.log('少年');
} else if (age>18 && age<=30){
	console.log('青年');
} else if (age>30 && age<=50){
	console.log('中年');
} else {
	console.log('老年');
}
*/


/*for ( i = 1; i <= 10; i++){

}	console.log(i);*/

/*var imgUrl = 'img/abc/def.jpg.rmvb';

//var ext = imgUrl.substr(15,4);//后面一个值为截取的长度.结果.rvm,ru
							//若后面为定值，则默认去取最后
var ext = imgUrl.substring(15, 20);//.jpg

//ext = imgUrl.substr(imgUrl.lastIndexOf('.'));//结果为.rmvb
//ext = imgUrl.substr(imgUrl.indexOf('.'));//结果为.jpg.rmvb
//ext = imgUrl.substring(imgUrl.indexOf('.'));//.rmvb
//ext = imgUrl.substring(imgUrl.lastIndexOf('.'));//.rmvb

console.log(ext);*/


// var r = false;
// 	str = 'abcd';

// 	 r = str.indexOf('a') == 0;
	// if (r){
	// 	console.log('该字符以a开头')
	// }	else {
	// 	console.log('该字符不以a开头')
	// }*///结果为:该字符以a开头

  //另一种写if方法
    //r?console.log('该字符以a开头') :console.log('该字符不以a开头');


/*  var str = 'bcda';

	if (str.indexOf('a') == str.length-1){
		console.log('该字符以a结尾')
	}	else {
		console.log('该字符不以a结尾')
	}//结果为:该字符以a结尾*/


/*	var date = new Date;

	dateStr = date.getFullYear() + '年' + (date.getMonth() + 1 ) + '月' + date.getDate() + '日' + '' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    console.log(dateStr)*/

    //用函数方法：?
    //当前日期
    function st(date,isDt){
      var year = date.getFullYear();
      var muth = date.getMonth() +1;
      var dat = date.getDate();
      var D = date.getDay();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();

      //return year + '年'+ fill0(muth) + '月' + fill0(dat) + '日' +'星期'+ fill0(D) +' ' +fill0(h) +':'+ fill0(m)  +':'+ fill0(s);

      if(isDt){
        return year + '年'+ fill0(muth) + '月' + fill0(dat) + '日' +' '+'星期'+ fill0(D) +' ' +fill0(h) +':'+ fill0(m)  +':'+ fill0(s);
      } else {
          return year + '年'+ fill0(muth) + '月' + fill0(dat) + '日'// +'星期'+ fill0(D)
      }


    }

    function fill0(num){
      return  num<10 ? '0'+num :num;
    }

    var d= st(new Date(),true);
    console.log(d);

    //上月第一天
    function fromDate(){
      var dat = new Date();
      dat.setMonth(dat.getMonth()-1);
      dat.setDate(1);
      return st(dat);
    }

    var d2 = fromDate(new Date());
    console.log(d2);






    //st();
   // var arr1 = ['a', 'b', 'c', 'd'];
   // var arr2 = [1,2,3,4,5,];
   // var arr3 = ['张三','张一','张二','张四',];

   /*var com = function(x,y){
      return x - y;
   };*/
  // arr3.sort(1);

 // console.log(arr1)
  /*for (var i=0; i<arr1.length; i++){
    console.log(arr1[i]);
  }*/


  //  遍历数组每一项
  // for(var i in arr2){
  //   console.log(arr2[i]);
  // };





   /* for (q=1,p=1;q<=10;q+=2){
    	   p*=q
    }	
    console.log(p)
 */

	//(1)10以内奇数相乘积945 

   /* for (i=1,j=1;i<=10;i++){
    	if(i%2==1){
    		j*=i;
    	}
    }	 

    console.log(j)

  document.getElementById("deom").innerHTML='10以内奇数相乘积'+j;

//(2)10以内奇数相乘积945 
   var d = 1;
     for(c=0;c<=10;c++){
        if(c%2==0){
          continue;
        } else {
          d*=c;
        } 
     } console.log(d);



  //偶数相乘积(1)
   	var b = 1;

   for (a = 1;a <= 10; a++){
   		if (a%2==0) {
   			b*=a;
   		} console.log(b);
   } 
   //(2)
      var e = 1;
     for(f=1;f<=10;f++){
        if(f%2==1){
          continue;
        } else {
          e*=f;
        } 
     } console.log(e);*/

     //任意偶数和

     // function sum() {
     //    var total = 0;
     //    for (i = 0;i <=100; i++){
     //        if(i%2==0){
     //          total += i;
     //        }
     //    }
     //    return total;
     // }

     // var r = sum();
     // console.log(r);

      //用函数的方法
    /* var sum = function(fom,to){
        var total = 0;
        for(i = fom; i <= to; i++){
          if(i%2==0){
            total += i;
          }
        }
        return total;
     };

     var r = sum(20,100);
     console.log(r);*/

     //函数
     // var obj = new Object();
     // obj.name='笔记本';
     // obj.type='联想';



  /*  var obj = {
      name : '笔记本',
      price :3445,
      brand:'联想',
      getName:function(){
        alert(this.name);//给对象增加方法
        //console.log(this);
      }
     };


     obj.getName();//调用

     obj.brand='Dell';
     delete obj.name;


     //console.log(obj);
     for(var o in obj){
        //console.log(o);
        console.log(obj[o]);
     }*/

     /*//学生属性

     var student = {
        name:'张三',
        age:23
     };
     console.log(student.name);//var name =student.nama;
     student.gender='男';

     // var student = {
     //    run:function(){

     //    }
     // };//为什么只有run

     student.run = function(){
        console.log('runing')
     };

      student.run();
v
      for(var key in student){
        console.log(key);
        console.log(student[key]);
      }

     student.age = student.age +1;
      delete student.gender;
     
     console.log(student);*/

     









 /*    var x = 3;
  switch (x){
    case 0:
      alert('1')
    break;
    case 1:
      alert('2')
    break;
    case 2:
      alert('3')
    break;
    default:
      alert('非法')
  }*/


 /*function car (name ,color){
      document.getElementById('fon').innerHTML=(name + '\n' +color);
  } 
    car('英菲尼迪','黑色')
*/

  /*document.getElementById('btn').onclick{

  }
*/
  
 
    




  // var date = new Date() ;

  //  console.log(date.getDate());

  // date = date.setDay(date.getDay() + 3);
 
  // console.log(date);

  // date.getDate(date.setDate(date.getDate() + 4));

  // console.log(date.getDate());



  /*function name() {
    var nme = "张可|李名|周敏|赵辉|王晓|郑文".split('|');
    var muh = Math.floor(Math.random() * nme.length);
    return nme[muh];

  } console.log(name());*/


   /* var name = "王|斩|退|好|人|有|天";

   var mu = name .split('|');
    console.log(mu);*/