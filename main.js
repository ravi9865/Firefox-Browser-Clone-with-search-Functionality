// outline onclick
function inputOutline() {
    let search = document.getElementsByClassName("search")[0];
    search.style.outline = "3px solid blue";
}

// search functionality
let a = document.querySelector("#search-a");
let input = document.querySelector("input");
let inputs = input.value.split(" ").join("+");
let frst_url = "https://google.com/search?q=";
// let frst_url = "https://";
// let second_url = ".com"
console.log(inputs);
a.addEventListener("click", ()=>{
    a.setAttribute("href",`${frst_url}${inputs}`)
    // a.setAttribute("href",`${frst_url}${inputs}${second_url}`)
    // a.setAttribute("href",`${inputs}`)
    // let str = a.toString();
    // let str1 = str.
    // console.log(str);
    console.log(a);
})
// input.addEventListener("onchange", ()=>{
//     a.setAttribute("href",`${frst_url}${inputs}`)
//     console.log(a);

// })




// let form = document.forms[0];
// form.addEventListener("submit", () => {
//     let a = document.querySelector("#search-a");
//     a.setAttribute("href", `${frst_url}${inputs}${second_url}`)
//     console.log(form.elements.input.value);
// })