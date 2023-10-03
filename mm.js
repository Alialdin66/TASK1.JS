// Q1
function cla(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }

return sum/(arr.length);


}
var arrr=[1,1,1,1,1,1,1,1,1,1];
var ava=cla(arrr);
console.log("Q1: "+ava);


      //-----------------------------------------------------------------------------
//Q2

function  area(base,hight){
    area=0.5*base*hight;
    return area
}
var a=area(5,5);
console.log("Q2: "+a);
      //-----------------------------------------------------------------------------

//Q3

function age(year){
    days=year*365;
    return days;
}

var days=age(20)
console.log("Q3: "+days);
      //-----------------------------------------------------------------------------

//Q4

function summ(num1,num2){
   sum=num1+num2;
    return sum;
}
var sum=summ(5,5);
console.log("Q4: "+sum);
      //-----------------------------------------------------------------------------

//Q5
function arr(array=[]){
    return array[0];
}
var aa=["ali","ahmed","abdo","alaa","anas","samy","arkm","salma","azza","abdaullah","islam"]
var re=arr(aa);
console.log("Q5: "+re);
      //-----------------------------------------------------------------------------


//Q6
function name(nam){
    return nam;
}

var namee="Alialdin Mahmoud ali";
var v=name(namee);
document.getElementById("iddd").innerHTML="Q6: "+v;
      //-----------------------------------------------------------------------------


//Q7
function con(hours){
sec=hours*60*60;
     return sec;
}
var c=con(5);
console.log("Q7: "+c);
      //-----------------------------------------------------------------------------

//Q8
function clac(x1,x2,x3,x4){
    var sum=x1+x2+x3+x4;
    if(sum>350){
        document.getElementById("idd").innerHTML="Q8: "+"true";
    

    }
    else{
       document.getElementById("idd").innerHTML="Q8: "+"false";
   

    }
}

clac(100,200,-300,4);
      //-----------------------------------------------------------------------------

//Q9
function zerro(num){
    if(num==0){
        return true;
    }
    else{
        return false;
    }
}
var m=zerro(5);
console.log("Q9: "+m);

      //-----------------------------------------------------------------------------

//Q10

function mo(num1,num2){
    mod=num1%num2;
    return mod;
}
var mmm=mo(15,5);
console.log("Q10: "+mmm);
      //-----------------------------------------------------------------------------

//Q11
function zero(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else if(num1==num2){
        m="nums are equils";
        return m;
    }
}
var zzz=zero(5,5);
console.log("Q11: "+zzz);
      //-----------------------------------------------------------------------------


//Q12
function o(vari){
    if(typeof(vari)=="number"){
        return" it is a number";
    }
    else{
        return " it is not a number";
    }
}
var i=o("massge");
console.log("Q2: "+i);
      //-----------------------------------------------------------------------------

//Q13
function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month =currentDate.getMonth();
    var day =currentDate.getDate();
  
    var formattedDate =day  + "-" + month + "-" + year;
    return formattedDate;
  }
  

  var currentDate = getCurrentDate();
  console.log("Q13: "+"Current Date: " + currentDate);
