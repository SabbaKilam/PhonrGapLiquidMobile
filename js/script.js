////////////////////////////////
var open = false;
////////////////////////////////
window.onload = adjustRootEm;
window.onresize = adjustRootEm;
O("check1").onclick = delayMessage;
///////////////////////////////////////////////////
function adjustRootEm(){
  /*
  Let the root em (the width of an "M" in the HTML element)
  be 100th of the window's width
  */
  S(document.documentElement).fontSize = innerWidth/100 + "px";
}
////////////////////////////////////////////
O("top").onclick = flipFlop;
function flipFlop(){
  if(open){
    S("top").width = 100 + "rem";
    S("top").boxShadow = "none";
    open = false;
    //delayMessage();    
  }
  else{
    S("top").width = 80 + "rem";
    S("top").boxShadow = "-0.5rem  0 5rem black";    
    open = true;
    //delayMessage();    
  }
}
///////////////////////////////////////
O('x').onclick = killMessage;
function killMessage(){
  S('modalBox').opacity = 0;
  setTimeout(function(){S('modalBox').visibility = "hidden";},1000);  
}
/////////////////////////////////
function delayMessage(){
  if(open){
        S('modalBox').visibility = "visible";
        S('modalBox').opacity = 1;
  }
/*  
  if(open){
    setTimeout(function(){
        S('modalBox').visibility = "visible";
        S('modalBox').opacity = 1;        
    }, 400);
  }
*/  
}







