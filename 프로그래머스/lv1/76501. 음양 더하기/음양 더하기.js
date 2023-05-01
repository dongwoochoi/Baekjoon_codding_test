function solution(absolutes, signs) {
    var answer = 0;
    var box = [];
    
    for(var i = 0; i < absolutes.length; i++){
        absolutes[i] = String(absolutes[i]);
    }
    
    for(var j = 0; j < absolutes.length; j++){
        if(signs[j] == true){
            signs[j] = ""
        }else{
            signs[j] = '-'
        }
        box.push(signs[j] + absolutes[j])
    }
    
    for(var k = 0; k < box.length; k++){
            box[k] = parseInt(box[k]);
            answer = answer + box[k]
    }
    
    return answer;
}