// uso de while
let num = 1;
while(num<=5){
console.log(num);
num++;
};

// uso de for
const nombres = ['jose', 'juan','pedro','maria'];
for(let i=0;i<nombres.length; i++){

    console.log(nombres[i]);
};
// uso de forEach()
const numbers = [1,2,3,4,5,6];

const numbersx2 = numbers.forEach((values)=>{console.log(values*2)});

// uso de map()
const numbers1 = [1,3,5,7,9];
const squarenumbers1 = numbers1.map(val=>console.log(val*val));

// uso de find()
const vector = [1,3,6,10,15,34,12,9];

const resultvector = vector.find(value=> value>10);
console.log(resultvector);

// uso de some
const numberpar = vector.some(valor=>valor%2 === 0);
console.log(numberpar);

// uso de filter
const impar = vector.filter(val=>val%2 !=0);
console.log(impar);

//combiancion filter y map

const squareimpar = vector.filter(val=> val%2 !=0).map(val=>val*val);

console.log(squareimpar);