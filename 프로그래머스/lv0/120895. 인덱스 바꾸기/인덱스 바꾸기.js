function solution(my_string, num1, num2) {
    var answer = '';
    var sArr = my_string.split('');
    var box = sArr[num1];
    sArr[num1] = sArr[num2];
    sArr[num2] = box;
    answer = sArr.join('');
    return answer;
}