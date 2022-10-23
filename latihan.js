let sar = 10;
let sir = 20;
console.log(sar + sir);
console.log(typeof(sar));
console.log(typeof(sir));

let sar2 = "Raihan";
let sir2 = "Herlambang";
console.log("Halo namaku " + sar2);
console.log("Halo nama lengkapku " + sar2 + " " + sir2);

const sar3 = true;
const sar4 = true; 
const sir3 = false;
const sir4 = false;
console.log(sar3 && sar4);
console.log(sar3 && sir3);
console.log(sir3 || sar3);
console.log(sir3 || sir4);

let sar5 = 10;
let sar6 = 20;
let sar7 = sar5 += sar6;
console.log(sar7);

const myArray = ["1", "2", "3"]
for(let sar8 = 12; sar8 > 2; sar8++) {
    console.log(myArray[sar8]);
}

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

let sar9 = "Raihan";
let sar10 = "Herlambang";

if(sar9 === "Bunga") {
    sar10 = "Fairuz";
} else if (sar9 === "Fairuz") {
    sar10 = "Fauziah";
}

if(sar3 && true) {
    console.log(sar3);
} else {
    console.log("Keterangan salah");
}
console.log(sar10);