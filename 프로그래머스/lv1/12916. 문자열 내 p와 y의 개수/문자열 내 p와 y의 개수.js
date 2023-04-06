function solution(s){
    var answer = true;
    var y1 = 0;
    var p1 = 0;
    var s_s = s.split("");
    for(var i = 0; i < s_s.length; i++){
        if(s_s[i] == "p"){
            p1 = p1 + 1;
        }
        if(s_s[i] == "P"){
            p1 = p1 + 1;
        }
        if(s_s[i] == "y"){
            y1 = y1 + 1;
        }
        if(s_s[i] == "Y"){
            y1 = y1 + 1;
        }
    }
    if(p1 !== y1){
        answer = false;
    }else if(p1 == 0 , y1 == 0){
        answer = true;
    }

    return answer;
}