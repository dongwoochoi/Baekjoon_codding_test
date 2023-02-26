function solution(num, k) {
    var answer = 0;
    var arr = String(num).split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == String(k)){
            answer = i + 1;
            break
        }
        if(answer == 0){
            answer = -1;
        }
    }
    return answer;
}