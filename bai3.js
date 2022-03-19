document.getElementById("tinh-giai-thua").addEventListener("click",function(){
    var n=document.getElementById("nhap-n").value*1;
    let N=1;
    if(n==0){
        N=N*n;
        console.log("N=", N);
        document.getElementById("tinh-bai3").innerText="N="+N;
    }else{
        for(var i=1; i<=n; i++){
            N=N*i;
        }
        console.log("N=", N);
        document.getElementById("tinh-bai3").innerText="N="+N;
    }
})