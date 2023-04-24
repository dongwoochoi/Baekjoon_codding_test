function solution(phone_number) {
    phone_number = phone_number.split("")
    for(var i = 0; i < phone_number.length-4;i++){
        phone_number[i] = "*"
    }
    phone_number = phone_number.join("")
    var answer = phone_number;
    return answer;
}