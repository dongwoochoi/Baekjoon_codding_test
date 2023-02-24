function solution(quiz) {
    var answer = [];
    for(var i = 0; i < quiz.length; i++){
        var box = quiz[i].split(" ");
        for(var j = 0; j < box.length; j++){
            var sum = 0;
            if(j == 0 | j%2 == 0 ){
                box[j] = parseInt(box[j])
            }
        }
        if(box[1] == "+"){
            sum = box[0] + box[2];
        }else{
            sum = box[0] - box[2];
        }
        if(sum == box[4]){
            answer.push("O");
        }else{
            answer.push("X");
        }
    }
    return answer;
}