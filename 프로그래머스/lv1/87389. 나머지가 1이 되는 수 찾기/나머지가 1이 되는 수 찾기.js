function solution(n) {
    var answer = 0;
    var box = [];
    for(var i = 0; i < n; i++){
        if(n%i == 1){
            box.push(i);
        }
    }console.log(box)
    answer = Math.min.apply(null,box)
    return answer;
}