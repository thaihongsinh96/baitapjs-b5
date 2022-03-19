    function kiemTra(n){
        var flag=true;
        if(n<2){
            flag=false;
        }else if(n==2){
            flag=true;
        }else if(n%2==0){
            flag=false;
        }else{
            for(i=3; i<n; i+=2){
                if(n%i==0){
                    flag=false;
                    break;
                }else{
                    flag=true;
                }
            }
        }
        return flag;
    }
    document.getElementById("click").addEventListener("click",function(){
        var x=document.getElementById("nhap").value*1;
        var html="";
        for(var j=1; j<=x; j++){
            if(kiemTra(j)){
                html+=j+" ";
            }
        }
        document.getElementById("result").innerHTML ="So nguyen to: " + html;
    })
