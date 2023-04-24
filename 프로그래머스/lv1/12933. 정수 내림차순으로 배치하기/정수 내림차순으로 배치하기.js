function solution(n) {
    n = String(n).split("");
    for(var i = 0; i < n.length; i++){
        n[i] = parseInt(n[i])
    }
    n = n.sort((a,b) => {return b-a});
    
    var answer = parseInt(n.join(""));
    return answer;
}