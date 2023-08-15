// search functionality
let a = document.querySelector("#search-a");
a.addEventListener("click", () => {
    let frst_url = "https://google.com/search?q=";
    let input = document.querySelector("input");
    let inputs = input.value.split(" ").join("+");

    a.setAttribute("href", `${frst_url}${inputs}`)
    input.value = "";
})

// outline onclick
let click_able = document.getElementById("search")
let input = document.querySelector("input");
let body = document.body;
let search = document.getElementsByClassName("search")[0];
click_able.addEventListener("click", () => {
    search.style.outline = "3px solid blue";
});
// body.addEventListener("click", () => {
//     search.style.outline = "none";
    
// })