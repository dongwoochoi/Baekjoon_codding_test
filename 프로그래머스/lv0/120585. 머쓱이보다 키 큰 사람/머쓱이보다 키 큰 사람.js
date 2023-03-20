function solution(array, height) {
    var answer = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > height){
            answer = answer + 1;
        }
    }
    return answer;
}