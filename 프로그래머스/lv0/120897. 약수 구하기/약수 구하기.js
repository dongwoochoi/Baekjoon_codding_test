function solution(n) {
    var set = new Set();
    
    for(var i = 1; i < n+1; i++){
        if(n%i == 0){
            set.add(i);
        }
    }
    var answer = [...set];
    return answer;
}