let obj ={
    make : "hp",
    model : "abc12",
    year : 2020,
    describe:function(){
        console.log(`this laptop is made by ${this.make} company in ${this.year}  and model is ${this.model} `)
    }
}


obj.describe()
