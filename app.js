let setRandom1 = Math.random()
setRandom1 = (Math.floor(setRandom1 * 6) + 1)

let randomNumber1 = setRandom1

let imgLink1 = "./images/dice" + randomNumber1 + ".png"

// var test = document.querySelector(".img1").attributes
// let img1 = document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png")
let img1 = document.querySelector(".img1").setAttribute("src", imgLink1)

let setRandom2 = Math.random()
setRandom2 = (Math.floor(setRandom2 * 6) + 1)
let randomNumber2 = setRandom2

let imgLink2 = "./images/dice" + randomNumber2 + ".png"

let img2 = document.querySelector(".img2").setAttribute("src", `${imgLink2}`)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🏆 Player 1 Wins!!!"
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "🚩 Player 2 Wins!!!"
}

else {
  document.querySelector("h1").textContent = "Draw"
}


console.log(img2);