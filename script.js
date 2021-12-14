function clock ( ) {
    var hours =document.getElementById("hours");

    var minutes=document.getElementById("minutes");

    var seconds =document.getElementById("seconds");

    var day_night=document.getElementById("day_night");

    var time=new Date( );

    var a=time.getHours( );
    var b=time.getMinutes( );
    var c=time.getSeconds( );
   
            //  AMto PM
   hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
   
    if( a>12){
     let to_pm=a-12;
     if( to_pm<=9) hours.innerHTML="0"+to_pm;
     else hours.innerHTML= to_pm;
     day_night.innerHTML="PM";
  }
  else if( a==12 &&  b>=0) {
      hours.innerHTML=a;
      day_night.innerHTML="PM";
  }
 else {
   if(a<=9) hours.innerHTML="0" +a ;
   else hours.innerHTML=a;
   day_night.innerHTML="AM";
 }
 
}
setInterval(clock,1000);

   function Makediv(){
               
               var container=document.createElement( "div");
               container.className="left_container";
               container.id="dynamic-block";
               document.getElementById("left_container1").appendChild(container);
               var invalue =document.getElementById("wakeup-time");
               var invalue1=document.getElementById("lunch-time");
               var invalue2=document.getElementById("nap-time");
               var value = invalue.options[invalue.selectedIndex].text;
              

               document.getElementById("dynamic-block").innerHTML="wake up time"+ value +
               "<br/> lunch time" + invalue1.options[invalue1.selectedIndex].text +
               "<br/> Nap time" + invalue2.options[invalue2.selectedIndex].text ;
}
   function clocktime(){

  var i= document.getElementById("wakeup-time").value;
var j= document.getElementById("lunch-time").value;
var k= document.getElementById("nap-time").value;

 var hourr=new Date().getHours();

if(i==hourr){
    document.getElementById( "imagecontainer").style.backgroundImage="url(wake.jpg)";
    document.getElementById( "texter").innerHTML="lets have some breakfast!!" ;
   }

  else if(j==hourr){
document.getElementById( "imagecontainer").style.backgroundImage="url(lunch.jpg)";
document.getElementById( "texter").innerHTML="lets have some lunch!!" ;

 }

 
  else if (k==hourr){
document.getElementById( "imagecontainer").style.backgroundImage="url(nap.jpg)";
  document.getElementById( "texter").innerHTML="lets sleep till morning!!" ;

   }
       
       Makediv();
}
