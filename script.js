for (let i = 0; i < 15; i++) {
    let uname = `Baggy-${i + 1}`
    let surname = `Mard-${i + 1}`
    let url = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    let member = JSON.stringify({ name: uname, surname: surname, pfp: url })
    localStorage.setItem(`member${i + 1}`, member)
}
for (let i = 0; i < 15; i++) {
    viewDiv(i+1)
}
for (let i = 0; i < 6; i++) {
    $(`#i1${i}`).addClass("invisible")
}
function viewDiv(a) {
    debugger;
    let member = JSON.parse(localStorage.getItem(`member${a}`))
    let div = document.createElement("div")
    div.classList.add("member");
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
$(document).scroll(function () {
    addclass(1000, "#i10")
    addclass(1150, "#i11")
    addclass(1300, "#i12")
    addclass(1450, "#i13")
    addclass(1600, "#i14")
    addclass(1750, "#i15")
});
function addclass(a,b) {
    if ($(document).scrollTop() > a) {
        $(b).addClass("visible")
    }
    else{
        $(b).addClass("invisible")
    }
}