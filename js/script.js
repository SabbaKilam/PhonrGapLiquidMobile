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
  stayPut();
}
////////////////////////////////////////////
function stayPut(){
  if(open){
    S("top").width = 40 + "rem";
    S("top").boxShadow = "none";
  }
  else{
    S("top").width = 99 + "rem";
    S("top").boxShadow = "-0.5rem  0 2rem black";
  }
}
////////////////////////////////////////////
O("top").onclick = flipFlop;
adjustRootEm();
function flipFlop(){
  if(open){
    S("top").width = 99 + "rem";
    S("top").boxShadow = "none";
    open = false;
  }
  else{
    S("top").width = 40 + "rem";
    S("top").boxShadow = "-0.5rem  0 2rem black";    
    open = true;
  }
}
///////////////////////////////////////
O('x').onclick = killMessage;
function killMessage(){
  S('modalBox').opacity = 0;
  setTimeout(function(){S('modalBox').visibility = "hidden";},500);  
}
/////////////////////////////////
function delayMessage(){
  if(open){
    setTimeout(function(){
        S('modalBox').visibility = "visible";
        S('modalBox').opacity = 1;        
    }, 400);
  }
}







