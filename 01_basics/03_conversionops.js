let score=33

// console.log(typeof score); declares the type of score,that whether it is number or something else,output=number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); output will be number
// console.log(valueInNumber); displays the value in score
// we set value in number as number,soo if someone enters the string or something,it show data type as num.

// "33" => 33
// "33abc" => NaN(not a number)
//  true => 1; false => 0

let isLoggedIn="akhil"
let valueInisLoggedIn=Boolean(isLoggedIn)

// console.log(valueInisLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber=22
let stringNum=String(someNumber)
// console.log(typeof stringNum)


// *****************************************operations****************************************************

let value = 3
let negValue = -value
// console.log(negValue);output is -3

// console.log(2+2);4
// console.log(2-2);0
// console.log(2*2);4
// console.log(2**3);8
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " akhil"

let str3 = str1 + str2
// console.log(str3);hello akhil

// console.log("1" + 2);12
// console.log(1 + "2");12
// console.log("1" + 2 + 2);122
// console.log(1 + 2 + "2");32, actually agar string phele hai toh poora string consider hota hai,vhi agar
//  //    string and me use hota hai toh ,phele ops perform honge and then string add hoga

// console.log( (3 + 4) * 5 % 3);code readbilty is top priority

// console.log(+true);is used to convert to boolean so output will be 1
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);