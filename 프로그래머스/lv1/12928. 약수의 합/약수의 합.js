function solution(n) {
    var answer = 0;
    var box = [];
    for(var i = 1; i < (n/2)+1; i++){
        if(n%i == 0){
            box.push(i)
            box.push(n/i)
        }
    }
    var set = new Set(box)
    for(var value of set){
        answer = answer + value
    }
    return answer;
}