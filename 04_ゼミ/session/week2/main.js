const memoInput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  console.dir(memoInput.value)
}

const card = document.createElement("div") // <div></div>
card.className = "element" // <div class="card></div>

addbutton.onclick = function () {
  const card = document.createElement("div")
  card.textContent = memoInput.value
  memoContainer.append(card)
}
