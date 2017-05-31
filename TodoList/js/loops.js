// alert("Connected");

//  CHALLENGE ONE


// return is true or false ----  return num % 2 === 0;  is viable
// function isEven(num){
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//  CHALLENGE TWO

// function kebab(str) {
//     for (var i = 0; i <= str.length; i++){
//         if (str[i] === "-") {
//          str[i] = "_";
//         }
//         console.log(kebab);
//     }
// }


// CHALLENGE THREE

// );

function factorial(num){

    var result = 1;

    for(var i = 2; i <= num; i++) {
        result *= i;
    }

    return result;

}
