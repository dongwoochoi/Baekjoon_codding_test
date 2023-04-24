function solution(num) {
    var answer = -1;
    var i = 0;
    while((i < 500) && (num != 1) ){
        if(num % 2 == 0){
            num = num / 2;
        }else{
            num = (num * 3) + 1;
        }
        i = i + 1;
    }
    if(i == 500){
        return -1
    }else{
        return i
    }
}