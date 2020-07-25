// CHAPTER 38 TO 42
// TASK-1:

// function power(a,b){
//  document.write(Math.pow(5,4));
// }
// power()



// TASK-2:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
// function leapyear(){
//     var leap=document.getElementById('leap')
//   if( leap.value%4==0){
//     alert('is a leap year');
     
//   }
//   else{
//       alert('not leap year');
//   }
// }


// // TASK3

// function triangle(a,b,c){
//     var  s=a+b+c/2;
//    var res=Math.sqrt(s*(s-a)(s-b)(s-c));

//    function area(){
//     var res=Math.sqrt(s*(s-a)(s-b)(s-c));
//     alert(res)
//    }
//    area();
  
// } 
// triangle(3,4,10);


// TASK4

// function main(){
//         var eng=document.getElementById('eng')
//         var urdu=document.getElementById('urdu')
//         var math=document.getElementById('math')
        

//         var eng1=eng.value;
//         var urdu1=urdu.value;
//         var math1=math.value;

//         var eng2=Number(eng1)
//         var urdu2=Number(urdu1)
//         var math2=Number(math1)

//          var res=eng2+urdu2+math2;




//         function average (c){
        
//         var ave= res/c;
//         alert(ave) 
//         }
       
//         average(3)

//         function percentage(){
//             var per= res/300*100;
//             alert(per)
//         }
//         percentage();
//     }



// TASK5

//     function find(){
        
//        var arr=['pakistan','turkey','usa','dubai']
//        var user=prompt("Enter country name")
//        for(var i=0; i<=arr.length;i++){
//          if(user==arr[i]){
//                alert(' at location ' + [i]);
              
//            break
//        }
//     }
//    }
//    find();







// TASK6

// function delet(){
//   var str='we are pakistan';
//   var res=str.replace(/[aeiou]/g, "");
  
//     alert(res)
   
// }
// delet();



// TASK7


// var setance = "Pleases read this application and give me gratuity";
// var vowel = 0;
// function switchVowel(str) {
//     var strArr = str.split('');
//     console.log(strArr);
//     for (var i = 0; i < strArr.length; i++) {
//         switch (strArr[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (strArr[i + 1]) {
//                     case 'a':
//                         vowel++;
//                         break;
//                     case 'e':
//                         vowel++;
//                         break;
//                     case 'i':
//                         vowel++;
//                         break
//                     case 'o':
//                         vowel++;
//                         break;
//                     case 'u':
//                         vowel++;
//                         break;
//                     default:
//                         break
//                 }
//                 break
//             default:
//                 break
//         }
//     }
// }
// switchVowel(setance)


// TASK8

// function distance(){
//     var user=prompt("Enter distance in killometer");
   
    // function meter(){
    //     var a=user*1000;
    //     alert(a + "in meter")
    // }
    // meter();


    // function feet(){
    //     var b=user*3280.84;
    //     alert(b + " in feet")
    // }
    // feet();

    // function inches(){
    //     var c=user*39370.1;
    //     alert(c + " in inches")
    // }
    // inches();
    // function centimeter(){
    //     var d=user*100000;
    //     alert(d)
    // }
    // centimeter();
//  }

// distance();


// TASK9

//  function employee(){
//     var paid=1200;
//     var overtime=paid*40
//     alert(overtime)
// }
// employee();

// TASK10

// function currency(){
  
//     var user=prompt("Enter amount which you want to withdraw")
   
//     alert ("You Have notes of 100 is : " + user / 100)
//      alert("You Have notes of 50 is : " + (user % 100) / 50)
//     alert("You Have notes of 10 is : " + (((user % 100) % 50) / 10))
     
    
    
    
// }
//     cu=rrency();


// CAHPTER 43-48

// TASK1

// function message(){
//     alert('pakistan zindabad')
// }


// TASK2
// function image(){
   
//     alert('Thanks for Purchasing a phone from us!')
// }


// TASK:3

// function remove(){
//     document.getElementById("set").deleteRow(1);
// }


// TASK4

// function change(id,src){
//     var a=document.getElementById('image1')
//     a.src=src;
// }


