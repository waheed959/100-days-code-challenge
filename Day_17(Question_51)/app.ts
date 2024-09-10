function area(length:number,width:number){
   console.log( length * width )
}
//Refactored into an arrow function

const Area = (length:number,width:number) => console.log( length * width )

area(2,5)
Area(2,5)
