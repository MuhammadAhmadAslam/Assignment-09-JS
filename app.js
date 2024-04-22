let numberList = [ 10, 2, 3, 5, 6, 22, 100 , 15 , 25, 30, 9]
let empty = []
for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 3 == 0 && numberList[i] % 5 == 0) {
        empty.push('Three Five');
    }else if(numberList[i] % 3 == 0){
        empty.push('three')
    }else if(numberList[i] % 5 == 0){
        // numberList[i] = 'five';
        empty.push('five')
    }else{
        empty.push(numberList[i])
    }
    
}
console.log(numberList);
console.log(empty);







