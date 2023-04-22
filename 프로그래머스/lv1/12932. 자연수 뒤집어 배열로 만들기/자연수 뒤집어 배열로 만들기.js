function solution(n) {
    var answer = String(n).split("").reverse()
    for(var i = 0; i < answer.length; i++){
        answer[i] = parseInt(answer[i])
    }
    return answer;
}