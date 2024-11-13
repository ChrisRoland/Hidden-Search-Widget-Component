$(".btn").on("click", () => {
    $(".search").toggleClass("active");
})

//Or

document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".search").classList.toggle("active")
    if (document.querySelector(".search").classList.contains("active")) {
        document.querySelector(".input").focus();
    }
})

//Or

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})
