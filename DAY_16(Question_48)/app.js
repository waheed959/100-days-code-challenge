var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var set1 = [30000, 15000, 11000];
var set2 = [54000, 44000, 16000];
var result = __spreadArray(__spreadArray([], set1, true), set2, true).sort(function (a, b) { return a - b; });
console.log(result);
