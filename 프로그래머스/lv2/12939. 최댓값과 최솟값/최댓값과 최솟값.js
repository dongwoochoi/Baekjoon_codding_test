function solution(s) {
    var answer = '';
    var split = s.split(" ");
    var box = [];
    for(var i = 0; i < split.length; i++){
        box.push(parseInt(split[i]));
    }
    box.sort((a,b) => a-b)
    answer = String(box[0]) + " " + String(box[box.length - 1])
    return answer;
}