function solution(my_string) {
    var answer = 0;
    var arr = my_string.split(" ");
    var sum = parseInt(arr[0]);
    for(var i = 0; i < arr.length; i++){
        
        if(arr[i] == "+"){
            sum = sum + parseInt(arr[i+1])
        }
        if(arr[i] == "-"){
            sum = sum - parseInt(arr[i+1])
        }
    }
    return sum;
}