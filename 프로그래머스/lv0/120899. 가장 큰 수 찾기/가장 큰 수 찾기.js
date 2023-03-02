function solution(array) {
    var answer = [0,0];
    var a = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > a){
            answer[0] = array[i];
            answer[1] = i;
            a = array[i]
        }
    }
    return answer;
}