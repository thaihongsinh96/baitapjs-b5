document.getElementById("tim-n").addEventListener("click",function(){
    let n=0, S=0;
    while(S<10000){
        n++;
        S=S+n;     
    }
    console.log("n=",n);
    console.log("S=",S);
})
