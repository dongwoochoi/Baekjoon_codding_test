function solution(my_string) {
    var answer = '';
    var Arr = my_string.split('');
    for(var i = 0; i < Arr.length; i++){
        if(Arr[i] == Arr[i].toLowerCase()){
            Arr[i] = Arr[i].toUpperCase();
        }else{
            Arr[i] = Arr[i].toLowerCase()
        }
    }
    answer = Arr.join('');
    return answer;
}