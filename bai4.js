document.getElementById("in").addEventListener("click",function(){
    var div=document.getElementsByClassName("thediv");
    for(var i=0; i<=10; i++){
        div[i].style.display="block";
        if(i%2==0){
            // div[i].style.display="block";
            div[i].style.background="blue";
        }else{
            // div[i].style.display="block";
            div[i].style.background="red";
        }
    }
})