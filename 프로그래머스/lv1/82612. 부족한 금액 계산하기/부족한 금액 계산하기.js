function solution(price, money, count) {
    var answer = -1;
    var c = 0;
    for(var i = 1; i < count+1; i++){
        c = c + (price*i);
    }
    if(c > money){
        answer = c - money;
    }else{
        answer = 0;
    }
    return answer;
}