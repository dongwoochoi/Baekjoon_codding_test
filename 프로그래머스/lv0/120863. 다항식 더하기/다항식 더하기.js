function solution(p) {
    var answer = '';
    var arr = p.split(' ');
    var xarr = [];
    var xsum = 0;
    var intsum = 0;
    var intarr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].includes('x')){
            if(arr[i] == 'x'){
                xarr.push(1);
            }else{
                xarr.push(parseInt(arr[i].replace('x','')));
            }
        }else if(arr[i] != '+'){
            intarr.push(parseInt(arr[i]))
            console.log(1)
        }
    }
    for(var j = 0; j < xarr.length; j++){
        xsum = xsum + xarr[j];
    }
    for(var k = 0; k < intarr.length; k++){
        intsum = intsum + intarr[k];
    }
    if(xsum == 0){
        answer = String(intsum);
    }else{
        if(xsum == 1){
            answer = "x";
        }else{
            answer = String(xsum)+"x"
        }
        if(intsum != 0){
           answer =  answer + " + " + String(intsum)
        }
    }
    
    return answer;
}