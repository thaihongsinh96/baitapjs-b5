document.getElementById("tinh").addEventListener("click",function(){
    var x=document.getElementById("x").value*1;
    var n=document.getElementById("n").value*1;
    let S=0;
    for(var i=1; i<=n; i++){
        S=S+x**i;
    }
    console.log("S=",S);
    document.getElementById("tong").innerText="S= "+S;
})