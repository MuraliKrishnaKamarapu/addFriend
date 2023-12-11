var isstatus = document.querySelector("h5")
var btn = document.querySelector("#add")

var flag = 0;
btn.addEventListener("click", function(){
    if (flag==0){
        isstatus.innerHTML = "Friend"
        isstatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1;
    } else{
        isstatus.innerHTML = "Not a Friend"
        isstatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0;
    }
    
    })
    
