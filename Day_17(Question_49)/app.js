function hobby() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var i = rest_1[_a];
        console.log("I really like ".concat(i));
    }
}
hobby("studying", "playing cricket", "singing");
