const accountId= 123456
let accountEmail="akhilkadamabala@gmail.com"
var accountPass="1234567"
accountCity="jaipur"

accountEmail = "hc@hc.com"
accountPass = "21212121"
accountCity = "Bengaluru"
//  accountId=7890 (ye ni ho payega kyu ki tune const ke andar rka hai accountid ko and
// const ke andar rki hui cheeze permanennt ho jati hai,baki sab changes ho jayenge.)

console.log(accountPass) 
// this is to print single variable ,but if you have t0 print multiple things at a time then use

console.log([accountPass,accountEmail,accountCity])

// Prefer not to use var because of issue in block scope and functional scope.
