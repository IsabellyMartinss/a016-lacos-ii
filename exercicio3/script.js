const frutas = ["1º Morango", "2º Kiwi", "3º Uva", "4º Ameixa", "5º Banana"]

for(let i in frutas){
    for(let z of frutas[i]){
      console.log(`As frutas favoritas são, por ordem: \n${frutas[i]}`)
    }
  }
console.log("saiu do laço")

