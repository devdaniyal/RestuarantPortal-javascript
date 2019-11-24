var reqObj = {} ;

function myValue (e,r){
    reqObj.time = e;
    document.getElementById(r).setAttribute("class", "btn_styling");
}
function myFun (f,i){
    reqObj.table = f;
    document.getElementById(i).setAttribute("class", "btn_styling");
}
function myFav(g,k){
    reqObj.suittime = g;
    document.getElementById(k).setAttribute("class", "btn_styling");
}
function bookAlert(){
    alert('Congratulation! You have Booked ' +  reqObj.table +  ' for ' +  reqObj.suittime +  ' at ' +  reqObj.time +'. '
    + 'Come and Enjoy the Food');
}

