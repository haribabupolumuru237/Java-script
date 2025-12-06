let count = 0
document.getElementById("increasebtn").addEventListener("click",increase)
document.getElementById("decreasebtn").addEventListener("click",decrease)
document.getElementById("resetbtn").addEventListener("click",reset)

function increase(){
    let step =Number(document.getElementById("step").value)
    count = step + count
    document.getElementById("count").innerHTML = count
}
function decrease(){
    let step =Number(document.getElementById("step").value)
    count = count - step
    document.getElementById("count").innerHTML = count
}
function reset(){
    count = 0
    document.getElementById("count").innerHTML = count
}

document.addEventListener("keydown",function(event){
    if(event.key === "+"){
        increase()
    }
    if(event.key === "-"){
        decrease()
    }
})