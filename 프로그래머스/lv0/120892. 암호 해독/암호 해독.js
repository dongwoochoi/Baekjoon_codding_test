function solution(cipher, code) {
    var answer = '';
    var box = [];
    var sen = cipher.split("");
    for(var i = 0; i < sen.length + 1; i++){
        if(((i+1) % code) == 0){
            box.push(sen[i]);
        }
    }
    answer = box.join('')
    return answer;
}