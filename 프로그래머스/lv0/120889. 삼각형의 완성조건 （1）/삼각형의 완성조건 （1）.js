function solution(sides) {
    var answer = 2;
    sides = sides.sort();
    if((sides[0] + sides[1]) > sides[2]){
        answer = 1
    }
    return answer;
}