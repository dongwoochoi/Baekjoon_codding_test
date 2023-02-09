function solution(my_str, n) {
    var answer = [];
    let my_str_c = my_str.split("");
    let count = my_str_c.length
    let how = parseInt(count/n)
    if(count/n > how){
        how = how + 1;
    }
    console.log(how)
    for (var i = 0;i < how; i++){
        let box = [];
        for (var j = 0; j < n; j++){
            box.push(my_str_c[j+(i*n)])
        }
        let sum = box.join('');
        answer.push(sum);
    }
    return answer;
}