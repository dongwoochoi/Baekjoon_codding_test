function solution(A, B) {
    var answer = 0;
    let A_split = A.split("");
    let B_split = B.split("");
    while (A_split.join('') !== B_split.join('')){
        let box = A_split[A_split.length-1]
        for(var i = A_split.length-1; i > -1; i = i-1){
            A_split[i] = A_split[i-1];
        }
        A_split[0] = box;
        answer = answer + 1
        if (answer > A_split.length-1){
            answer = -1;
            break;
        }
    }
    return answer;
}
