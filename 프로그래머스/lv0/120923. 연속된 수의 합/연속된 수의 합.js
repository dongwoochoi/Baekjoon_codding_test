function solution(num, total) {
    var answer = [1];
    while (answer.length !== num){
        answer.push(answer[(answer.length)-1]+1)
    }
    
    var sum = 0;
    for (var i = 0; i < answer.length; i++){
        sum = sum + answer[i];
    }
    while (sum !== total){
        if( sum < total){
            for (var i = 0; i < answer.length; i++){
                answer[i] = answer[i] + 1;
            }
        }
        if(sum > total){
            for (var i = 0; i < answer.length; i++){
                answer[i] = answer[i] - 1;
            }
        }
        sum = 0;
        for (var i = 0; i < answer.length; i++){
            sum = sum + answer[i];
        }
    }
    
    return answer;
}

console.log(solution(3, 15))