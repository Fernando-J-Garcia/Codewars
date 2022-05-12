const { get } = require("http");

add("888", "222");
function add(a, b) {
    numA = stringToIntArray(a);
    numB = stringToIntArray(b);
    longestLength = numA.length > numB.length? longestLength = numA.length: longestLength = numB.length;
    const result = [];
    console.log('longest length = ' + longestLength);
    addZeros(numA,numB);
    total = getTotal(numA,numB);
    console.log('total: ' + total);
    evaluateTotal(total,total.length -1,result,0);
    result.reverse();
    console.log(result.join(''));
    return result.join(''); // Fix me!
  }

function addZeros(a,b){
    if(a.length == b.length) return;
    aIsLarger = false;
    bIsLarger = false;
    if(a.length > b.length) aIsLarger = true;
    else bIsLarger = true;
    difference = Math.abs(a.length - b.length);
    for(let i = 0; i < difference; i++){
        if(aIsLarger)b.unshift(0);
        if(bIsLarger)a.unshift(0);
    }
    console.log(a);
    console.log(b);
}
function getTotal(a,b){
    const result = [];
    for(let i = 0; i < a.length; i++){
        result.push(a[i] + b[i]);
    }
    return result;
}
function evaluateTotal(total,index,result,addAmount){
    console.log(result);    
    if(total[index] === undefined){
        console.log('total undefined addamount = ' + addAmount);
        if(addAmount != 0){
            result.push(addAmount);
            return;
        }
        else return;        
    }    
    total[index] = total[index] + addAmount;    
    if(total[index] > 9) {   
        remainder = total[index] - 10;     
        result.push(remainder);
        console.log('pushed 0 remainder = ' + remainder );
        evaluateTotal(total,index-1,result,1);
    }
    else {
        console.log('pushed '+ total[index]);
        result.push(total[index]);
        evaluateTotal(total,index-1,result,0);
    }
}
function stringToIntArray(string){
    const result = [];
    for(let i = 0; i < string.length; i++){
        result.push(parseInt(string[i]));
    }
    return result;
}