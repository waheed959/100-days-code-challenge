var obj = {
    make: "hp",
    model: "abc12",
    year: 2020,
    describe: function () {
        console.log("this laptop is made by ".concat(this.make, " company in ").concat(this.year, "  and model is ").concat(this.model, " "));
    }
};
obj.describe();
