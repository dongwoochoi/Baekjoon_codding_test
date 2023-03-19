function solution(x) {
    var answer = false;
    var s = String(x);
    var sum = 0;
    for(var i = 0; i < s.length; i++){
        sum = sum + parseInt(s[i]);
    }
    if(x%sum == 0){
        answer = true;
    }
    return answer;
}