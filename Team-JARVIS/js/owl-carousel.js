var span = document.getElementsByClassName('arrow');
var div = document.getElementsByClassName('sliding-cards');
var l = 0;
span[1].onclick = ()=>{
  l++;
  for(var i of div)
  {
    // if (l==0) {i.style.left = "0px";}
    // if (l==1) {i.style.left = "-740px";}
    // if (l==2) {i.style.left = "-1480px";}
    // if (l==3) {i.style.left = "-2220px";}
    // if (l==4) {i.style.left = "-2960px";}
    //       if (l==4) {i.style.left = "-3700px";}
    // if (l>4) {l=4;}
        if (l==0) {i.style.left = "0px";}
    if (l==1) {i.style.left = "-300px";}
    if (l==2) {i.style.left = "-600px";}
    if (l==3) {i.style.left = "-900px";}
    if (l==4) {i.style.left = "-1200px";}
          if (l==4) {i.style.left = "-1500px";}
    if (l>4) {l=4;}
  }
}
span[0].onclick = ()=>{
  l--; 
  for(var i of div)
  {	
    // if (l==0) {i.style.left = "0px";}
    // if (l==1) {i.style.left = "-740px";}
    // if (l==2) {i.style.left = "-1480px";}
    // if (l==3) {i.style.left = "-2220px";}
    // if (l < 0) {l=0;}
    
    if (l==0) {i.style.left = "0px";}
    if (l==1) {i.style.left = "-300px";}
    if (l==2) {i.style.left = "-600px";}
    if (l==3) {i.style.left = "-900x";}
    if (l < 0) {l=0;}
    
  }
};

// var s = document.getElementById('arrow1');
// var d = document.getElementById('sliding-cards-1');
// var x = 0;
// s[1].onclick = ()=>{
//   x++;
//   for(var j of d)
//   {
//     if (x==0) {j.style.left = "0px";}
//     if (x==1) {j.style.left = "-740px";}
//     if (x==2) {j.style.left = "-1480px";}
//     if (x==3) {j.style.left = "-2220px";}
//     if (x==4) {j.style.left = "-2960px";}
//           if (x==4) {j.style.left = "-3700px";}
//     if (x>4) {x=4;}
//   }
// }
// s[0].onclick = ()=>{
//   x--; 
//   for(var j of d)
//   {	
//     if (x==0) {j.style.left = "0px";}
//     if (x==1) {j.style.left = "-740px";}
//     if (x==2) {j.style.left = "-1480px";}
//     if (x==3) {j.style.left = "-2220px";}
//     if (x < 0) {x=0;}
//   }
// }