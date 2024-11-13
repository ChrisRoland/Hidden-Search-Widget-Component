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

echo "# Hidden Search Widget Component. Live: https://chrisroland.github.io/Hidden-Search-Widget-Component" >> README.md
git init
git add .
git commit -m "Hidden Search Widget Component"
git branch -M main
git remote add origin git@github.com:ChrisRoland/Hidden-Search-Widget-Component.git
git push -u origin main
