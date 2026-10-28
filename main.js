let balans1 = alert("Balansda pul yetarli emas yoki umuman yoq !")
let balans2 = +prompt("Balansni toldiring !")

if (balans2 < 5000) {
    let javob = alert("Minimal kiritiladigan summa 5000 so'm")
    let balans2 = +prompt("Balansni toldiring !")
} else {
    let javob2 = alert("Xush kelibsiz !")
}

let balans = document.querySelector(".balans")
balans.textContent = balans2
let spin = document.querySelector(".SPIN")


spin.addEventListener('click', () => {

    let mevalr1 = ["💵", "🍒", "7️⃣"]
    let mevalr2 = ["💵", "🍒", "7️⃣"]
    let mevalr3 = ["💵", "🍒", "7️⃣"]

    let random1 = Math.round(Math.random() * 2)
    let random2 = Math.round(Math.random() * 2)
    let random3 = Math.round(Math.random() * 2)

    console.log(mevalr1[random1], mevalr2[random2], mevalr3[random3]);

    let win1 = document.querySelector('.win1')
    let win2 = document.querySelector('.win2')
    let win3 = document.querySelector('.win3')

    win1.textContent = mevalr1[random1]
    win2.textContent = mevalr2[random2]
    win3.textContent = mevalr3[random3]

    if (random1 === random2 && random3 === random1 && random2 === random3) {

        alert("sen g'o'libsan ")

    }

    balans2 -= 50;
    balans.textContent = balans2;

});
