function solution(order) {
    var answer = 0;
    var s_order = String(order).split('');
    for(var i = 0; i < s_order.length; i++){
        if(s_order[i] == '3'){
            answer = answer + 1;
        }
        if(s_order[i] == '6'){
            answer = answer + 1;
        }
        if(s_order[i] == '9'){
            answer = answer + 1;
        }
    }
    return answer;
}