function solution(n)
{
    var answer = 0;
    var string = String(n)
    for(var i = 0; i < string.length; i++){
        answer = answer + parseInt(string[i])
    }

    return answer;
}