// TASK5

// var count=0;
// function counte1(){
    
//     var a=document.getElementById('sec')
  
//    count+=1;
//   a.innerHTML=count;
 
// }
// function counte2(){
    
//     var a=document.getElementById('sec')
//    count-=1;
//   a.innerHTML=count;
 
// }





// CHAPTER 49-52

// TAS:1

// function input(){
//     var a=document.getElementById('set').value

//     var  b=document.getElementById('set1').value
//     var c=document.getElementById('set2').value

//     var d=document.getElementById('set3').value

//     var e=document.getElementById('set4').value

//    document.write('first name '+a + '<br>' +' last name '+b + '<br>' + 'Email' + c + '<br>' + 'Password' + d + '<br>' + 'confirm password' + e)
// }



// TASK:2



//     function more(){
//         var text=' Mobile phones were invented as early as the 1940s when engineers working at AT&T developed cells for mobile phone base stations. The very first mobile phones were not really mobile phones at all. ... Motorola, on 3 April 1973 were first company to mass produce the the first handheld mobile phone'
//         var a=document.getElementById('para')
//        a.innerHTML=text;
//     }
// function more1(){
//     var text1='In 1962, Nick Holonyak, Jr. invented the first LED that could produce visible red light. He invented these red diodes while he was employed with General Electric. For his achievement, Holonyak has earned the title of “Father of the Light-Emitting Diode.    '

//     var b=document.getElementById('para1')
//     b.innerHTML=text1;
// }



// TASK:3



// var list1=[];

// var list2=[];

// var list3=[];
// var n=1;
// var x=0;
// function add(){
//     var a=document.getElementById('set')
//     var new1=a.insertRow(n);

//     list1[x]=document.getElementById('roll').value;
//     list2[x]=document.getElementById('roll1').value;
//     list3[x]=document.getElementById('roll2').value;


//     var cel1=new1.insertCell(0);
    
//     var cel2=new1.insertCell(1);
    
//     var cel3=new1.insertCell(2);


//     cel1.innerHTML=list1[x];
    
//     cel2.innerHTML=list2[x];
    
//     cel3.innerHTML=list3[x];

//     n++;
//     x++;
// }





//  CHAPTER 53-57


// TASK:1


// function showimg(e){
   
//     var target=document.getElementById('modalimg')
//       target.src=e.src
// }




// TASK:2
// function zoomin(){
//     var a=document.getElementById('para')
//      a.style.fontSize='20px'
    
// }

// function zoomout(){
//     var a=document.getElementById('para')
//      a.style.fontSize='15px'
    
// }




//  CHAPTER 58-67 


//  TASK:1 


// i
    // var a=document.getElementById('main-content')
    // console.log(a);
   

// ii

// var  target=document.getElementById('main-content')

//  document.write(target.childNodes[1].nodeName)
//  document.write(target.childNodes[3].nodeName)
//  document.write(target.childNodes[5].nodeName)
//  document.write(target.childNodes[7].nodeName)


// iii
// document.getElementById('first-name').value='Hifza';


// document.getElementById('last-name').value='Arshad';


// document.getElementById('email').value='hifa22@gmail.com';


// TASK:2
// i

// var a=document.getElementById('form-content')
// document.write(a.nodeType)

// ii

//  var type=document.getElementById('last-name')
// console.log(type.parentNode.children[0])
// document.write(type.parentNode.children[1].nodeType)
// document.write(type.parentNode.children[2].nodeType)
// document.write(type.parentNode.children[3].nodeType)
// document.write(type.parentNode.children[4].nodeType)
// document.write(type.parentNode.children[5].nodeType)



// iii

// var type=document.getElementById('last-name')
// console.log(type.setAttribute('id', "name"))



// iv

//  var a=document.getElementById('main-content')

// console.log(a.firstChild)
// confirm.log(a.lastChild)


// v

// var target=document.getElementById('last-name')
// console.log(target.nextSibling)

// var target=document.getElementById('last-name')
// console.log(target.previousSibling)


// vii

// var find=document.getElementById('email')
// document.write(find.parentNode.nodeType)