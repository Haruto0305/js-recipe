const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]
const undoudekiruSeito = seisekibo.find((obj) => {
  return obj.taiiku >= 3
})

console.log(undoudekiruSeito)
