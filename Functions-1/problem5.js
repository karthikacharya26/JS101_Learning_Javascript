
function lowercase(arr){
    var lowercase = arr.map(function (str) {
        return str.toLowerCase()
    });
    return lowercase;

}
var arr =  ["MA", "SA", "I", "SCH", "OOL"];
console.log(lowercase(arr));

