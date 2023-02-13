function solution(my_string) {
    var answer = '';
    my_string = my_string.toLowerCase() 
    my_string = my_string.split('')
    my_string = my_string.sort()
    for(var i = 0; i < my_string.length ; i++){
        answer = answer + my_string[i]
    }
    return answer;
}