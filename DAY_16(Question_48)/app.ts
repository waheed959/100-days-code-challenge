let set1 = [30000,15000,11000]
let set2 = [54000,44000,16000]

let result = [...set1 , ...set2].sort((a,b)=>a-b)
console.log(result)