type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(n1: Combinable, n2: Combinable, resType: ConversionDescriptor){
    let result;
    if(typeof n1 === "number" && typeof n2 === "number"){
        result = +n1 + +n2;
    }
    else{
        result = n1.toString() + n2.toString();
    }
    return result;
}

console.log(combine(100,15, "as-number"));
console.log(combine("Hello ","World", "as-string"));