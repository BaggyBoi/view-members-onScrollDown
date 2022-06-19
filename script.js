for (let i = 0; i < 20; i++) {
    let uname = `Baggy-${i + 1}`
    let surname = `Mard-${i + 1}`
    let url = "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
    let member = JSON.stringify({ name: uname, surname: surname, pfp: url })
    localStorage.setItem(`member${i + 1}`, member)
}
for (let i = 0; i < 20; i++) {
    viewDiv(i + 1)
}
for (let i = 11; i < 21; i++) {
    $(`#i${i}`).removeClass("visible")
    $(`#i${i}`).addClass("invisible")
}
function viewDiv(a) {
    let member = JSON.parse(localStorage.getItem(`member${a}`))
    let div = document.createElement("div")
    div.classList.add("member");
    div.classList.add("visible");
    div.setAttribute("id", `i${a}`)
    let img = document.createElement("img")
    img.setAttribute("src", member.pfp);
    let p1 = document.createElement("p")
    p1.innerText = member.name
    let p2 = document.createElement("p")
    p2.innerText = member.surname
    div.appendChild(img)
    div.appendChild(p1)
    div.appendChild(p2)
    document.querySelector("#main").appendChild(div)
}
let membOverallCount = 0
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(`member${i}`) != null) {
        membOverallCount++
    }
}
let divI = 11
let prevScroll = 0
// $(document).scroll(function () {
//     if ($(document).scrollTop() != 0) {
//         if (prevScroll != $(document).scrollTop) {
//             for (let i = 0; i < 2; i++) {
//                 $(`#i${divI}`).addClass("visible")
//                 $(`#i${divI}`).removeClass("invisible")
//                 divI++
//             }
//         }
//     }

// });

