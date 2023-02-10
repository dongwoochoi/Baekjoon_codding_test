function solution(array) {
    var answer = 0;
    let new_l = [];
    for(var i = 0; i < array.length; i++){
        let box = String(array[i]).split("");
        for(var j = 0; j < box.length; j++){
            new_l.push(box[j]);
        }
    }
    for(var k = 0; k < new_l.length; k++){
        if(new_l[k]=="7"){
            answer = answer + 1;
        }
    }
    
    return answer;
}