const input1 = document.getElementById("inputtext")
const lower1 = document.getElementById("lowercase")
const upper1 = document.getElementById("uppercase")
const camel1 = document.getElementById("camelcase")
const pascal1 = document.getElementById("pascalcase")
const snake1 = document.getElementById("snakecase")
const kabab1 = document.getElementById("kababcase")

function camelcase(due){
    return due
    .split(" ")
    .map((word,index) => {
        word = word.toLowerCase()
        if(index === 0) return word
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join("")
}
function pascalcase(due){
    return due
    .split(" ")
    .map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
    .join("")
}
function snakecase(due){
    return due.toLowerCase().split(" ").join("_")
}
function kababcase(due){
    return due.toLowerCase().split(" ").join("-")
}


input1.addEventListener("input",()=>{
    const trimmed = input1.value.trim().replace(/\s+/g," ")

    lower1.textContent = trimmed.toLowerCase()
    upper1.textContent = trimmed.toUpperCase()
    camel1.textContent = camelcase(trimmed)
    pascal1.textContent = pascalcase(trimmed)
    snake1.textContent = snakecase(trimmed)
    kabab1.textContent = kababcase(trimmed)
})